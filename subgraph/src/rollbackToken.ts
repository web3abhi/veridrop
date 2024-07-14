import { RollbackTokens as RollbackTokensEvent } from "../generated/ClaimEmitter/ClaimEmitter"
import { Claim } from "../generated/schema"

export function handleClaimAmtOnRollback(
  event: RollbackTokensEvent
): void {
  let id = event.params.claimContract.toHex()
  let claim = Claim.load(id)
  if (!claim) return

  claim.totalClaimAmount = claim.totalClaimAmount.minus(event.params.amount)

  claim.save()
}
