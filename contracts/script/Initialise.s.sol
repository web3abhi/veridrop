// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../contracts/ClaimHelper.sol";

interface  IClaimFactory {
    function initialize(address claimImplementation, uint256 _claimFee, uint256 _claimPrice, bytes calldata networkId) external;
    function setEmitter(address _emitterContract) external;
    function deployClaimContract(ClaimSettings memory _claimSettings,uint256 totalWallets, uint256 blockNumber, string calldata whitelistNetwork) external;
}

interface  IClaimEmitter {
    function initialize(address _factory, address _disburse) external;
}

contract InitialiseScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        // address claimFactoryAddress = address(0x34e90BA3af6af98f0F2122981d8B9bB9d687D670); // ClaimFactory contract address
        // address claimEmitterAddress = address(0x81cAb19df1f23CC7e4E82261af38b0512368E09F); // ClaimEmitter contract address

        vm.startBroadcast(deployerPrivateKey);

        IClaimFactory claimFactory = IClaimFactory(0x34e90BA3af6af98f0F2122981d8B9bB9d687D670);
        // IClaimEmitter claimEmitter = IClaimEmitter(0x81cAb19df1f23CC7e4E82261af38b0512368E09F);

        // claimFactory.initialize(address(0xeF2b8271F5e43c5f0B1132393b40456E2FC680C1), 0, 0, "84532");
        // claimEmitter.initialize(address(0x34e90BA3af6af98f0F2122981d8B9bB9d687D670), address(0x886F5a07Ef9E069CbabebF88699977613a3917E7));
        // claimFactory.setEmitter(address(0x81cAb19df1f23CC7e4E82261af38b0512368E09F));

        ClaimSettings memory c = ClaimSettings({
            name: "Test",
            creatorAddress: address(0x371EDf79bdD56fE1633eadfB4E78291C94f13c01),
            walletAddress: address(0x371EDf79bdD56fE1633eadfB4E78291C94f13c01),
            airdropToken: address(0x8F3C006946382865715B9D2f40995584DA50FA3A),
            daoToken: address(0x0000000000000000000000000000000000000000),
            tokenGatingValue: 0,
            startTime: 1720833412,
            endTime: 1721438512,
            cooldownTime: 0,
            hasAllowanceMechanism: false,
            isEnabled: true,
            merkleRoot: 0x0,
            permission: CLAIM_PERMISSION.FreeForAll,
            claimAmountDetails: ClaimAmountDetails({
                maxClaimable: 1000000000000000000,
                totalClaimAmount: 100000000000000000000
            })
        });

        claimFactory.deployClaimContract(c, 0, 0, "84532");
        //   ClaimSettings memory _claimSettings,uint256 totalWallets, uint256 blockNumber, string calldata whitelistNetwork

        vm.stopBroadcast();
    }
}