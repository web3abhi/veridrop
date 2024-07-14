export const disburseContractABI = [
  {
    inputs: [{ internalType: "address", name: "emitter", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "token", type: "address" },
      { internalType: "address[]", name: "recipients", type: "address[]" },
      { internalType: "uint256[]", name: "values", type: "uint256[]" },
    ],
    name: "disburseERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "recipients", type: "address[]" },
      { internalType: "uint256[]", name: "values", type: "uint256[]" },
    ],
    name: "disburseNative",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];
