// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import {Attestation} from "@eas/contracts/IEAS.sol";

import {ScrollBadgeAccessControl} from "../extensions/ScrollBadgeAccessControl.sol";
import {ScrollBadgeSingleton} from "../extensions/ScrollBadgeSingleton.sol";
import {ScrollBadge} from "../ScrollBadge.sol";
import "../extensions/ScrollBadgeDefaultURI.sol";

contract SymbiosisBadge is ScrollBadgeAccessControl, ScrollBadgeSingleton, ScrollBadgeDefaultURI {

    constructor(address resolver_, string memory tokenUri_) ScrollBadge(resolver_) ScrollBadgeDefaultURI(tokenUri_){

    }

    /// @inheritdoc ScrollBadge
    function onIssueBadge(Attestation calldata attestation)
    internal
    override (ScrollBadgeAccessControl, ScrollBadgeSingleton)
    returns (bool)
    {
        return super.onIssueBadge(attestation);
    }

    /// @inheritdoc ScrollBadge
    function onRevokeBadge(Attestation calldata attestation)
    internal
    override (ScrollBadgeAccessControl, ScrollBadgeSingleton)
    returns (bool)
    {
        return super.onRevokeBadge(attestation);
    }
}
