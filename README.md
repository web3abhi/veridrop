
# VeriDrop

### A Sybil-Resistant Airdrop Platform using World ID

#### Purpose:
Veridrop is an application designed to facilitate fair and Sybil-resistant token airdrops by leveraging World ID for human verification.

#### Key Components:

1. World ID Integration:
World ID, developed by Worldcoin, is used as the primary verification method.
It provides a decentralized digital identity solution based on iris biometric scans.

2. Verification Process:

3. Users verify their humanity through World ID's "Orb" device or compatible smartphone apps.
This creates a unique, privacy-preserving World ID for each individual.

4. Airdrop Mechanism:

Projects can use Veridrop to distribute tokens only to verified World ID holders.
Each World ID can claim an airdrop only once, preventing multiple claims.



#### Benefits:

* Strong Sybil Resistance: World ID's biometric verification makes it extremely difficult to create multiple identities.
* Privacy Preservation: World ID uses zero-knowledge proofs, allowing verification without revealing personal data.
* Global Accessibility: World ID aims for worldwide coverage, potentially making Veridrop accessible globally.
* Scalability: Can handle large-scale airdrops efficiently.
* Improved Token Distribution: Ensures fairer allocation of tokens to unique individuals.

#### How it Works:

Users obtain a World ID through Worldcoin's verification process.
Projects set up their airdrop on Veridrop, specifying criteria and token amounts.
Eligible World ID holders can claim their airdrop through Veridrop.
Veridrop checks the World ID proof and facilitates the token distribution.

This system combines Veridrop's airdrop infrastructure with World ID's robust human verification, creating a powerful tool for fair and efficient token distribution in the crypto ecosystem.

## Demo


[Demo on Vercel](https://claims-fe.vercel.app)
## Guide

 1. Contracts - Airdrop & World ID contracts deployed on Base
 2. Subgraph - for contracts
 3. Frontend - 
    * User Dashboard - to verify proof of humanity and claim drops
    * Dev Dashboard - to create and distribute airdrops
## Tech Stack

**Web3 Stack:** WorldCoin ID, Base, Forge-Foundry, Ethers.Js, Viem, Graph Protocol

**Web2 Stack:** Typescript, NextJs, TailwindCSS

## Connect

find us on TG @web3abhi, @rishav72