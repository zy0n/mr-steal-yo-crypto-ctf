Summary
 - [uninitialized-local](#uninitialized-local) (8 results) (Medium)
 - [unused-return](#unused-return) (5 results) (Medium)
 - [variable-scope](#variable-scope) (11 results) (Low)
 - [assembly](#assembly) (4 results) (Informational)
 - [boolean-equal](#boolean-equal) (2 results) (Informational)
 - [pragma](#pragma) (3 results) (Informational)
 - [shadowing-local](#shadowing-local) (12 results) (Low)
 - [reentrancy-events](#reentrancy-events) (1 results) (Low)
 - [missing-zero-check](#missing-zero-check) (1 results) (Low)
## uninitialized-local
Impact: Medium
Confidence: Medium
 - [ ] ID-0
[AssetHolder._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes).reason](contracts/game-assets/AssetHolder.sol#L364) is a local variable never initialized

contracts/game-assets/AssetHolder.sol#L364


 - [ ] ID-1
[AssetHolder._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes).reason](contracts/game-assets/AssetHolder.sol#L387) is a local variable never initialized

contracts/game-assets/AssetHolder.sol#L387


 - [ ] ID-2
[AssetHolder._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes).response](contracts/game-assets/AssetHolder.sol#L360) is a local variable never initialized

contracts/game-assets/AssetHolder.sol#L360


 - [ ] ID-3
[AssetHolder._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes).response](contracts/game-assets/AssetHolder.sol#L382) is a local variable never initialized

contracts/game-assets/AssetHolder.sol#L382


 - [ ] ID-4
[AssetHolder._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes).reason](contracts/game-assets/AssetHolder.sol#L364) is a local variable never initialized

contracts/game-assets/AssetHolder.sol#L364


 - [ ] ID-5
[AssetHolder._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes).reason](contracts/game-assets/AssetHolder.sol#L387) is a local variable never initialized

contracts/game-assets/AssetHolder.sol#L387


 - [ ] ID-6
[AssetHolder._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes).response](contracts/game-assets/AssetHolder.sol#L360) is a local variable never initialized

contracts/game-assets/AssetHolder.sol#L360


 - [ ] ID-7
[AssetHolder._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes).response](contracts/game-assets/AssetHolder.sol#L382) is a local variable never initialized

contracts/game-assets/AssetHolder.sol#L382


## unused-return
Impact: Medium
Confidence: Medium
 - [ ] ID-8
[AssetHolder._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes)](contracts/game-assets/AssetHolder.sol#L351-L370) ignores return value by [IERC1155Receiver(to).onERC1155Received(operator,from,id,amount,data)](contracts/game-assets/AssetHolder.sol#L360-L368)

contracts/game-assets/AssetHolder.sol#L351-L370


 - [ ] ID-9
[AssetHolder._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes)](contracts/game-assets/AssetHolder.sol#L372-L393) ignores return value by [IERC1155Receiver(to).onERC1155BatchReceived(operator,from,ids,amounts,data)](contracts/game-assets/AssetHolder.sol#L381-L391)

contracts/game-assets/AssetHolder.sol#L372-L393


 - [ ] ID-10
[AssetHolder._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes)](contracts/game-assets/AssetHolder.sol#L351-L370) ignores return value by [IERC1155Receiver(to).onERC1155Received(operator,from,id,amount,data)](contracts/game-assets/AssetHolder.sol#L360-L368)

contracts/game-assets/AssetHolder.sol#L351-L370


 - [ ] ID-11
[AssetHolder._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes)](contracts/game-assets/AssetHolder.sol#L372-L393) ignores return value by [IERC1155Receiver(to).onERC1155BatchReceived(operator,from,ids,amounts,data)](contracts/game-assets/AssetHolder.sol#L381-L391)

contracts/game-assets/AssetHolder.sol#L372-L393


 - [ ] ID-12
[GameAsset._checkOnERC721Received(address,address,uint256,bytes)](contracts/game-assets/GameAsset.sol#L439-L461) ignores return value by [IERC721Receiver(to).onERC721Received(_msgSender(),from,tokenId,data)](contracts/game-assets/GameAsset.sol#L446-L457)

contracts/game-assets/GameAsset.sol#L439-L461


## variable-scope
Impact: Low
Confidence: High
 - [ ] ID-13
Variable '[AssetHolder._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes).reason](contracts/game-assets/AssetHolder.sol#L364)' in [AssetHolder._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes)](contracts/game-assets/AssetHolder.sol#L351-L370) potentially used before declaration: [revert(string)(reason)](contracts/game-assets/AssetHolder.sol#L365)

contracts/game-assets/AssetHolder.sol#L364


 - [ ] ID-14
Variable '[AssetHolder._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes).response](contracts/game-assets/AssetHolder.sol#L382)' in [AssetHolder._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes)](contracts/game-assets/AssetHolder.sol#L372-L393) potentially used before declaration: [response != IERC1155Receiver.onERC1155BatchReceived.selector](contracts/game-assets/AssetHolder.sol#L384)

contracts/game-assets/AssetHolder.sol#L382


 - [ ] ID-15
Variable '[AssetHolder._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes).response](contracts/game-assets/AssetHolder.sol#L360)' in [AssetHolder._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes)](contracts/game-assets/AssetHolder.sol#L351-L370) potentially used before declaration: [response != IERC1155Receiver.onERC1155Received.selector](contracts/game-assets/AssetHolder.sol#L361)

contracts/game-assets/AssetHolder.sol#L360


 - [ ] ID-16
Variable '[AssetHolder._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes).reason](contracts/game-assets/AssetHolder.sol#L387)' in [AssetHolder._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes)](contracts/game-assets/AssetHolder.sol#L372-L393) potentially used before declaration: [revert(string)(reason)](contracts/game-assets/AssetHolder.sol#L388)

contracts/game-assets/AssetHolder.sol#L387


 - [ ] ID-17
Variable '[AssetHolder._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes).reason](contracts/game-assets/AssetHolder.sol#L364)' in [AssetHolder._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes)](contracts/game-assets/AssetHolder.sol#L351-L370) potentially used before declaration: [revert(string)(reason)](contracts/game-assets/AssetHolder.sol#L365)

contracts/game-assets/AssetHolder.sol#L364


 - [ ] ID-18
Variable '[AssetHolder._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes).response](contracts/game-assets/AssetHolder.sol#L382)' in [AssetHolder._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes)](contracts/game-assets/AssetHolder.sol#L372-L393) potentially used before declaration: [response != IERC1155Receiver.onERC1155BatchReceived.selector](contracts/game-assets/AssetHolder.sol#L384)

contracts/game-assets/AssetHolder.sol#L382


 - [ ] ID-19
Variable '[AssetHolder._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes).response](contracts/game-assets/AssetHolder.sol#L360)' in [AssetHolder._doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes)](contracts/game-assets/AssetHolder.sol#L351-L370) potentially used before declaration: [response != IERC1155Receiver.onERC1155Received.selector](contracts/game-assets/AssetHolder.sol#L361)

contracts/game-assets/AssetHolder.sol#L360


 - [ ] ID-20
Variable '[AssetHolder._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes).reason](contracts/game-assets/AssetHolder.sol#L387)' in [AssetHolder._doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes)](contracts/game-assets/AssetHolder.sol#L372-L393) potentially used before declaration: [revert(string)(reason)](contracts/game-assets/AssetHolder.sol#L388)

contracts/game-assets/AssetHolder.sol#L387


 - [ ] ID-21
Variable '[GameAsset._checkOnERC721Received(address,address,uint256,bytes).retval](contracts/game-assets/GameAsset.sol#L446)' in [GameAsset._checkOnERC721Received(address,address,uint256,bytes)](contracts/game-assets/GameAsset.sol#L439-L461) potentially used before declaration: [retval == IERC721Receiver.onERC721Received.selector](contracts/game-assets/GameAsset.sol#L447)

contracts/game-assets/GameAsset.sol#L446


 - [ ] ID-22
Variable '[GameAsset._checkOnERC721Received(address,address,uint256,bytes).reason](contracts/game-assets/GameAsset.sol#L448)' in [GameAsset._checkOnERC721Received(address,address,uint256,bytes)](contracts/game-assets/GameAsset.sol#L439-L461) potentially used before declaration: [revert(uint256,uint256)(32 + reason,mload(uint256)(reason))](contracts/game-assets/GameAsset.sol#L454)

contracts/game-assets/GameAsset.sol#L448


 - [ ] ID-23
Variable '[GameAsset._checkOnERC721Received(address,address,uint256,bytes).reason](contracts/game-assets/GameAsset.sol#L448)' in [GameAsset._checkOnERC721Received(address,address,uint256,bytes)](contracts/game-assets/GameAsset.sol#L439-L461) potentially used before declaration: [reason.length == 0](contracts/game-assets/GameAsset.sol#L449)

contracts/game-assets/GameAsset.sol#L448


## assembly
Impact: Informational
Confidence: High
 - [ ] ID-24
[Address.verifyCallResult(bool,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Address.sol#L213-L216)

node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221


 - [ ] ID-25
[Address.verifyCallResult(bool,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Address.sol#L213-L216)

node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221


 - [ ] ID-26
[Address.verifyCallResult(bool,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221) uses assembly
	- [INLINE ASM](node_modules/@openzeppelin/contracts/utils/Address.sol#L213-L216)

node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221


 - [ ] ID-27
[GameAsset._checkOnERC721Received(address,address,uint256,bytes)](contracts/game-assets/GameAsset.sol#L439-L461) uses assembly
	- [INLINE ASM](contracts/game-assets/GameAsset.sol#L453-L455)

contracts/game-assets/GameAsset.sol#L439-L461


## boolean-equal
Impact: Informational
Confidence: High
 - [ ] ID-28
[AssetHolder.balanceOf(address,uint256)](contracts/game-assets/AssetHolder.sol#L59-L62) compares to a boolean constant:
	-[_ownsAny[id][account] == true](contracts/game-assets/AssetHolder.sol#L61)

contracts/game-assets/AssetHolder.sol#L59-L62


 - [ ] ID-29
[AssetHolder.balanceOf(address,uint256)](contracts/game-assets/AssetHolder.sol#L59-L62) compares to a boolean constant:
	-[_ownsAny[id][account] == true](contracts/game-assets/AssetHolder.sol#L61)

contracts/game-assets/AssetHolder.sol#L59-L62


## pragma
Impact: Informational
Confidence: High
 - [ ] ID-30
Different versions of Solidity are used:
	- Version used: ['^0.8.0', '^0.8.1', '^0.8.4']
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol#L4)
	- [^0.8.1](node_modules/@openzeppelin/contracts/utils/Address.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/Context.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol#L4)
	- [^0.8.4](contracts/game-assets/AssetHolder.sol#L2)

node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol#L4


 - [ ] ID-31
Different versions of Solidity are used:
	- Version used: ['^0.8.0', '^0.8.1', '^0.8.4']
	- [^0.8.0](node_modules/@openzeppelin/contracts/access/Ownable.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol#L4)
	- [^0.8.1](node_modules/@openzeppelin/contracts/utils/Address.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/Context.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/Counters.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol#L4)
	- [^0.8.4](contracts/game-assets/AssetHolder.sol#L2)
	- [^0.8.4](contracts/game-assets/AssetWrapper.sol#L2)

node_modules/@openzeppelin/contracts/access/Ownable.sol#L4


 - [ ] ID-32
Different versions of Solidity are used:
	- Version used: ['^0.8.0', '^0.8.1', '^0.8.4']
	- [^0.8.0](node_modules/@openzeppelin/contracts/access/Ownable.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol#L4)
	- [^0.8.1](node_modules/@openzeppelin/contracts/utils/Address.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/Context.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/Counters.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/Strings.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol#L4)
	- [^0.8.0](node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol#L4)
	- [^0.8.4](contracts/game-assets/GameAsset.sol#L2)

node_modules/@openzeppelin/contracts/access/Ownable.sol#L4


## shadowing-local
Impact: Low
Confidence: High
 - [ ] ID-33
[AssetWrapper.wrap(uint256,address,address).owner](contracts/game-assets/AssetWrapper.sol#L72) shadows:
	- [Ownable.owner()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L43-L45) (function)

contracts/game-assets/AssetWrapper.sol#L72


 - [ ] ID-34
[AssetWrapper.constructor(string).uri](contracts/game-assets/AssetWrapper.sol#L39) shadows:
	- [AssetHolder.uri(uint256)](contracts/game-assets/AssetHolder.sol#L48-L50) (function)
	- [IERC1155MetadataURI.uri(uint256)](node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol#L21) (function)

contracts/game-assets/AssetWrapper.sol#L39


 - [ ] ID-35
[GameAsset._setApprovalForAll(address,address,bool).operator](contracts/game-assets/GameAsset.sol#L414) shadows:
	- [GameAsset.operator](contracts/game-assets/GameAsset.sol#L24) (state variable)

contracts/game-assets/GameAsset.sol#L414


 - [ ] ID-36
[GameAsset.approve(address,uint256).owner](contracts/game-assets/GameAsset.sol#L158) shadows:
	- [Ownable.owner()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L43-L45) (function)

contracts/game-assets/GameAsset.sol#L158


 - [ ] ID-37
[GameAsset.ownerOf(uint256).owner](contracts/game-assets/GameAsset.sol#L116) shadows:
	- [Ownable.owner()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L43-L45) (function)

contracts/game-assets/GameAsset.sol#L116


 - [ ] ID-38
[GameAsset.balanceOf(address).owner](contracts/game-assets/GameAsset.sol#L107) shadows:
	- [Ownable.owner()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L43-L45) (function)

contracts/game-assets/GameAsset.sol#L107


 - [ ] ID-39
[GameAsset._setApprovalForAll(address,address,bool).owner](contracts/game-assets/GameAsset.sol#L413) shadows:
	- [Ownable.owner()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L43-L45) (function)

contracts/game-assets/GameAsset.sol#L413


 - [ ] ID-40
[GameAsset._isApprovedOrOwner(address,uint256).owner](contracts/game-assets/GameAsset.sol#L278) shadows:
	- [Ownable.owner()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L43-L45) (function)

contracts/game-assets/GameAsset.sol#L278


 - [ ] ID-41
[GameAsset.isApprovedForAll(address,address).operator](contracts/game-assets/GameAsset.sol#L188) shadows:
	- [GameAsset.operator](contracts/game-assets/GameAsset.sol#L24) (state variable)

contracts/game-assets/GameAsset.sol#L188


 - [ ] ID-42
[GameAsset.isApprovedForAll(address,address).owner](contracts/game-assets/GameAsset.sol#L188) shadows:
	- [Ownable.owner()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L43-L45) (function)

contracts/game-assets/GameAsset.sol#L188


 - [ ] ID-43
[GameAsset.setApprovalForAll(address,bool).operator](contracts/game-assets/GameAsset.sol#L181) shadows:
	- [GameAsset.operator](contracts/game-assets/GameAsset.sol#L24) (state variable)

contracts/game-assets/GameAsset.sol#L181


 - [ ] ID-44
[GameAsset._burn(uint256).owner](contracts/game-assets/GameAsset.sol#L349) shadows:
	- [Ownable.owner()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L43-L45) (function)

contracts/game-assets/GameAsset.sol#L349


## reentrancy-events
Impact: Low
Confidence: Medium
 - [ ] ID-45
Reentrancy in [AssetWrapper.unwrap(address,address)](contracts/game-assets/AssetWrapper.sol#L92-L108):
	External calls:
	- [require(bool,string)(assetOwner == msg.sender || isApprovedForAll(assetOwner,msg.sender) || asset.isApprovedForAll(assetOwner,msg.sender),Wrapper: asset if not owned by sender)](contracts/game-assets/AssetWrapper.sol#L100-L105)
	- [_unwrap(assetOwner,assetAddress)](contracts/game-assets/AssetWrapper.sol#L107)
		- [IGameAsset(assetAddress).setOwnerOperator(assetOwner,nftId)](contracts/game-assets/AssetWrapper.sol#L129-L132)
	Event emitted after the call(s):
	- [TransferSingle(operator,from,address(0),id,amount)](contracts/game-assets/AssetHolder.sol#L288)
		- [_unwrap(assetOwner,assetAddress)](contracts/game-assets/AssetWrapper.sol#L107)

contracts/game-assets/AssetWrapper.sol#L92-L108


## missing-zero-check
Impact: Low
Confidence: Medium
 - [ ] ID-46
[GameAsset.setOperator(address)._operator](contracts/game-assets/GameAsset.sol#L75) lacks a zero-check on :
		- [operator = _operator](contracts/game-assets/GameAsset.sol#L77)

contracts/game-assets/GameAsset.sol#L75


