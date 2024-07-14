import { BigInt } from "@graphprotocol/graph-ts"

import { AirdropClaimed as AirdropClaimedEvent } from "../generated/ClaimEmitter/ClaimEmitter"
import { Airdrop, Claimer, Claim } from "../generated/schema"

export function createClaimer(event: AirdropClaimedEvent): void {
  let id = event.params.claimContract.toHex() + "-" + event.params.user.toHex()
  let claimer = Claimer.load(id)

  if (claimer) {
    claimer.totalAmountClaimed = claimer.totalAmountClaimed.plus(
      event.params.airdropAmount
    )

    claimer.save()
  } else {
    let claimer = new Claimer(id)

    claimer.claimAddress = event.params.claimContract
    claimer.claimerAddress = event.params.user
    claimer.totalAmountClaimed = event.params.airdropAmount

    claimer.save()
  }
}

export function createAirdrop(event: AirdropClaimedEvent): void {
  let id = event.transaction.hash.toHex()
  let airdrop = new Airdrop(id)

  airdrop.txHash = event.transaction.hash
  airdrop.claimAddress = event.params.claimContract
  airdrop.claimerAddress = event.params.user
  airdrop.amountClaimed = event.params.airdropAmount
  airdrop.totalAmountClaimed = event.params.claimedAmount
  airdrop.airdropToken = event.params.token
  airdrop.timestamp = event.block.timestamp

  airdrop.save()
}

export function updateClaimOnAirdrop(
  event: AirdropClaimedEvent,
  claimAddress: string
): void {
  let claimerId =
    event.params.claimContract.toHex() + "-" + event.params.user.toHex()
  let claimer = Claimer.load(claimerId)
  let claim = Claim.load(claimAddress)
  if (!claim) return

  claim.totalAmountClaimed = claim.totalAmountClaimed.plus(
    event.params.airdropAmount
  )

  if (!claimer)
    claim.numOfUsersClaimed = claim.numOfUsersClaimed.plus(BigInt.fromI32(1))

  claim.save()
}
