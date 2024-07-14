// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WAGMIToken is ERC20 {
    constructor() ERC20("WAGMIToken", "WAGMI") {
        uint256 initialSupply = 1000000000000000000000000; // 1,000,000 WAGMI
        _mint(msg.sender, initialSupply);
    }
}