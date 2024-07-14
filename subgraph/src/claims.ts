import { BigInt } from "@graphprotocol/graph-ts"

import { ClaimContractDeployed as ClaimContractDeployedEvent } from "../generated/ClaimEmitter/ClaimEmitter"
import { Claim } from "../generated/schema"

export function createClaim(event: ClaimContractDeployedEvent): void {
  let id = event.params.claimContract.toHex()
  let claim = new Claim(id)

  claim.txHash = event.transaction.hash
  claim.claimAddress = event.params.claimContract
  claim.creatorAddress = event.params.claimSettings.creatorAddress
  claim.tokenDistributionWallet = event.params.claimSettings.walletAddress
  claim.airdropToken = event.params.claimSettings.airdropToken
  claim.whitelistToken = event.params.claimSettings.daoToken
  claim.whitelistTokenBlockNum = event.params.blockNumber
  claim.whitelistTokenNetwork = event.params.whitelistNetwork
  claim.minWhitelistTokenValue = event.params.claimSettings.tokenGatingValue
  claim.startTime = event.params.claimSettings.startTime
  claim.endTime = event.params.claimSettings.endTime
  claim.coolDownTime = event.params.claimSettings.cooldownTime
  claim.hasAllowanceMechanism = event.params.claimSettings.hasAllowanceMechanism
  claim.merkleRoot = event.params.claimSettings.merkleRoot
  claim.maxClaimableAmount =
    event.params.claimSettings.claimAmountDetails.maxClaimable
  claim.totalClaimAmount =
    event.params.claimSettings.claimAmountDetails.totalClaimAmount
  claim.admins = [event.params.claimSettings.creatorAddress]
  claim.moderators = []
  claim.description = event.params.claimSettings.name
  claim.totalAmountClaimed = BigInt.fromI32(0)
  claim.numOfUsersClaimed = BigInt.fromI32(0)
  claim.totalUsers = event.params.totalWallets
  claim.claimType = BigInt.fromI32(event.params.claimSettings.permission)
  claim.timestamp = event.block.timestamp
  claim.isActive = true
  claim.networkId = "0x13e31"

  claim.save()
}
