# forge create --rpc-url https://small-crimson-valley.base-sepolia.quiknode.pro/c2c81b8e4c5abb857da0cfe91e0bccc10d318e46 --private-key 0xdc1ba6a53df7abe464218905f56817441d0df8968e3b6f7dc279d2860083f0a4 src/ClaimFactory.sol:Contract --constructor-args "0x42FF98C4E85212a5D31358ACbFe76a621b50fC02" "app_3066124e44753d8dffd50878d8498345" "claim"
# forge create --via-ir --rpc-url https://small-crimson-valley.base-sepolia.quiknode.pro/c2c81b8e4c5abb857da0cfe91e0bccc10d318e46 --private-key 0xdc1ba6a53df7abe464218905f56817441d0df8968e3b6f7dc279d2860083f0a4 src/ClaimFactory.sol:ClaimFactory

# forge create --via-ir --rpc-url https://small-crimson-valley.base-sepolia.quiknode.pro/c2c81b8e4c5abb857da0cfe91e0bccc10d318e46 --private-key 0xdc1ba6a53df7abe464218905f56817441d0df8968e3b6f7dc279d2860083f0a4 src/ClaimEmitter.sol:ClaimEmitter

# forge create --via-ir --rpc-url https://small-crimson-valley.base-sepolia.quiknode.pro/c2c81b8e4c5abb857da0cfe91e0bccc10d318e46 --private-key 0xdc1ba6a53df7abe464218905f56817441d0df8968e3b6f7dc279d2860083f0a4 src/Claim.sol:Claim

# forge script script/Initialise.s.sol:InitialiseScript --via-ir --rpc-url https://small-crimson-valley.base-sepolia.quiknode.pro/c2c81b8e4c5abb857da0cfe91e0bccc10d318e46 --private-key 0xdc1ba6a53df7abe464218905f56817441d0df8968e3b6f7dc279d2860083f0a4  --broadcast -vvvv --gas-limit 3000000

forge script script/DeployW.s.sol:Deploy --via-ir --rpc-url https://solitary-orbital-mansion.arbitrum-sepolia.quiknode.pro/b624c510febaae13ed0808288517bf37ca90d836 --private-key 0xdc1ba6a53df7abe464218905f56817441d0df8968e3b6f7dc279d2860083f0a4  --broadcast

# forge script script/DeployC.s.sol:Deploy --via-ir --rpc-url https://small-crimson-valley.base-sepolia.quiknode.pro/c2c81b8e4c5abb857da0cfe91e0bccc10d318e46 --private-key 0xdc1ba6a53df7abe464218905f56817441d0df8968e3b6f7dc279d2860083f0a4  --broadcast

# forge  verify-contract 0xA41350925D556bfD68B83Da7b89C15182a462c9B ClaimFactory --via-ir --chain 84532 --watch
# forge  verify-contract 0x840730232edc72d435925ea1b4beeae0093e43ff Claim --via-ir --chain 84532 --watch