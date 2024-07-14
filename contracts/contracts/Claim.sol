// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "./ClaimEmitter.sol";
import "./ClaimHelper.sol";

import { OApp, Origin, MessagingFee } from "@layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OApp.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

import { ByteHasher } from './helpers/ByteHasher.sol';

interface IERC20Extended is IERC20 {
    function decimals() external view returns (uint8);
    function supportsInterface(bytes4 interfaceId) external view returns (bool);
    function balanceOf(address account, uint256 tokenId) external view returns (uint256);
}

interface IFactory {
    function claimFee() external view returns (uint256);
}

contract Claim is AccessControl, Initializable, OApp {

    constructor() OApp(address(0x6EDCE65403992e310A62460808c4b910D972f10f), msg.sender) Ownable(msg.sender) {}

    using SafeERC20 for IERC20;

    address private emitterContract;

    address private factory;

    ///@dev Airdrop balance
    uint256 public claimBalance;

    ///@dev claim settings
    ClaimSettings public claimSettings;

    ///@dev mapping to keep track of amount to claim for a address
    mapping(address => uint256) public claimAmount;
    ///@dev mapping to keep track of amount to claim for a address
    mapping(address => CoolDownClaimDetails[]) public PendingClaimDetails;

    function _lzReceive(
        Origin calldata _origin,
        bytes32 _guid,
        bytes calldata payload,
        address,  // Executor address as specified by the OApp.
        bytes calldata  // Any extra data or options to trigger on receipt.
    ) internal override {
        // Decode the payload to get the message
        // In this case, type is string, but depends on your encoding!
        DATAL0 memory data = abi.decode(payload, (DATAL0));
        claim(data._amount, data._receiver, data._merkleProof, data._encodedData, data._tokenId);
    }

    function initialize(address _admin, ClaimSettings memory _claimSettings, address _factory, address _emitter)
        external
        initializer
    {
        claimSettings = _claimSettings;
        claimBalance = _claimSettings.claimAmountDetails.totalClaimAmount;

        if (!claimSettings.hasAllowanceMechanism) {
            claimSettings.walletAddress = address(this);
        }

        factory = _factory;
        emitterContract = _emitter;

        _grantRole(DEFAULT_ADMIN_ROLE, _admin);
        _grantRole(MODERATOR, _admin);
    }


    /// @notice This function is used to allocate particular amount of tokens
    /// @dev This function maps claim amount to a address based on settings
    /// @param _amount amount in decimals to claim
    /// @param _merkleProof merkle proof to check validity
    function claim(
        uint256 _amount,
        address _receiver,
        bytes32[] memory _merkleProof,
        bytes memory _encodedData,
        uint256 _tokenId
    ) internal {
        
        // Load in memory for gas savings
        ClaimSettings memory claimSettingsMemory = claimSettings;

        // Check if claim is enabled
        if (!claimSettings.isEnabled) revert ClaimNotStarted();
        
        // Check if claim still open
        if (claimSettingsMemory.startTime > block.timestamp) {
            revert ClaimNotStarted();
        }
        
        if (claimSettingsMemory.endTime < block.timestamp) revert ClaimClosed();

        // Checking permissions
        if (claimSettingsMemory.permission == CLAIM_PERMISSION.TokenGated) {
            // Check if user has the minimum required token amount
            // Interface ID for ERC1155 is 0xd9b67a26
            if (IERC20Extended(claimSettingsMemory.daoToken).supportsInterface(0xd9b67a26)) {
                if (
                    IERC20Extended(claimSettingsMemory.daoToken).balanceOf(msg.sender, _tokenId)
                        < claimSettingsMemory.tokenGatingValue
                ) revert InsufficientBalance();
            } else {
                if (IERC20(claimSettingsMemory.daoToken).balanceOf(msg.sender) < claimSettingsMemory.tokenGatingValue) {
                    revert InsufficientBalance();
                }
            }
        } else if (
            claimSettingsMemory.permission == CLAIM_PERMISSION.Whitelisted
                || claimSettingsMemory.permission == CLAIM_PERMISSION.Prorata
        ) {
            bytes32 leaf = keccak256(_encodedData);
            (address _adr, uint256 _maximumClaimAmount) = abi.decode(_encodedData, (address, uint256));

            if (!MerkleProof.verify(_merkleProof, claimSettingsMemory.merkleRoot, leaf)) revert IncorrectProof();

            // Check that the proof submitted by the right wallet.
            if (_adr != msg.sender) revert IncorrectUserAddress();
            // Check that the requested amount is not higher than what the wallet is allowed to claim
            require(claimAmount[msg.sender] + _amount <= _maximumClaimAmount, "Not Allowed");
        }

        //Setting claim amount
        claimAmount[msg.sender] += _amount;

        require(claimSettingsMemory.claimAmountDetails.maxClaimable >= claimAmount[msg.sender], "Max claim reached");

        //If there is a cooldown, start it until user can claim the tokens
        if (claimSettingsMemory.cooldownTime != 0) {
            if (PendingClaimDetails[_receiver].length > 20) revert MaxReached();
            CoolDownClaimDetails memory newCoolDownClaimDetails =
                CoolDownClaimDetails(block.timestamp + claimSettingsMemory.cooldownTime, _amount);
            PendingClaimDetails[_receiver].push(newCoolDownClaimDetails);
        } else {
            airdropTokens(_amount, _receiver);
        }

        ClaimEmitter(emitterContract).airdropClaimed(
            address(this), msg.sender, claimSettingsMemory.airdropToken, claimAmount[msg.sender], _amount
        );
    }

    function claimAllPending(address _receiver) external {
        CoolDownClaimDetails[] storage pendingClaims = PendingClaimDetails[_receiver];

        uint256 totalClaimAmount;

        for (uint256 i; i < pendingClaims.length;) {
            CoolDownClaimDetails memory _claim = pendingClaims[i];
            if (_claim.unlockTime <= block.timestamp) {
                uint256 amountToClaim = _claim.unlockAmount;
                totalClaimAmount += amountToClaim;

                // Shift elements to the left starting from the current index
                for (uint256 j = i; j < pendingClaims.length - 1; j++) {
                    pendingClaims[j] = pendingClaims[j + 1];
                }

                // Resize the array by reducing its length by 1
                pendingClaims.pop();
            } else {
                // Increment the index only when the claim is not removed
                ++i;
            }
        }
        PendingClaimDetails[_receiver] = pendingClaims;
        airdropTokens(totalClaimAmount, _receiver);
    }

    /// @notice This function is used to disburse allocated tokens
    /// @dev This function gets mapped amount for a particular user and transfers it
    /// @dev User can make multiple calls to this function to withdraw tokens
    function airdropTokens(uint256 _amount, address _receiver) private {
        if (claimSettings.hasAllowanceMechanism) {
            if (claimBalance < _amount) revert InsufficientBalance();
            IERC20(claimSettings.airdropToken).safeTransferFrom(claimSettings.walletAddress, _receiver, _amount);
        } else {
            IERC20(claimSettings.airdropToken).safeTransfer(_receiver, _amount);
        }
        claimBalance = claimBalance - _amount;
    }

    /// @dev This function is used to deposit tokens to the claim pool
    /// @dev Only admin can call this function
    /// @param _amount Amount of tokens to deposit
    function depositTokens(uint256 _amount, bytes32 _newRoot) external onlyRole(MODERATOR) {
        ClaimSettings memory claimSettingsMemory = claimSettings;

        if (claimSettingsMemory.hasAllowanceMechanism) {
            revert HasAllowanceMechanism();
        }

        if (
            claimSettingsMemory.permission == CLAIM_PERMISSION.Whitelisted
                || claimSettingsMemory.permission == CLAIM_PERMISSION.Prorata
        ) {
            claimSettings.merkleRoot = _newRoot;
            ClaimEmitter(emitterContract).changeRoot(address(this), _newRoot);
        }

        IERC20(claimSettingsMemory.airdropToken).safeTransferFrom(msg.sender, address(this), _amount);

        claimSettings.claimAmountDetails.totalClaimAmount += _amount;
        claimBalance += _amount;

        ClaimEmitter(emitterContract).depositTokens(msg.sender, address(this), _amount);
    }

    /// @dev This function is used to withdraw tokens deposited by the admin
    /// @dev Only admin can call this function
    /// @param _amount Amount of tokens to withdraw
    function rollbackTokens(uint256 _amount, address rollbackAddress) external onlyRole(MODERATOR) {
        IERC20(claimSettings.airdropToken).safeTransfer(rollbackAddress, _amount);

        claimSettings.claimAmountDetails.totalClaimAmount = claimSettings.claimAmountDetails.totalClaimAmount - _amount;
        claimBalance = claimBalance - _amount;

        ClaimEmitter(emitterContract).rollbackTokens(address(this), msg.sender, _amount);
    }

    /// @dev This function is used to change merkle root
    /// @dev Only admin can call this function
    /// @param _newRoot New merkle root
    function changeRoot(bytes32 _newRoot) external onlyRole(MODERATOR) {
        claimSettings.merkleRoot = _newRoot;
        ClaimEmitter(emitterContract).changeRoot(address(this), _newRoot);
    }

    /// @dev This function is used to change claim amount details
    /// @dev Only admin can call this function
    /// @param _newMaxClaimAmount New max claim amount
    function changeMaxClaimAmount(uint256 _newMaxClaimAmount) external onlyRole(MODERATOR) {
        if (_newMaxClaimAmount == 0) revert InvalidAmount();
        claimSettings.claimAmountDetails.maxClaimable = _newMaxClaimAmount;
        ClaimEmitter(emitterContract).changeMaxClaimAmount(address(this), _newMaxClaimAmount);
    }

    /// @dev This function is used to toggle claim on/off
    /// @dev Only admin can call this function
    function toggleClaim() external onlyRole(MODERATOR) {
        claimSettings.isEnabled = !claimSettings.isEnabled;
        ClaimEmitter(emitterContract).toggleClaim(address(this), claimSettings.isEnabled);
    }

    /// @dev This function is used to change cool down time
    /// @dev Only admin can call this function
    /// @param _coolDownTime New cooldown time
    function changeCooldownTime(uint256 _coolDownTime) external onlyRole(MODERATOR) {
        claimSettings.cooldownTime = _coolDownTime;
        ClaimEmitter(emitterContract).changeCooldownTime(address(this), _coolDownTime);
    }

    /// @dev This function is used to change claim start and end time
    /// @dev Only admin can call this function
    /// @param _startTime New start time
    /// @param _endTime New end time
    function changeStartAndEndTime(uint256 _startTime, uint256 _endTime) external onlyRole(MODERATOR) {
        if (_startTime > _endTime || _endTime < _startTime) {
            revert InvalidTime();
        }

        claimSettings.startTime = _startTime;
        claimSettings.endTime = _endTime;

        ClaimEmitter(emitterContract).changeStartAndEndTime(address(this), _startTime, _endTime);
    }

    function addAdmin(address _admin) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(DEFAULT_ADMIN_ROLE, _admin);
        _grantRole(MODERATOR, _admin);
    }

    function encode(address _userAddress, uint256 _amount) public pure returns (bytes memory) {
        return abi.encode(_userAddress, _amount);
    }
}