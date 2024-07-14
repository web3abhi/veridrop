// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";

import "../contracts/ClaimWID.sol";

contract DeployW is Script {
    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        ClaimWID claim = new ClaimWID(address(0x42FF98C4E85212a5D31358ACbFe76a621b50fC02), "app_3066124e44753d8dffd50878d8498345", "claim", address(0x6EDCE65403992e310A62460808c4b910D972f10f), msg.sender);
        console.log("ClaimWID deployed at:", address(claim));

        vm.stopBroadcast();
    }
}