import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AirdropClaimed,
  ChangeCooldownTime,
  ChangeMaxClaimAmount,
  ChangeRollbackAddress,
  ChangeRoot,
  ChangeStartAndEndTime,
  ClaimContractDeployed,
  DepositTokens,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  RollbackTokens
} from "../generated/ClaimEmitter/ClaimEmitter"

export function createAirdropClaimedEvent(
  claimContract: Address,
  user: Address,
  token: Address,
  claimedAmount: BigInt,
  airdropAmount: BigInt
): AirdropClaimed {
  let airdropClaimedEvent = changetype<AirdropClaimed>(newMockEvent())

  airdropClaimedEvent.parameters = new Array()

  airdropClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )
  airdropClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  airdropClaimedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  airdropClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "claimedAmount",
      ethereum.Value.fromUnsignedBigInt(claimedAmount)
    )
  )
  airdropClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "airdropAmount",
      ethereum.Value.fromUnsignedBigInt(airdropAmount)
    )
  )

  return airdropClaimedEvent
}

export function createChangeCooldownTimeEvent(
  claimContract: Address,
  coolDownTime: BigInt
): ChangeCooldownTime {
  let changeCooldownTimeEvent = changetype<ChangeCooldownTime>(newMockEvent())

  changeCooldownTimeEvent.parameters = new Array()

  changeCooldownTimeEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )
  changeCooldownTimeEvent.parameters.push(
    new ethereum.EventParam(
      "coolDownTime",
      ethereum.Value.fromUnsignedBigInt(coolDownTime)
    )
  )

  return changeCooldownTimeEvent
}

export function createChangeMaxClaimAmountEvent(
  claimContract: Address,
  newMaxClaimAmount: BigInt
): ChangeMaxClaimAmount {
  let changeMaxClaimAmountEvent = changetype<ChangeMaxClaimAmount>(
    newMockEvent()
  )

  changeMaxClaimAmountEvent.parameters = new Array()

  changeMaxClaimAmountEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )
  changeMaxClaimAmountEvent.parameters.push(
    new ethereum.EventParam(
      "newMaxClaimAmount",
      ethereum.Value.fromUnsignedBigInt(newMaxClaimAmount)
    )
  )

  return changeMaxClaimAmountEvent
}

export function createChangeRollbackAddressEvent(
  claimContract: Address,
  newAddress: Address
): ChangeRollbackAddress {
  let changeRollbackAddressEvent = changetype<ChangeRollbackAddress>(
    newMockEvent()
  )

  changeRollbackAddressEvent.parameters = new Array()

  changeRollbackAddressEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )
  changeRollbackAddressEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return changeRollbackAddressEvent
}

export function createChangeRootEvent(
  claimContract: Address,
  newRoot: Bytes
): ChangeRoot {
  let changeRootEvent = changetype<ChangeRoot>(newMockEvent())

  changeRootEvent.parameters = new Array()

  changeRootEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )
  changeRootEvent.parameters.push(
    new ethereum.EventParam("newRoot", ethereum.Value.fromFixedBytes(newRoot))
  )

  return changeRootEvent
}

export function createChangeStartAndEndTimeEvent(
  claimContract: Address,
  newStartTime: BigInt,
  newEndTime: BigInt
): ChangeStartAndEndTime {
  let changeStartAndEndTimeEvent = changetype<ChangeStartAndEndTime>(
    newMockEvent()
  )

  changeStartAndEndTimeEvent.parameters = new Array()

  changeStartAndEndTimeEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )
  changeStartAndEndTimeEvent.parameters.push(
    new ethereum.EventParam(
      "newStartTime",
      ethereum.Value.fromUnsignedBigInt(newStartTime)
    )
  )
  changeStartAndEndTimeEvent.parameters.push(
    new ethereum.EventParam(
      "newEndTime",
      ethereum.Value.fromUnsignedBigInt(newEndTime)
    )
  )

  return changeStartAndEndTimeEvent
}

export function createClaimContractDeployedEvent(
  claimSettings: ethereum.Tuple,
  totalWallets: BigInt,
  claimContract: Address
): ClaimContractDeployed {
  let claimContractDeployedEvent = changetype<ClaimContractDeployed>(
    newMockEvent()
  )

  claimContractDeployedEvent.parameters = new Array()

  claimContractDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "claimSettings",
      ethereum.Value.fromTuple(claimSettings)
    )
  )
  claimContractDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "totalWallets",
      ethereum.Value.fromUnsignedBigInt(totalWallets)
    )
  )
  claimContractDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )

  return claimContractDeployedEvent
}

export function createDepositTokensEvent(
  depositor: Address,
  claimContract: Address,
  amount: BigInt
): DepositTokens {
  let depositTokensEvent = changetype<DepositTokens>(newMockEvent())

  depositTokensEvent.parameters = new Array()

  depositTokensEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )
  depositTokensEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )
  depositTokensEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositTokensEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createRollbackTokensEvent(
  claimContract: Address,
  rollbackAddress: Address,
  amount: BigInt
): RollbackTokens {
  let rollbackTokensEvent = changetype<RollbackTokens>(newMockEvent())

  rollbackTokensEvent.parameters = new Array()

  rollbackTokensEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )
  rollbackTokensEvent.parameters.push(
    new ethereum.EventParam(
      "rollbackAddress",
      ethereum.Value.fromAddress(rollbackAddress)
    )
  )
  rollbackTokensEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return rollbackTokensEvent
}
