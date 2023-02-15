Summary
 - [uninitialized-state](#uninitialized-state) (1 results) (High)
 - [unused-return](#unused-return) (2 results) (Medium)
 - [assembly](#assembly) (1 results) (Informational)
 - [pragma](#pragma) (1 results) (Informational)
 - [constable-states](#constable-states) (5 results) (Optimization)
## uninitialized-state
Impact: High
Confidence: High
 - [ ] ID-0
[SafuWallet.m_owners](SafuWallet.sol#L25) is never initialized. It is used in:
	- [SafuWallet.getOwner(uint256)](SafuWallet.sol#L42-L44)

SafuWallet.sol#L25


## unused-return
Impact: Medium
Confidence: Medium
 - [ ] ID-1
[SafuWallet.constructor(address[],uint256,uint256)](SafuWallet.sol#L30-L39) ignores return value by [_safuWalletLibrary.functionDelegateCall(data)](SafuWallet.sol#L38)

SafuWallet.sol#L30-L39


 - [ ] ID-2
[SafuWallet.fallback()](SafuWallet.sol#L50-L52) ignores return value by [_safuWalletLibrary.functionDelegateCall(msg.data)](SafuWallet.sol#L51)

SafuWallet.sol#L50-L52


## assembly
Impact: Informational
Confidence: High
 - [ ] ID-3
[Address.verifyCallResult(bool,bytes,string)](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221) uses assembly
	- [INLINE ASM](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L213-L216)

../../node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221


## pragma
Impact: Informational
Confidence: High
 - [ ] ID-4
Different versions of Solidity are used:
	- Version used: ['^0.8.1', '^0.8.4']
	- [^0.8.1](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L4)
	- [^0.8.4](SafuWallet.sol#L2)

../../node_modules/@openzeppelin/contracts/utils/Address.sol#L4


## constable-states
Impact: Optimization
Confidence: High
 - [ ] ID-5
[SafuWallet.m_lastDay](SafuWallet.sol#L22) should be constant 

SafuWallet.sol#L22


 - [ ] ID-6
[SafuWallet.m_required](SafuWallet.sol#L16) should be constant 

SafuWallet.sol#L16


 - [ ] ID-7
[SafuWallet.m_spentToday](SafuWallet.sol#L21) should be constant 

SafuWallet.sol#L21


 - [ ] ID-8
[SafuWallet.m_dailyLimit](SafuWallet.sol#L20) should be constant 

SafuWallet.sol#L20


 - [ ] ID-9
[SafuWallet.m_numOwners](SafuWallet.sol#L18) should be constant 

SafuWallet.sol#L18


