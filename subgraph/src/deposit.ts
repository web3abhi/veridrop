import { DepositTokens as DepositTokensEvent } from "../generated/ClaimEmitter/ClaimEmitter"
import { Deposit, Claim } from "../generated/schema"

export function createDeposit(event: DepositTokensEvent): void {
  let id = event.transaction.hash.toHex()
  let deposit = new Deposit(id)

  deposit.txHash = event.transaction.hash
  deposit.claimAddress = event.params.claimContract
  deposit.depositorAddress = event.params.depositor
  deposit.depositAmount = event.params.amount
  deposit.timestamp = event.block.timestamp

  deposit.save()
}

export function addDepositAmtToClaimAmt(event: DepositTokensEvent): void {
  let id = event.params.claimContract.toHex()
  let claim = Claim.load(id)
  if (!claim) return

  claim.totalClaimAmount = claim.totalClaimAmount.plus(event.params.amount)

  claim.save()
}
