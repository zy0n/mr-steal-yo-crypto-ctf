Summary
 - [reentrancy-eth](#reentrancy-eth) (1 results) (High)
 - [suicidal](#suicidal) (1 results) (High)
 - [uninitialized-local](#uninitialized-local) (2 results) (Medium)
 - [incorrect-modifier](#incorrect-modifier) (2 results) (Low)
 - [reentrancy-events](#reentrancy-events) (2 results) (Low)
 - [timestamp](#timestamp) (1 results) (Low)
 - [assembly](#assembly) (1 results) (Informational)
 - [deprecated-standards](#deprecated-standards) (6 results) (Informational)
 - [solc-version](#solc-version) (2 results) (Informational)
 - [low-level-calls](#low-level-calls) (2 results) (Informational)
 - [naming-convention](#naming-convention) (28 results) (Informational)
 - [external-function](#external-function) (1 results) (Optimization)
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


## solc-version
Impact: Informational
Confidence: High
 - [ ] ID-16
solc-0.4.11 is not recommended for deployment

 - [ ] ID-17
Pragma version[=0.4.11](contracts/safu-wallet/SafuWalletLibrary.sol#L2) allows old versions

contracts/safu-wallet/SafuWalletLibrary.sol#L2


## low-level-calls
Impact: Informational
Confidence: High
 - [ ] ID-18
Low level call in [SafuWalletLibrary.execute(address,uint256,bytes)](contracts/safu-wallet/SafuWalletLibrary.sol#L164-L189):
	- [! _to.call.value(_value)(_data)](contracts/safu-wallet/SafuWalletLibrary.sol#L172)

contracts/safu-wallet/SafuWalletLibrary.sol#L164-L189


 - [ ] ID-19
Low level call in [SafuWalletLibrary.confirm(bytes32)](contracts/safu-wallet/SafuWalletLibrary.sol#L200-L214):
	- [! m_txs[_h].to.call.value(m_txs[_h].value)(m_txs[_h].data)](contracts/safu-wallet/SafuWalletLibrary.sol#L206)

contracts/safu-wallet/SafuWalletLibrary.sol#L200-L214


## naming-convention
Impact: Informational
Confidence: High
 - [ ] ID-20
Parameter [SafuWalletLibrary.kill(address)._to](contracts/safu-wallet/SafuWalletLibrary.sol#L156) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L156


 - [ ] ID-21
Parameter [SafuWalletLibrary.initDaylimit(uint256)._limit](contracts/safu-wallet/SafuWalletLibrary.sol#L140) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L140


 - [ ] ID-22
Parameter [SafuWalletLibrary.initMultiowned(address[],uint256)._owners](contracts/safu-wallet/SafuWalletLibrary.sol#L92) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L92


 - [ ] ID-23
Parameter [SafuWalletLibrary.initWallet(address[],uint256,uint256)._required](contracts/safu-wallet/SafuWalletLibrary.sol#L150) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L150


 - [ ] ID-24
Variable [SafuWalletLibrary.m_pending](contracts/safu-wallet/SafuWalletLibrary.sol#L25) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L25


 - [ ] ID-25
Variable [SafuWalletLibrary.m_txs](contracts/safu-wallet/SafuWalletLibrary.sol#L29) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L29


 - [ ] ID-26
Parameter [SafuWalletLibrary.confirmAndCheck(bytes32)._operation](contracts/safu-wallet/SafuWalletLibrary.sol#L218) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L218


 - [ ] ID-27
Parameter [SafuWalletLibrary.initMultiowned(address[],uint256)._required](contracts/safu-wallet/SafuWalletLibrary.sol#L92) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L92


 - [ ] ID-28
Parameter [SafuWalletLibrary.initWallet(address[],uint256,uint256)._daylimit](contracts/safu-wallet/SafuWalletLibrary.sol#L150) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L150


 - [ ] ID-29
Variable [SafuWalletLibrary.m_lastDay](contracts/safu-wallet/SafuWalletLibrary.sol#L17) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L17


 - [ ] ID-30
Variable [SafuWalletLibrary.m_required](contracts/safu-wallet/SafuWalletLibrary.sol#L11) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L11


 - [ ] ID-31
Parameter [SafuWalletLibrary.hasConfirmed(bytes32,address)._operation](contracts/safu-wallet/SafuWalletLibrary.sol#L127) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L127


 - [ ] ID-32
Parameter [SafuWalletLibrary.hasConfirmed(bytes32,address)._owner](contracts/safu-wallet/SafuWalletLibrary.sol#L127) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L127


 - [ ] ID-33
Parameter [SafuWalletLibrary.isOwner(address)._addr](contracts/safu-wallet/SafuWalletLibrary.sol#L123) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L123


 - [ ] ID-34
Parameter [SafuWalletLibrary.initWallet(address[],uint256,uint256)._owners](contracts/safu-wallet/SafuWalletLibrary.sol#L150) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L150


 - [ ] ID-35
Variable [SafuWalletLibrary.m_pendingIndex](contracts/safu-wallet/SafuWalletLibrary.sol#L26) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L26


 - [ ] ID-36
Variable [SafuWalletLibrary.m_spentToday](contracts/safu-wallet/SafuWalletLibrary.sol#L16) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L16


 - [ ] ID-37
Variable [SafuWalletLibrary.m_owners](contracts/safu-wallet/SafuWalletLibrary.sol#L20) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L20


 - [ ] ID-38
Variable [SafuWalletLibrary.m_dailyLimit](contracts/safu-wallet/SafuWalletLibrary.sol#L15) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L15


 - [ ] ID-39
Parameter [SafuWalletLibrary.underLimit(uint256)._value](contracts/safu-wallet/SafuWalletLibrary.sol#L257) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L257


 - [ ] ID-40
Variable [SafuWalletLibrary.m_ownerIndex](contracts/safu-wallet/SafuWalletLibrary.sol#L23) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L23


 - [ ] ID-41
Parameter [SafuWalletLibrary.confirm(bytes32)._h](contracts/safu-wallet/SafuWalletLibrary.sol#L200) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L200


 - [ ] ID-42
Parameter [SafuWalletLibrary.execute(address,uint256,bytes)._data](contracts/safu-wallet/SafuWalletLibrary.sol#L164) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L164


 - [ ] ID-43
Parameter [SafuWalletLibrary.execute(address,uint256,bytes)._value](contracts/safu-wallet/SafuWalletLibrary.sol#L164) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L164


 - [ ] ID-44
Modifier [SafuWalletLibrary.only_uninitialized()](contracts/safu-wallet/SafuWalletLibrary.sol#L146) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L146


 - [ ] ID-45
Parameter [SafuWalletLibrary.execute(address,uint256,bytes)._to](contracts/safu-wallet/SafuWalletLibrary.sol#L164) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L164


 - [ ] ID-46
Parameter [SafuWalletLibrary.revoke(bytes32)._operation](contracts/safu-wallet/SafuWalletLibrary.sol#L105) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L105


 - [ ] ID-47
Variable [SafuWalletLibrary.m_numOwners](contracts/safu-wallet/SafuWalletLibrary.sol#L13) is not in mixedCase

contracts/safu-wallet/SafuWalletLibrary.sol#L13


## external-function
Impact: Optimization
Confidence: High
 - [ ] ID-48
initWallet(address[],uint256,uint256) should be declared external:
	- [SafuWalletLibrary.initWallet(address[],uint256,uint256)](contracts/safu-wallet/SafuWalletLibrary.sol#L150-L153)

contracts/safu-wallet/SafuWalletLibrary.sol#L150-L153


