Summary
 - [missing-zero-check](#missing-zero-check) (2 results) (Low)
 - [assembly](#assembly) (2 results) (Informational)
 - [boolean-equal](#boolean-equal) (1 results) (Informational)
 - [pragma](#pragma) (2 results) (Informational)
 - [dead-code](#dead-code) (25 results) (Informational)
 - [solc-version](#solc-version) (22 results) (Informational)
 - [low-level-calls](#low-level-calls) (8 results) (Informational)
 - [naming-convention](#naming-convention) (7 results) (Informational)
 - [external-function](#external-function) (15 results) (Optimization)
 - [incorrect-equality](#incorrect-equality) (2 results) (Medium)
 - [shadowing-local](#shadowing-local) (2 results) (Low)
 - [reentrancy-benign](#reentrancy-benign) (2 results) (Low)
 - [reentrancy-events](#reentrancy-events) (2 results) (Low)
## missing-zero-check
Impact: Low
Confidence: Medium
 - [ ] ID-0
[SafuStrategy.setVault(address)._vault](contracts/safu-vault/SafuStrategy.sol#L38) lacks a zero-check on :
		- [vault = _vault](contracts/safu-vault/SafuStrategy.sol#L40)

contracts/safu-vault/SafuStrategy.sol#L38


 - [ ] ID-1
[SafuStrategy.constructor(address)._want](contracts/safu-vault/SafuStrategy.sol#L31) lacks a zero-check on :
		- [want = _want](contracts/safu-vault/SafuStrategy.sol#L33)

contracts/safu-vault/SafuStrategy.sol#L31


## assembly
Impact: Informational
Confidence: High
 - [ ] ID-2
[Address.verifyCallResult(bool,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Address.sol#L213-L216)

node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221


 - [ ] ID-3
[Address.verifyCallResult(bool,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Address.sol#L213-L216)

node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221


## boolean-equal
Impact: Informational
Confidence: High
 - [ ] ID-4
[SafuStrategy.onlyWhitelisted()](contracts/safu-vault/SafuStrategy.sol#L25-L28) compares to a boolean constant:
	-[require(bool,string)(whitelist[msg.sender] == true,not whitelisted)](contracts/safu-vault/SafuStrategy.sol#L26)

contracts/safu-vault/SafuStrategy.sol#L25-L28


## pragma
Impact: Informational
Confidence: High
 - [ ] ID-5
Different versions of Solidity are used:
	- Version used: ['^0.8.0', '^0.8.1']
	- [^0.8.0](node_modules/@openzeppelin/contracts/access/Ownable.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/security/Pausable.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L4)
	- [^0.8.1](node_modules/@openzeppelin/contracts/utils/Address.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/Context.sol#L4)
	- [^0.8.0](contracts/safu-vault/SafuStrategy.sol#L2)

node_modules/@openzeppelin/contracts/access/Ownable.sol#L4


 - [ ] ID-6
Different versions of Solidity are used:
	- Version used: ['^0.8.0', '^0.8.1']
	- [^0.8.0](node_modules/@openzeppelin/contracts/access/Ownable.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/security/ReentrancyGuard.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L4)
	- [^0.8.1](node_modules/@openzeppelin/contracts/utils/Address.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/Context.sol#L4)
	- [^0.8.0](contracts/safu-vault/SafuVault.sol#L2)

node_modules/@openzeppelin/contracts/access/Ownable.sol#L4


## dead-code
Impact: Informational
Confidence: Medium
 - [ ] ID-7
[Address.sendValue(address,uint256)](node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65


 - [ ] ID-8
[Address.functionCallWithValue(address,bytes,uint256)](node_modules/@openzeppelin/contracts/utils/Address.sol#L114-L120) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L114-L120


 - [ ] ID-9
[Address.functionDelegateCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193


 - [ ] ID-10
[Address.functionDelegateCall(address,bytes)](node_modules/@openzeppelin/contracts/utils/Address.sol#L174-L176) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L174-L176


 - [ ] ID-11
[SafeERC20.safeIncreaseAllowance(IERC20,address,uint256)](node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L61-L68) is never used and should be removed

node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L61-L68


 - [ ] ID-12
[SafeERC20.safePermit(IERC20Permit,address,address,uint256,uint256,uint8,bytes32,bytes32)](node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L83-L97) is never used and should be removed

node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L83-L97


 - [ ] ID-13
[SafeERC20.safeApprove(IERC20,address,uint256)](node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L46-L59) is never used and should be removed

node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L46-L59


 - [ ] ID-14
[SafeERC20.safeTransferFrom(IERC20,address,address,uint256)](node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L30-L37) is never used and should be removed

node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L30-L37


 - [ ] ID-15
[Context._msgData()](node_modules/@openzeppelin/contracts/utils/Context.sol#L21-L23) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Context.sol#L21-L23


 - [ ] ID-16
[Address.functionStaticCall(address,bytes)](node_modules/@openzeppelin/contracts/utils/Address.sol#L147-L149) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L147-L149


 - [ ] ID-17
[SafeERC20.safeDecreaseAllowance(IERC20,address,uint256)](node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L70-L81) is never used and should be removed

node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L70-L81


 - [ ] ID-18
[Address.functionStaticCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166


 - [ ] ID-19
[Address.functionCall(address,bytes)](node_modules/@openzeppelin/contracts/utils/Address.sol#L85-L87) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L85-L87


 - [ ] ID-20
[Address.sendValue(address,uint256)](node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65


 - [ ] ID-21
[Address.functionCallWithValue(address,bytes,uint256)](node_modules/@openzeppelin/contracts/utils/Address.sol#L114-L120) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L114-L120


 - [ ] ID-22
[Address.functionDelegateCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193


 - [ ] ID-23
[Address.functionDelegateCall(address,bytes)](node_modules/@openzeppelin/contracts/utils/Address.sol#L174-L176) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L174-L176


 - [ ] ID-24
[SafeERC20.safeIncreaseAllowance(IERC20,address,uint256)](node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L61-L68) is never used and should be removed

node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L61-L68


 - [ ] ID-25
[SafeERC20.safePermit(IERC20Permit,address,address,uint256,uint256,uint8,bytes32,bytes32)](node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L83-L97) is never used and should be removed

node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L83-L97


 - [ ] ID-26
[SafeERC20.safeApprove(IERC20,address,uint256)](node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L46-L59) is never used and should be removed

node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L46-L59


 - [ ] ID-27
[Context._msgData()](node_modules/@openzeppelin/contracts/utils/Context.sol#L21-L23) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Context.sol#L21-L23


 - [ ] ID-28
[Address.functionStaticCall(address,bytes)](node_modules/@openzeppelin/contracts/utils/Address.sol#L147-L149) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L147-L149


 - [ ] ID-29
[SafeERC20.safeDecreaseAllowance(IERC20,address,uint256)](node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L70-L81) is never used and should be removed

node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L70-L81


 - [ ] ID-30
[Address.functionStaticCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166


 - [ ] ID-31
[Address.functionCall(address,bytes)](node_modules/@openzeppelin/contracts/utils/Address.sol#L85-L87) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L85-L87


## solc-version
Impact: Informational
Confidence: High
 - [ ] ID-32
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol#L4


 - [ ] ID-33
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L4


 - [ ] ID-34
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/Context.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/Context.sol#L4


 - [ ] ID-35
Pragma version[^0.8.1](node_modules/@openzeppelin/contracts/utils/Address.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/Address.sol#L4


 - [ ] ID-36
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol#L4


 - [ ] ID-37
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/security/Pausable.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/security/Pausable.sol#L4


 - [ ] ID-38
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/access/Ownable.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/access/Ownable.sol#L4


 - [ ] ID-39
Pragma version[^0.8.0](contracts/safu-vault/SafuStrategy.sol#L2) allows old versions

contracts/safu-vault/SafuStrategy.sol#L2


 - [ ] ID-40
solc-0.8.9 is not recommended for deployment

 - [ ] ID-41
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol#L4


 - [ ] ID-42
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol#L4


 - [ ] ID-43
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L4


 - [ ] ID-44
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/Context.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/Context.sol#L4


 - [ ] ID-45
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/security/ReentrancyGuard.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/security/ReentrancyGuard.sol#L4


 - [ ] ID-46
Pragma version[^0.8.0](contracts/safu-vault/SafuVault.sol#L2) allows old versions

contracts/safu-vault/SafuVault.sol#L2


 - [ ] ID-47
Pragma version[^0.8.1](node_modules/@openzeppelin/contracts/utils/Address.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/Address.sol#L4


 - [ ] ID-48
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol#L4


 - [ ] ID-49
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L4


 - [ ] ID-50
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/access/Ownable.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/access/Ownable.sol#L4


 - [ ] ID-51
solc-0.8.9 is not recommended for deployment

 - [ ] ID-52
Pragma version[^0.8.0](contracts/safu-vault/SafuVaultExploiter.sol#L2) allows old versions

contracts/safu-vault/SafuVaultExploiter.sol#L2


 - [ ] ID-53
solc-0.8.9 is not recommended for deployment

## low-level-calls
Impact: Informational
Confidence: High
 - [ ] ID-54
Low level call in [Address.sendValue(address,uint256)](node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65):
	- [(success) = recipient.call{value: amount}()](node_modules/@openzeppelin/contracts/utils/Address.sol#L63)

node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65


 - [ ] ID-55
Low level call in [Address.functionCallWithValue(address,bytes,uint256,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139):
	- [(success,returndata) = target.call{value: value}(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L137)

node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139


 - [ ] ID-56
Low level call in [Address.functionStaticCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166):
	- [(success,returndata) = target.staticcall(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L164)

node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166


 - [ ] ID-57
Low level call in [Address.functionDelegateCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193):
	- [(success,returndata) = target.delegatecall(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L191)

node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193


 - [ ] ID-58
Low level call in [Address.sendValue(address,uint256)](node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65):
	- [(success) = recipient.call{value: amount}()](node_modules/@openzeppelin/contracts/utils/Address.sol#L63)

node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65


 - [ ] ID-59
Low level call in [Address.functionCallWithValue(address,bytes,uint256,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139):
	- [(success,returndata) = target.call{value: value}(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L137)

node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139


 - [ ] ID-60
Low level call in [Address.functionStaticCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166):
	- [(success,returndata) = target.staticcall(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L164)

node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166


 - [ ] ID-61
Low level call in [Address.functionDelegateCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193):
	- [(success,returndata) = target.delegatecall(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L191)

node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193


## naming-convention
Impact: Informational
Confidence: High
 - [ ] ID-62
Parameter [SafuStrategy.withdraw(uint256)._amount](contracts/safu-vault/SafuStrategy.sol#L60) is not in mixedCase

contracts/safu-vault/SafuStrategy.sol#L60


 - [ ] ID-63
Function [IERC20Permit.DOMAIN_SEPARATOR()](node_modules/@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol#L59) is not in mixedCase

node_modules/@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol#L59


 - [ ] ID-64
Parameter [SafuStrategy.setVault(address)._vault](contracts/safu-vault/SafuStrategy.sol#L38) is not in mixedCase

contracts/safu-vault/SafuStrategy.sol#L38


 - [ ] ID-65
Parameter [SafuVault.withdraw(uint256)._shares](contracts/safu-vault/SafuVault.sol#L92) is not in mixedCase

contracts/safu-vault/SafuVault.sol#L92


 - [ ] ID-66
Function [IERC20Permit.DOMAIN_SEPARATOR()](node_modules/@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol#L59) is not in mixedCase

node_modules/@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol#L59


 - [ ] ID-67
Parameter [SafuVault.depositFor(address,uint256,address)._amount](contracts/safu-vault/SafuVault.sol#L113) is not in mixedCase

contracts/safu-vault/SafuVault.sol#L113


 - [ ] ID-68
Parameter [SafuVault.deposit(uint256)._amount](contracts/safu-vault/SafuVault.sol#L61) is not in mixedCase

contracts/safu-vault/SafuVault.sol#L61


## external-function
Impact: Optimization
Confidence: High
 - [ ] ID-69
renounceOwnership() should be declared external:
	- [Ownable.renounceOwnership()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L61-L63)

node_modules/@openzeppelin/contracts/access/Ownable.sol#L61-L63


 - [ ] ID-70
pause() should be declared external:
	- [SafuStrategy.pause()](contracts/safu-vault/SafuStrategy.sol#L114-L116)

contracts/safu-vault/SafuStrategy.sol#L114-L116


 - [ ] ID-71
transferOwnership(address) should be declared external:
	- [Ownable.transferOwnership(address)](node_modules/@openzeppelin/contracts/access/Ownable.sol#L69-L72)

node_modules/@openzeppelin/contracts/access/Ownable.sol#L69-L72


 - [ ] ID-72
addOrRemoveFromWhitelist(address,bool) should be declared external:
	- [SafuStrategy.addOrRemoveFromWhitelist(address,bool)](contracts/safu-vault/SafuStrategy.sol#L44-L49)

contracts/safu-vault/SafuStrategy.sol#L44-L49


 - [ ] ID-73
balanceOf() should be declared external:
	- [SafuStrategy.balanceOf()](contracts/safu-vault/SafuStrategy.sol#L104-L106)

contracts/safu-vault/SafuStrategy.sol#L104-L106


 - [ ] ID-74
transferFrom(address,address,uint256) should be declared external:
	- [ERC20.transferFrom(address,address,uint256)](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L158-L167)

node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L158-L167


 - [ ] ID-75
renounceOwnership() should be declared external:
	- [Ownable.renounceOwnership()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L61-L63)

node_modules/@openzeppelin/contracts/access/Ownable.sol#L61-L63


 - [ ] ID-76
decimals() should be declared external:
	- [ERC20.decimals()](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L87-L89)

node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L87-L89


 - [ ] ID-77
decreaseAllowance(address,uint256) should be declared external:
	- [ERC20.decreaseAllowance(address,uint256)](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L201-L210)

node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L201-L210


 - [ ] ID-78
symbol() should be declared external:
	- [ERC20.symbol()](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L70-L72)

node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L70-L72


 - [ ] ID-79
transfer(address,uint256) should be declared external:
	- [ERC20.transfer(address,uint256)](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L113-L117)

node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L113-L117


 - [ ] ID-80
increaseAllowance(address,uint256) should be declared external:
	- [ERC20.increaseAllowance(address,uint256)](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L181-L185)

node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L181-L185


 - [ ] ID-81
transferOwnership(address) should be declared external:
	- [Ownable.transferOwnership(address)](node_modules/@openzeppelin/contracts/access/Ownable.sol#L69-L72)

node_modules/@openzeppelin/contracts/access/Ownable.sol#L69-L72


 - [ ] ID-82
name() should be declared external:
	- [ERC20.name()](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L62-L64)

node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L62-L64


 - [ ] ID-83
approve(address,uint256) should be declared external:
	- [ERC20.approve(address,uint256)](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L136-L140)

node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L136-L140


## incorrect-equality
Impact: Medium
Confidence: High
 - [ ] ID-84
[SafuVault.depositFor(address,uint256,address)](contracts/safu-vault/SafuVault.sol#L111-L131) uses a dangerous strict equality:
	- [totalSupply() == 0](contracts/safu-vault/SafuVault.sol#L125)

contracts/safu-vault/SafuVault.sol#L111-L131


 - [ ] ID-85
[SafuVault.deposit(uint256)](contracts/safu-vault/SafuVault.sol#L61-L77) uses a dangerous strict equality:
	- [totalSupply() == 0](contracts/safu-vault/SafuVault.sol#L71)

contracts/safu-vault/SafuVault.sol#L61-L77


## shadowing-local
Impact: Low
Confidence: High
 - [ ] ID-86
[SafuVault.constructor(IStrategy,string,string)._symbol](contracts/safu-vault/SafuVault.sol#L31) shadows:
	- [ERC20._symbol](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L43) (state variable)

contracts/safu-vault/SafuVault.sol#L31


 - [ ] ID-87
[SafuVault.constructor(IStrategy,string,string)._name](contracts/safu-vault/SafuVault.sol#L30) shadows:
	- [ERC20._name](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L42) (state variable)

contracts/safu-vault/SafuVault.sol#L30


## reentrancy-benign
Impact: Low
Confidence: Medium
 - [ ] ID-88
Reentrancy in [SafuVault.depositFor(address,uint256,address)](contracts/safu-vault/SafuVault.sol#L111-L131):
	External calls:
	- [strategy.beforeDeposit()](contracts/safu-vault/SafuVault.sol#L116)
	- [IERC20(token).safeTransferFrom(msg.sender,address(this),_amount)](contracts/safu-vault/SafuVault.sol#L119)
	- [earn()](contracts/safu-vault/SafuVault.sol#L120)
		- [returndata = address(token).functionCall(data,SafeERC20: low-level call failed)](node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L110)
		- [want().safeTransfer(address(strategy),_bal)](contracts/safu-vault/SafuVault.sol#L82)
		- [strategy.deposit()](contracts/safu-vault/SafuVault.sol#L83)
		- [(success,returndata) = target.call{value: value}(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L137)
	External calls sending eth:
	- [earn()](contracts/safu-vault/SafuVault.sol#L120)
		- [(success,returndata) = target.call{value: value}(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L137)
	State variables written after the call(s):
	- [_mint(user,shares)](contracts/safu-vault/SafuVault.sol#L130)
		- [_balances[account] += amount](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L263)
	- [_mint(user,shares)](contracts/safu-vault/SafuVault.sol#L130)
		- [_totalSupply += amount](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L262)

contracts/safu-vault/SafuVault.sol#L111-L131


 - [ ] ID-89
Reentrancy in [SafuVault.deposit(uint256)](contracts/safu-vault/SafuVault.sol#L61-L77):
	External calls:
	- [strategy.beforeDeposit()](contracts/safu-vault/SafuVault.sol#L62)
	- [want().safeTransferFrom(msg.sender,address(this),_amount)](contracts/safu-vault/SafuVault.sol#L65)
	- [earn()](contracts/safu-vault/SafuVault.sol#L66)
		- [returndata = address(token).functionCall(data,SafeERC20: low-level call failed)](node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L110)
		- [want().safeTransfer(address(strategy),_bal)](contracts/safu-vault/SafuVault.sol#L82)
		- [strategy.deposit()](contracts/safu-vault/SafuVault.sol#L83)
		- [(success,returndata) = target.call{value: value}(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L137)
	External calls sending eth:
	- [earn()](contracts/safu-vault/SafuVault.sol#L66)
		- [(success,returndata) = target.call{value: value}(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L137)
	State variables written after the call(s):
	- [_mint(msg.sender,shares)](contracts/safu-vault/SafuVault.sol#L76)
		- [_balances[account] += amount](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L263)
	- [_mint(msg.sender,shares)](contracts/safu-vault/SafuVault.sol#L76)
		- [_totalSupply += amount](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L262)

contracts/safu-vault/SafuVault.sol#L61-L77


## reentrancy-events
Impact: Low
Confidence: Medium
 - [ ] ID-90
Reentrancy in [SafuVault.depositFor(address,uint256,address)](contracts/safu-vault/SafuVault.sol#L111-L131):
	External calls:
	- [strategy.beforeDeposit()](contracts/safu-vault/SafuVault.sol#L116)
	- [IERC20(token).safeTransferFrom(msg.sender,address(this),_amount)](contracts/safu-vault/SafuVault.sol#L119)
	- [earn()](contracts/safu-vault/SafuVault.sol#L120)
		- [returndata = address(token).functionCall(data,SafeERC20: low-level call failed)](node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L110)
		- [want().safeTransfer(address(strategy),_bal)](contracts/safu-vault/SafuVault.sol#L82)
		- [strategy.deposit()](contracts/safu-vault/SafuVault.sol#L83)
		- [(success,returndata) = target.call{value: value}(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L137)
	External calls sending eth:
	- [earn()](contracts/safu-vault/SafuVault.sol#L120)
		- [(success,returndata) = target.call{value: value}(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L137)
	Event emitted after the call(s):
	- [Transfer(address(0),account,amount)](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L264)
		- [_mint(user,shares)](contracts/safu-vault/SafuVault.sol#L130)

contracts/safu-vault/SafuVault.sol#L111-L131


 - [ ] ID-91
Reentrancy in [SafuVault.deposit(uint256)](contracts/safu-vault/SafuVault.sol#L61-L77):
	External calls:
	- [strategy.beforeDeposit()](contracts/safu-vault/SafuVault.sol#L62)
	- [want().safeTransferFrom(msg.sender,address(this),_amount)](contracts/safu-vault/SafuVault.sol#L65)
	- [earn()](contracts/safu-vault/SafuVault.sol#L66)
		- [returndata = address(token).functionCall(data,SafeERC20: low-level call failed)](node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L110)
		- [want().safeTransfer(address(strategy),_bal)](contracts/safu-vault/SafuVault.sol#L82)
		- [strategy.deposit()](contracts/safu-vault/SafuVault.sol#L83)
		- [(success,returndata) = target.call{value: value}(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L137)
	External calls sending eth:
	- [earn()](contracts/safu-vault/SafuVault.sol#L66)
		- [(success,returndata) = target.call{value: value}(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L137)
	Event emitted after the call(s):
	- [Transfer(address(0),account,amount)](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L264)
		- [_mint(msg.sender,shares)](contracts/safu-vault/SafuVault.sol#L76)

contracts/safu-vault/SafuVault.sol#L61-L77


