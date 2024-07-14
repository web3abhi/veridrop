import {
  ClaimContractDeployed as ClaimContractDeployedEvent,
  AirdropClaimed as AirdropClaimedEvent,
  RollbackTokens as RollbackTokensEvent,
  ChangeStartAndEndTime as ChangeStartAndEndTimeEvent,
  DepositTokens as DepositTokensEvent,
  ToggleClaim as ToggleClaimEvent,
} from "../generated/ClaimEmitter/ClaimEmitter"
import { createClaim } from "./claims"
import { createClaimer, createAirdrop, updateClaimOnAirdrop } from "./airdrop"
import { handleClaimAmtOnRollback } from "./rollbackToken"
import { updateStartAndEndTime } from "./dates"
import { addDepositAmtToClaimAmt, createDeposit } from "./deposit"
import { toggleClaim } from "./toggleClaim"

export function handleClaimContractDeployed(
  event: ClaimContractDeployedEvent
): void {
  createClaim(event)
}

export function handleAirdropClaimed(event: AirdropClaimedEvent): void {
  let claimAddress = event.params.claimContract.toHex()

  // Update numOfUsersClaimed & totalAmountClaimed in claim entity
  updateClaimOnAirdrop(event, claimAddress)

  // Update claimer
  createClaimer(event)

  // Update airdrop
  createAirdrop(event)
}

export function handleRollbackTokens(event: RollbackTokensEvent): void {
  handleClaimAmtOnRollback(event)
}

export function handleChangeStartAndEndTime(
  event: ChangeStartAndEndTimeEvent
): void {
  updateStartAndEndTime(event)
}

export function handleDepositTokens(event: DepositTokensEvent): void {
  createDeposit(event)

  addDepositAmtToClaimAmt(event)
}

export function handleToggleClaim(event: ToggleClaimEvent): void {
  toggleClaim(event)
}
