Summary
 - [uninitialized-state](#uninitialized-state) (1 results) (High)
 - [unused-return](#unused-return) (2 results) (Medium)
 - [assembly](#assembly) (1 results) (Informational)
 - [pragma](#pragma) (1 results) (Informational)
 - [dead-code](#dead-code) (7 results) (Informational)
 - [solc-version](#solc-version) (3 results) (Informational)
 - [low-level-calls](#low-level-calls) (4 results) (Informational)
 - [naming-convention](#naming-convention) (7 results) (Informational)
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


## dead-code
Impact: Informational
Confidence: Medium
 - [ ] ID-5
[Address.sendValue(address,uint256)](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65) is never used and should be removed

../../node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65


 - [ ] ID-6
[Address.functionCallWithValue(address,bytes,uint256)](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L114-L120) is never used and should be removed

../../node_modules/@openzeppelin/contracts/utils/Address.sol#L114-L120


 - [ ] ID-7
[Address.functionCallWithValue(address,bytes,uint256,string)](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139) is never used and should be removed

../../node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139


 - [ ] ID-8
[Address.functionStaticCall(address,bytes)](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L147-L149) is never used and should be removed

../../node_modules/@openzeppelin/contracts/utils/Address.sol#L147-L149


 - [ ] ID-9
[Address.functionCall(address,bytes,string)](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L95-L101) is never used and should be removed

../../node_modules/@openzeppelin/contracts/utils/Address.sol#L95-L101


 - [ ] ID-10
[Address.functionStaticCall(address,bytes,string)](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166) is never used and should be removed

../../node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166


 - [ ] ID-11
[Address.functionCall(address,bytes)](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L85-L87) is never used and should be removed

../../node_modules/@openzeppelin/contracts/utils/Address.sol#L85-L87


## solc-version
Impact: Informational
Confidence: High
 - [ ] ID-12
solc-0.8.4 is not recommended for deployment

 - [ ] ID-13
Pragma version[^0.8.1](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L4) allows old versions

../../node_modules/@openzeppelin/contracts/utils/Address.sol#L4


 - [ ] ID-14
Pragma version[^0.8.4](SafuWallet.sol#L2) allows old versions

SafuWallet.sol#L2


## low-level-calls
Impact: Informational
Confidence: High
 - [ ] ID-15
Low level call in [Address.sendValue(address,uint256)](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65):
	- [(success) = recipient.call{value: amount}()](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L63)

../../node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65


 - [ ] ID-16
Low level call in [Address.functionStaticCall(address,bytes,string)](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166):
	- [(success,returndata) = target.staticcall(data)](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L164)

../../node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166


 - [ ] ID-17
Low level call in [Address.functionCallWithValue(address,bytes,uint256,string)](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139):
	- [(success,returndata) = target.call{value: value}(data)](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L137)

../../node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139


 - [ ] ID-18
Low level call in [Address.functionDelegateCall(address,bytes,string)](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193):
	- [(success,returndata) = target.delegatecall(data)](../../node_modules/@openzeppelin/contracts/utils/Address.sol#L191)

../../node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193


## naming-convention
Impact: Informational
Confidence: High
 - [ ] ID-19
Variable [SafuWallet.m_lastDay](SafuWallet.sol#L22) is not in mixedCase

SafuWallet.sol#L22


 - [ ] ID-20
Variable [SafuWallet.m_dailyLimit](SafuWallet.sol#L20) is not in mixedCase

SafuWallet.sol#L20


 - [ ] ID-21
Variable [SafuWallet.m_numOwners](SafuWallet.sol#L18) is not in mixedCase

SafuWallet.sol#L18


 - [ ] ID-22
Variable [SafuWallet.m_owners](SafuWallet.sol#L25) is not in mixedCase

SafuWallet.sol#L25


 - [ ] ID-23
Constant [SafuWallet._safuWalletLibrary](SafuWallet.sol#L13) is not in UPPER_CASE_WITH_UNDERSCORES

SafuWallet.sol#L13


 - [ ] ID-24
Variable [SafuWallet.m_required](SafuWallet.sol#L16) is not in mixedCase

SafuWallet.sol#L16


 - [ ] ID-25
Variable [SafuWallet.m_spentToday](SafuWallet.sol#L21) is not in mixedCase

SafuWallet.sol#L21


## constable-states
Impact: Optimization
Confidence: High
 - [ ] ID-26
[SafuWallet.m_lastDay](SafuWallet.sol#L22) should be constant 

SafuWallet.sol#L22


 - [ ] ID-27
[SafuWallet.m_required](SafuWallet.sol#L16) should be constant 

SafuWallet.sol#L16


 - [ ] ID-28
[SafuWallet.m_spentToday](SafuWallet.sol#L21) should be constant 

SafuWallet.sol#L21


 - [ ] ID-29
[SafuWallet.m_dailyLimit](SafuWallet.sol#L20) should be constant 

SafuWallet.sol#L20


 - [ ] ID-30
[SafuWallet.m_numOwners](SafuWallet.sol#L18) should be constant 

SafuWallet.sol#L18


