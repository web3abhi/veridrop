import { ChangeStartAndEndTime as ChangeStartAndEndTimeEvent } from "../generated/ClaimEmitter/ClaimEmitter"
import { Claim } from "../generated/schema"

export function updateStartAndEndTime(event: ChangeStartAndEndTimeEvent): void {
  let id = event.params.claimContract.toHex()
  let claim = Claim.load(id)
  if (!claim) return

  claim.startTime = event.params.newStartTime
  claim.endTime = event.params.newEndTime

  claim.save()
}
