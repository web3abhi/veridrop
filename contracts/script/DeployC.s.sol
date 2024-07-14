// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../contracts/WAGMIToken.sol";
import "../contracts/ClaimFactory.sol";
import "../contracts/ClaimEmitter.sol";
import "../contracts/Claim.sol";

contract DeployC is Script {
    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        Claim claim = new Claim();
        
        ClaimFactory claimFactory = new ClaimFactory();
        claimFactory.initialize(address(claim), 0, 0, "84532");
        
        ClaimEmitter claimEmitter = new ClaimEmitter();
        claimEmitter.initialize(address(claimFactory), address(claim));

        claimFactory.setEmitter(address(claimEmitter));

        // WAGMIToken token = new WAGMIToken();

        console.log("Claim deployed at:", address(claim));
        console.log("ClaimFactory deployed at:", address(claimFactory));
        console.log("ClaimEmitter deployed at:", address(claimEmitter));
        // console.log("Token deployed at:", address(token));

        vm.stopBroadcast();
    }
}