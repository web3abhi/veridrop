// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import { OApp, Origin, MessagingFee } from "@layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OApp.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import {DATAL0} from "./ClaimHelper.sol";

contract ClaimManager is OApp {
    constructor() OApp(address(0x6EDCE65403992e310A62460808c4b910D972f10f), msg.sender) Ownable(msg.sender) {}

    // Some arbitrary data you want to deliver to the destination chain!
    /**
     * @notice Sends a message from the source to destination chain.
     * @param _dstEid Destination chain's endpoint ID.
     * @param _options Message execution options (e.g., for sending gas to destination).
     */
    function claim(
        uint32 _dstEid,
        bytes calldata _options,
        DATAL0 memory _data
    ) external payable {
        // Encodes the message before invoking _lzSend.
        // Replace with whatever data you want to send!
        bytes memory _payload = abi.encode(_data);
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

    function _lzReceive(
        Origin calldata _origin,
        bytes32 _guid,
        bytes calldata _message,
        address _executor,
        bytes calldata _extraData
    ) internal virtual override {}
}