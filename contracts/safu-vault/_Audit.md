Summary
 - [missing-zero-check](#missing-zero-check) (2 results) (Low)
 - [assembly](#assembly) (2 results) (Informational)
 - [boolean-equal](#boolean-equal) (1 results) (Informational)
 - [pragma](#pragma) (2 results) (Informational)
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


## incorrect-equality
Impact: Medium
Confidence: High
 - [ ] ID-7
[SafuVault.depositFor(address,uint256,address)](contracts/safu-vault/SafuVault.sol#L111-L131) uses a dangerous strict equality:
	- [totalSupply() == 0](contracts/safu-vault/SafuVault.sol#L125)

contracts/safu-vault/SafuVault.sol#L111-L131


 - [ ] ID-8
[SafuVault.deposit(uint256)](contracts/safu-vault/SafuVault.sol#L61-L77) uses a dangerous strict equality:
	- [totalSupply() == 0](contracts/safu-vault/SafuVault.sol#L71)

contracts/safu-vault/SafuVault.sol#L61-L77


## shadowing-local
Impact: Low
Confidence: High
 - [ ] ID-9
[SafuVault.constructor(IStrategy,string,string)._symbol](contracts/safu-vault/SafuVault.sol#L31) shadows:
	- [ERC20._symbol](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L43) (state variable)

contracts/safu-vault/SafuVault.sol#L31


 - [ ] ID-10
[SafuVault.constructor(IStrategy,string,string)._name](contracts/safu-vault/SafuVault.sol#L30) shadows:
	- [ERC20._name](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L42) (state variable)

contracts/safu-vault/SafuVault.sol#L30


## reentrancy-benign
Impact: Low
Confidence: Medium
 - [ ] ID-11
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


 - [ ] ID-12
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
 - [ ] ID-13
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


 - [ ] ID-14
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


