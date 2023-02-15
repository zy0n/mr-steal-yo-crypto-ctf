Summary
 - [reentrancy-eth](#reentrancy-eth) (1 results) (High)
 - [suicidal](#suicidal) (1 results) (High)
 - [uninitialized-local](#uninitialized-local) (2 results) (Medium)
 - [incorrect-modifier](#incorrect-modifier) (2 results) (Low)
 - [reentrancy-events](#reentrancy-events) (2 results) (Low)
 - [timestamp](#timestamp) (1 results) (Low)
 - [assembly](#assembly) (1 results) (Informational)
 - [deprecated-standards](#deprecated-standards) (6 results) (Informational)
## reentrancy-eth
Impact: High
Confidence: Medium
 - [ ] ID-0
Reentrancy in [SafuWalletLibrary.confirm(bytes32)](contracts/safu-wallet/SafuWalletLibrary.sol#L200-L214):
	External calls:
	- [! m_txs[_h].to.call.value(m_txs[_h].value)(m_txs[_h].data)](contracts/safu-wallet/SafuWalletLibrary.sol#L206)
	State variables written after the call(s):
	- [delete m_txs[_h]](contracts/safu-wallet/SafuWalletLibrary.sol#L211)
	[SafuWalletLibrary.m_txs](contracts/safu-wallet/SafuWalletLibrary.sol#L29) can be used in cross function reentrancies:
	- [SafuWalletLibrary.confirm(bytes32)](contracts/safu-wallet/SafuWalletLibrary.sol#L200-L214)
	- [SafuWalletLibrary.execute(address,uint256,bytes)](contracts/safu-wallet/SafuWalletLibrary.sol#L164-L189)

contracts/safu-wallet/SafuWalletLibrary.sol#L200-L214


## suicidal
Impact: High
Confidence: High
 - [ ] ID-1
[SafuWalletLibrary.kill(address)](contracts/safu-wallet/SafuWalletLibrary.sol#L156-L158) allows anyone to destruct the contract

contracts/safu-wallet/SafuWalletLibrary.sol#L156-L158


## uninitialized-local
Impact: Medium
Confidence: Medium
 - [ ] ID-2
[SafuWalletLibrary.execute(address,uint256,bytes).created](contracts/safu-wallet/SafuWalletLibrary.sol#L168) is a local variable never initialized

contracts/safu-wallet/SafuWalletLibrary.sol#L168


 - [ ] ID-3
[SafuWalletLibrary.confirm(bytes32).created](contracts/safu-wallet/SafuWalletLibrary.sol#L202) is a local variable never initialized

contracts/safu-wallet/SafuWalletLibrary.sol#L202


## incorrect-modifier
Impact: Low
Confidence: High
 - [ ] ID-4
Modifier [SafuWalletLibrary.onlymanyowners(bytes32)](contracts/safu-wallet/SafuWalletLibrary.sol#L76-L79) does not always execute _; or revert
contracts/safu-wallet/SafuWalletLibrary.sol#L76-L79


 - [ ] ID-5
Modifier [SafuWalletLibrary.onlyowner()](contracts/safu-wallet/SafuWalletLibrary.sol#L68-L71) does not always execute _; or revert
contracts/safu-wallet/SafuWalletLibrary.sol#L68-L71


## reentrancy-events
Impact: Low
Confidence: Medium
 - [ ] ID-6
Reentrancy in [SafuWalletLibrary.confirm(bytes32)](contracts/safu-wallet/SafuWalletLibrary.sol#L200-L214):
	External calls:
	- [! m_txs[_h].to.call.value(m_txs[_h].value)(m_txs[_h].data)](contracts/safu-wallet/SafuWalletLibrary.sol#L206)
	Event emitted after the call(s):
	- [MultiTransact(msg.sender,_h,m_txs[_h].value,m_txs[_h].to,m_txs[_h].data,created)](contracts/safu-wallet/SafuWalletLibrary.sol#L210)

contracts/safu-wallet/SafuWalletLibrary.sol#L200-L214


 - [ ] ID-7
Reentrancy in [SafuWalletLibrary.execute(address,uint256,bytes)](contracts/safu-wallet/SafuWalletLibrary.sol#L164-L189):
	External calls:
	- [! _to.call.value(_value)(_data)](contracts/safu-wallet/SafuWalletLibrary.sol#L172)
	Event emitted after the call(s):
	- [SingleTransact(msg.sender,_value,_to,_data,created)](contracts/safu-wallet/SafuWalletLibrary.sol#L175)

contracts/safu-wallet/SafuWalletLibrary.sol#L164-L189


## timestamp
Impact: Low
Confidence: Medium
 - [ ] ID-8
[SafuWalletLibrary.underLimit(uint256)](contracts/safu-wallet/SafuWalletLibrary.sol#L257-L270) uses timestamp for comparisons
	Dangerous comparisons:
	- [today() > m_lastDay](contracts/safu-wallet/SafuWalletLibrary.sol#L259)

contracts/safu-wallet/SafuWalletLibrary.sol#L257-L270


## assembly
Impact: Informational
Confidence: High
 - [ ] ID-9
[SafuWalletLibrary.create(uint256,bytes)](contracts/safu-wallet/SafuWalletLibrary.sol#L191-L196) uses assembly
	- [INLINE ASM](contracts/safu-wallet/SafuWalletLibrary.sol#L192-L196)

contracts/safu-wallet/SafuWalletLibrary.sol#L191-L196


## deprecated-standards
Impact: Informational
Confidence: High
 - [ ] ID-10
Deprecated standard detected [o_hash = sha3()(msg.data,block.number)](contracts/safu-wallet/SafuWalletLibrary.sol#L178):
	- Usage of "sha3()" should be replaced with "keccak256()"

contracts/safu-wallet/SafuWalletLibrary.sol#L178


 - [ ] ID-11
Deprecated standard detected [suicide(address)(_to)](contracts/safu-wallet/SafuWalletLibrary.sol#L157):
	- Usage of "suicide()" should be replaced with "selfdestruct()"

contracts/safu-wallet/SafuWalletLibrary.sol#L157


 - [ ] ID-12
Deprecated standard detected [THROW](contracts/safu-wallet/SafuWalletLibrary.sol#L207):
	- Usage of "throw" should be replaced with "revert()"

contracts/safu-wallet/SafuWalletLibrary.sol#L207


 - [ ] ID-13
Deprecated standard detected [onlymanyowners(sha3()(msg.data))](contracts/safu-wallet/SafuWalletLibrary.sol#L156):
	- Usage of "sha3()" should be replaced with "keccak256()"

contracts/safu-wallet/SafuWalletLibrary.sol#L156


 - [ ] ID-14
Deprecated standard detected [THROW](contracts/safu-wallet/SafuWalletLibrary.sol#L173):
	- Usage of "throw" should be replaced with "revert()"

contracts/safu-wallet/SafuWalletLibrary.sol#L173


 - [ ] ID-15
Deprecated standard detected [THROW](contracts/safu-wallet/SafuWalletLibrary.sol#L146):
	- Usage of "throw" should be replaced with "revert()"

contracts/safu-wallet/SafuWalletLibrary.sol#L146


