import { ToggleClaim as ToggleClaimEvent } from "../generated/ClaimEmitter/ClaimEmitter"
import { Claim } from "../generated/schema"

export function toggleClaim(event: ToggleClaimEvent): void {
  let id = event.params.claimContract.toHex()
  let claim = new Claim(id)

  claim.isActive = event.params.status

  claim.save()
}
