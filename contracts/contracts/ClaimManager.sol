// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import { OApp, Origin, MessagingFee } from "@layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OApp.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract MyOApp is OApp {
    constructor() OApp(address(0x6EDCE65403992e310A62460808c4b910D972f10f), msg.sender) Ownable(_owner) {}

    // Some arbitrary data you want to deliver to the destination chain!
    /**
     * @notice Sends a message from the source to destination chain.
     * @param _dstEid Destination chain's endpoint ID.
     * @param _message The message to send.
     * @param _options Message execution options (e.g., for sending gas to destination).
     */
    function claim(
        uint32 _dstEid,
        bytes calldata _options,
        uint256 _amount,
        address _receiver,
        bytes32[] calldata _merkleProof,
        bytes memory _encodedData,
        uint256 _tokenId,
        address signal, 
        uint256 root, 
        uint256 nullifierHash, 
        uint256[8] calldata proof
    ) external payable {
        // Encodes the message before invoking _lzSend.
        // Replace with whatever data you want to send!
        bytes memory _payload = abi.encode(_amount, _receiver, _merkleProof, _encodedData, _tokenId, signal, root, nullifierHash, proof);
        _lzSend(
            _dstEid,
            _payload,
            _options,
            // Fee in native gas and ZRO token.
            MessagingFee(msg.value, 0),
            // Refund address in case of failed source message.
            payable(msg.sender)
        );
    }
}