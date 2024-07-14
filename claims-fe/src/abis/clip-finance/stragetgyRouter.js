export const StrategyRouter = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AddressInsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "Address_DelegateCallToNonContract",
    type: "error",
  },
  {
    inputs: [],
    name: "Address__LowLevelCallFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "errorCode",
        type: "uint256",
      },
    ],
    name: "Address__LowLevelCallFailedWithCustomErrorCode",
    type: "error",
  },
  {
    inputs: [],
    name: "Address__LowLevelCallWithValueFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "Address__LowLevelStaticCallFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountExceedTotalSupply",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountNotSpecified",
    type: "error",
  },
  {
    inputs: [],
    name: "CantRemoveLastStrategy",
    type: "error",
  },
  {
    inputs: [],
    name: "CycleClosed",
    type: "error",
  },
  {
    inputs: [],
    name: "CycleNotClosableYet",
    type: "error",
  },
  {
    inputs: [],
    name: "CycleNotClosed",
    type: "error",
  },
  {
    inputs: [],
    name: "DuplicateStrategy",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967Upgrade_NewImplementationIsNotUUPS",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967Upgrade_UnsupportedProxiableUUID",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967_BeaconImplementationIsNotAContract",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967_NewAdminIsZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967_NewBeaconIsNotAContract",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967_NewImplementationIsNotAContract",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [],
    name: "FunctionMustBeCalledThroughActiveProxy",
    type: "error",
  },
  {
    inputs: [],
    name: "FunctionMustBeCalledThroughDelegatecall",
    type: "error",
  },
  {
    inputs: [],
    name: "IdleStrategySupportedTokenMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "Initializable_ContractIsInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "Initializable__ContractIsAlreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "Initializable__ContractIsNotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientShares",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidIdleStrategy",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidIndexForIdleStrategy",
    type: "error",
  },
  {
    inputs: [],
    name: "NotModerator",
    type: "error",
  },
  {
    inputs: [],
    name: "NotReceiptOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "NothingToRebalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    inputs: [],
    name: "UUPSUpgradeable__MustNotBeCalledThroughDelegatecall",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsupportedToken",
    type: "error",
  },
  {
    inputs: [],
    name: "WithdrawnAmountLowerThanExpectedAmount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "currentCycle",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentTvlInUsd",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalShares",
        type: "uint256",
      },
    ],
    name: "AfterCompound",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "closedCycleId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AllocateToStrategies",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountAfterFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "referral",
        type: "string",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "receiptIds",
        type: "uint256[]",
      },
    ],
    name: "RedeemReceiptsToShares",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "moderator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "receiptIds",
        type: "uint256[]",
      },
    ],
    name: "RedeemReceiptsToSharesByModerators",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IExchange",
        name: "_exchange",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IUsdOracle",
        name: "_oracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract ISharesToken",
        name: "_sharesToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IBatch",
        name: "_batch",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IReceiptNFT",
        name: "_receiptNft",
        type: "address",
      },
    ],
    name: "SetAddresses",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "SetAllocationWindowTime",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "SetModeratorAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "receiptIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "WithdrawFromBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawFromStrategies",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_strategyAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_weight",
        type: "uint256",
      },
    ],
    name: "addStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "allocateToStrategies",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "calculateSharesAmountFromUsdAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "receiptIds",
        type: "uint256[]",
      },
    ],
    name: "calculateSharesFromReceipts",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountShares",
        type: "uint256",
      },
    ],
    name: "calculateSharesUsdValue",
    outputs: [
      {
        internalType: "uint256",
        name: "amountUsd",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "compoundAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountInUsdValue",
        type: "uint256",
      },
    ],
    name: "compoundGetSharesAmountFromUsdAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "shareAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "depositToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "referral",
        type: "string",
      },
    ],
    name: "depositToBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBatchValueUsd",
    outputs: [
      {
        internalType: "uint256",
        name: "totalBalance",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cycleId",
        type: "uint256",
      },
    ],
    name: "getCycle",
    outputs: [
      {
        internalType: "uint256",
        name: "startAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalDepositedInUsd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "receivedByStrategiesInUsd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "strategiesBalanceWithCompoundAndBatchDepositsInUsd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pricePerShare",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getExchange",
    outputs: [
      {
        internalType: "contract IExchange",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getIdentifiers",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getIdleStrategies",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "strategyAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "depositToken",
            type: "address",
          },
        ],
        internalType: "struct IdleStrategyInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStrategies",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "strategyAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "depositToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "depositTokenInSupportedTokensIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
        ],
        internalType: "struct StrategyInfo[]",
        name: "",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStrategiesCount",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStrategiesValue",
    outputs: [
      {
        internalType: "uint256",
        name: "totalBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStrategyBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalIdleStrategyBalance",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "idleBalances",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "getStrategyDepositToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_strategyId",
        type: "uint256",
      },
    ],
    name: "getStrategyPercentWeight",
    outputs: [
      {
        internalType: "uint256",
        name: "strategyPercentAllocation",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSupportedTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "initializeData",
        type: "bytes",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rebalanceStrategies",
    outputs: [
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "receiptIds",
        type: "uint256[]",
      },
    ],
    name: "redeemReceiptsToShares",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "receiptIds",
        type: "uint256[]",
      },
    ],
    name: "redeemReceiptsToSharesByModerators",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_strategyId",
        type: "uint256",
      },
    ],
    name: "removeStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IExchange",
        name: "_exchange",
        type: "address",
      },
      {
        internalType: "contract IUsdOracle",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "contract ISharesToken",
        name: "_sharesToken",
        type: "address",
      },
      {
        internalType: "contract IBatch",
        name: "_batch",
        type: "address",
      },
      {
        internalType: "contract IReceiptNFT",
        name: "_receiptNft",
        type: "address",
      },
    ],
    name: "setAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timeInSeconds",
        type: "uint256",
      },
    ],
    name: "setAllocationWindowTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "idleStrategy",
        type: "address",
      },
    ],
    name: "setIdleStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "supported",
        type: "bool",
      },
      {
        internalType: "address",
        name: "idleStrategy",
        type: "address",
      },
    ],
    name: "setSupportedToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "supportsToken",
    outputs: [
      {
        internalType: "bool",
        name: "isSupported",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "upkeepNeeded",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_strategyId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_weight",
        type: "uint256",
      },
    ],
    name: "updateStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_receiptIds",
        type: "uint256[]",
      },
    ],
    name: "withdrawFromBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "receiptIds",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "withdrawToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minTokenAmountToWithdraw",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "performCompound",
        type: "bool",
      },
    ],
    name: "withdrawFromStrategies",
    outputs: [
      {
        internalType: "uint256",
        name: "withdrawnAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
