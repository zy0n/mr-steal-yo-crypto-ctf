Summary
 - [uninitialized-local](#uninitialized-local) (8 results) (Medium)
 - [unused-return](#unused-return) (5 results) (Medium)
 - [variable-scope](#variable-scope) (11 results) (Low)
 - [assembly](#assembly) (4 results) (Informational)
 - [boolean-equal](#boolean-equal) (2 results) (Informational)
 - [pragma](#pragma) (3 results) (Informational)
 - [dead-code](#dead-code) (49 results) (Informational)
 - [solc-version](#solc-version) (31 results) (Informational)
 - [low-level-calls](#low-level-calls) (12 results) (Informational)
 - [external-function](#external-function) (25 results) (Optimization)
 - [shadowing-local](#shadowing-local) (12 results) (Low)
 - [reentrancy-events](#reentrancy-events) (1 results) (Low)
 - [missing-zero-check](#missing-zero-check) (1 results) (Low)
 - [naming-convention](#naming-convention) (1 results) (Informational)
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


## dead-code
Impact: Informational
Confidence: Medium
 - [ ] ID-33
[Address.verifyCallResult(bool,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221


 - [ ] ID-34
[Address.sendValue(address,uint256)](node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65


 - [ ] ID-35
[Address.functionCallWithValue(address,bytes,uint256)](node_modules/@openzeppelin/contracts/utils/Address.sol#L114-L120) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L114-L120


 - [ ] ID-36
[Address.functionDelegateCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193


 - [ ] ID-37
[AssetHolder._mint(address,uint256,uint256,bytes)](contracts/game-assets/AssetHolder.sol#L207-L234) is never used and should be removed

contracts/game-assets/AssetHolder.sol#L207-L234


 - [ ] ID-38
[Address.functionDelegateCall(address,bytes)](node_modules/@openzeppelin/contracts/utils/Address.sol#L174-L176) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L174-L176


 - [ ] ID-39
[AssetHolder._burnBatch(address,uint256[],uint256[])](contracts/game-assets/AssetHolder.sol#L294-L318) is never used and should be removed

contracts/game-assets/AssetHolder.sol#L294-L318


 - [ ] ID-40
[Address.functionCallWithValue(address,bytes,uint256,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139


 - [ ] ID-41
[Context._msgData()](node_modules/@openzeppelin/contracts/utils/Context.sol#L21-L23) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Context.sol#L21-L23


 - [ ] ID-42
[Address.functionStaticCall(address,bytes)](node_modules/@openzeppelin/contracts/utils/Address.sol#L147-L149) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L147-L149


 - [ ] ID-43
[AssetHolder._burn(address,uint256,uint256)](contracts/game-assets/AssetHolder.sol#L271-L291) is never used and should be removed

contracts/game-assets/AssetHolder.sol#L271-L291


 - [ ] ID-44
[Address.functionCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L95-L101) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L95-L101


 - [ ] ID-45
[Address.functionStaticCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166


 - [ ] ID-46
[AssetHolder._mintBatch(address,uint256[],uint256[],bytes)](contracts/game-assets/AssetHolder.sol#L238-L268) is never used and should be removed

contracts/game-assets/AssetHolder.sol#L238-L268


 - [ ] ID-47
[Address.functionCall(address,bytes)](node_modules/@openzeppelin/contracts/utils/Address.sol#L85-L87) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L85-L87


 - [ ] ID-48
[Address.verifyCallResult(bool,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221


 - [ ] ID-49
[Address.sendValue(address,uint256)](node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65


 - [ ] ID-50
[Address.functionCallWithValue(address,bytes,uint256)](node_modules/@openzeppelin/contracts/utils/Address.sol#L114-L120) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L114-L120


 - [ ] ID-51
[Address.functionDelegateCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193


 - [ ] ID-52
[Address.functionDelegateCall(address,bytes)](node_modules/@openzeppelin/contracts/utils/Address.sol#L174-L176) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L174-L176


 - [ ] ID-53
[Counters.reset(Counters.Counter)](node_modules/@openzeppelin/contracts/utils/Counters.sol#L40-L42) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Counters.sol#L40-L42


 - [ ] ID-54
[AssetHolder._burnBatch(address,uint256[],uint256[])](contracts/game-assets/AssetHolder.sol#L294-L318) is never used and should be removed

contracts/game-assets/AssetHolder.sol#L294-L318


 - [ ] ID-55
[Address.functionCallWithValue(address,bytes,uint256,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139


 - [ ] ID-56
[Counters.decrement(Counters.Counter)](node_modules/@openzeppelin/contracts/utils/Counters.sol#L32-L38) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Counters.sol#L32-L38


 - [ ] ID-57
[Context._msgData()](node_modules/@openzeppelin/contracts/utils/Context.sol#L21-L23) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Context.sol#L21-L23


 - [ ] ID-58
[Address.functionStaticCall(address,bytes)](node_modules/@openzeppelin/contracts/utils/Address.sol#L147-L149) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L147-L149


 - [ ] ID-59
[Address.functionCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L95-L101) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L95-L101


 - [ ] ID-60
[Address.functionStaticCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166


 - [ ] ID-61
[AssetHolder._mintBatch(address,uint256[],uint256[],bytes)](contracts/game-assets/AssetHolder.sol#L238-L268) is never used and should be removed

contracts/game-assets/AssetHolder.sol#L238-L268


 - [ ] ID-62
[Address.functionCall(address,bytes)](node_modules/@openzeppelin/contracts/utils/Address.sol#L85-L87) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L85-L87


 - [ ] ID-63
[Address.verifyCallResult(bool,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L201-L221


 - [ ] ID-64
[Strings.toHexString(uint256,uint256)](node_modules/@openzeppelin/contracts/utils/Strings.sol#L57-L67) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Strings.sol#L57-L67


 - [ ] ID-65
[GameAsset._safeMint(address,uint256,bytes)](contracts/game-assets/GameAsset.sol#L300-L310) is never used and should be removed

contracts/game-assets/GameAsset.sol#L300-L310


 - [ ] ID-66
[Address.sendValue(address,uint256)](node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65


 - [ ] ID-67
[Address.functionCallWithValue(address,bytes,uint256)](node_modules/@openzeppelin/contracts/utils/Address.sol#L114-L120) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L114-L120


 - [ ] ID-68
[Address.functionDelegateCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193


 - [ ] ID-69
[Strings.toHexString(uint256)](node_modules/@openzeppelin/contracts/utils/Strings.sol#L41-L52) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Strings.sol#L41-L52


 - [ ] ID-70
[GameAsset._safeMint(address,uint256)](contracts/game-assets/GameAsset.sol#L292-L294) is never used and should be removed

contracts/game-assets/GameAsset.sol#L292-L294


 - [ ] ID-71
[Address.functionDelegateCall(address,bytes)](node_modules/@openzeppelin/contracts/utils/Address.sol#L174-L176) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L174-L176


 - [ ] ID-72
[Counters.reset(Counters.Counter)](node_modules/@openzeppelin/contracts/utils/Counters.sol#L40-L42) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Counters.sol#L40-L42


 - [ ] ID-73
[Address.functionCallWithValue(address,bytes,uint256,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139


 - [ ] ID-74
[Counters.decrement(Counters.Counter)](node_modules/@openzeppelin/contracts/utils/Counters.sol#L32-L38) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Counters.sol#L32-L38


 - [ ] ID-75
[Context._msgData()](node_modules/@openzeppelin/contracts/utils/Context.sol#L21-L23) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Context.sol#L21-L23


 - [ ] ID-76
[Address.functionStaticCall(address,bytes)](node_modules/@openzeppelin/contracts/utils/Address.sol#L147-L149) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L147-L149


 - [ ] ID-77
[Strings.toHexString(address)](node_modules/@openzeppelin/contracts/utils/Strings.sol#L72-L74) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Strings.sol#L72-L74


 - [ ] ID-78
[Address.functionCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L95-L101) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L95-L101


 - [ ] ID-79
[Address.functionStaticCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166


 - [ ] ID-80
[GameAsset._burn(uint256)](contracts/game-assets/GameAsset.sol#L348-L362) is never used and should be removed

contracts/game-assets/GameAsset.sol#L348-L362


 - [ ] ID-81
[Address.functionCall(address,bytes)](node_modules/@openzeppelin/contracts/utils/Address.sol#L85-L87) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Address.sol#L85-L87


## solc-version
Impact: Informational
Confidence: High
 - [ ] ID-82
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/Context.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/Context.sol#L4


 - [ ] ID-83
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol#L4


 - [ ] ID-84
Pragma version[^0.8.1](node_modules/@openzeppelin/contracts/utils/Address.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/Address.sol#L4


 - [ ] ID-85
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol#L4


 - [ ] ID-86
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol#L4


 - [ ] ID-87
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol#L4


 - [ ] ID-88
solc-0.8.9 is not recommended for deployment

 - [ ] ID-89
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol#L4


 - [ ] ID-90
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/Context.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/Context.sol#L4


 - [ ] ID-91
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol#L4


 - [ ] ID-92
Pragma version[^0.8.1](node_modules/@openzeppelin/contracts/utils/Address.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/Address.sol#L4


 - [ ] ID-93
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol#L4


 - [ ] ID-94
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/Counters.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/Counters.sol#L4


 - [ ] ID-95
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol#L4


 - [ ] ID-96
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/access/Ownable.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/access/Ownable.sol#L4


 - [ ] ID-97
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol#L4


 - [ ] ID-98
solc-0.8.9 is not recommended for deployment

 - [ ] ID-99
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol#L4


 - [ ] ID-100
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/Context.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/Context.sol#L4


 - [ ] ID-101
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/Strings.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/Strings.sol#L4


 - [ ] ID-102
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol#L4


 - [ ] ID-103
Pragma version[^0.8.1](node_modules/@openzeppelin/contracts/utils/Address.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/Address.sol#L4


 - [ ] ID-104
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol#L4


 - [ ] ID-105
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/Counters.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/Counters.sol#L4


 - [ ] ID-106
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol#L4


 - [ ] ID-107
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol#L4


 - [ ] ID-108
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/access/Ownable.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/access/Ownable.sol#L4


 - [ ] ID-109
Pragma version[^0.8.0](node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol#L4) allows old versions

node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol#L4


 - [ ] ID-110
solc-0.8.9 is not recommended for deployment

 - [ ] ID-111
Pragma version[^0.8.0](contracts/game-assets/GameAssetExploiter.sol#L2) allows old versions

contracts/game-assets/GameAssetExploiter.sol#L2


 - [ ] ID-112
solc-0.8.9 is not recommended for deployment

## low-level-calls
Impact: Informational
Confidence: High
 - [ ] ID-113
Low level call in [Address.sendValue(address,uint256)](node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65):
	- [(success) = recipient.call{value: amount}()](node_modules/@openzeppelin/contracts/utils/Address.sol#L63)

node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65


 - [ ] ID-114
Low level call in [Address.functionCallWithValue(address,bytes,uint256,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139):
	- [(success,returndata) = target.call{value: value}(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L137)

node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139


 - [ ] ID-115
Low level call in [Address.functionStaticCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166):
	- [(success,returndata) = target.staticcall(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L164)

node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166


 - [ ] ID-116
Low level call in [Address.functionDelegateCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193):
	- [(success,returndata) = target.delegatecall(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L191)

node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193


 - [ ] ID-117
Low level call in [Address.sendValue(address,uint256)](node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65):
	- [(success) = recipient.call{value: amount}()](node_modules/@openzeppelin/contracts/utils/Address.sol#L63)

node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65


 - [ ] ID-118
Low level call in [Address.functionCallWithValue(address,bytes,uint256,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139):
	- [(success,returndata) = target.call{value: value}(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L137)

node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139


 - [ ] ID-119
Low level call in [Address.functionStaticCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166):
	- [(success,returndata) = target.staticcall(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L164)

node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166


 - [ ] ID-120
Low level call in [Address.functionDelegateCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193):
	- [(success,returndata) = target.delegatecall(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L191)

node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193


 - [ ] ID-121
Low level call in [Address.sendValue(address,uint256)](node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65):
	- [(success) = recipient.call{value: amount}()](node_modules/@openzeppelin/contracts/utils/Address.sol#L63)

node_modules/@openzeppelin/contracts/utils/Address.sol#L60-L65


 - [ ] ID-122
Low level call in [Address.functionCallWithValue(address,bytes,uint256,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139):
	- [(success,returndata) = target.call{value: value}(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L137)

node_modules/@openzeppelin/contracts/utils/Address.sol#L128-L139


 - [ ] ID-123
Low level call in [Address.functionStaticCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166):
	- [(success,returndata) = target.staticcall(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L164)

node_modules/@openzeppelin/contracts/utils/Address.sol#L157-L166


 - [ ] ID-124
Low level call in [Address.functionDelegateCall(address,bytes,string)](node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193):
	- [(success,returndata) = target.delegatecall(data)](node_modules/@openzeppelin/contracts/utils/Address.sol#L191)

node_modules/@openzeppelin/contracts/utils/Address.sol#L184-L193


## external-function
Impact: Optimization
Confidence: High
 - [ ] ID-125
setApprovalForAll(address,bool) should be declared external:
	- [AssetHolder.setApprovalForAll(address,bool)](contracts/game-assets/AssetHolder.sol#L84-L86)

contracts/game-assets/AssetHolder.sol#L84-L86


 - [ ] ID-126
safeBatchTransferFrom(address,address,uint256[],uint256[],bytes) should be declared external:
	- [AssetHolder.safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)](contracts/game-assets/AssetHolder.sol#L111-L123)

contracts/game-assets/AssetHolder.sol#L111-L123


 - [ ] ID-127
uri(uint256) should be declared external:
	- [AssetHolder.uri(uint256)](contracts/game-assets/AssetHolder.sol#L48-L50)

contracts/game-assets/AssetHolder.sol#L48-L50


 - [ ] ID-128
getIdOwned(uint256,address) should be declared external:
	- [AssetHolder.getIdOwned(uint256,address)](contracts/game-assets/AssetHolder.sol#L53-L55)

contracts/game-assets/AssetHolder.sol#L53-L55


 - [ ] ID-129
balanceOfBatch(address[],uint256[]) should be declared external:
	- [AssetHolder.balanceOfBatch(address[],uint256[])](contracts/game-assets/AssetHolder.sol#L65-L81)

contracts/game-assets/AssetHolder.sol#L65-L81


 - [ ] ID-130
safeTransferFrom(address,address,uint256,uint256,bytes) should be declared external:
	- [AssetHolder.safeTransferFrom(address,address,uint256,uint256,bytes)](contracts/game-assets/AssetHolder.sol#L95-L107)

contracts/game-assets/AssetHolder.sol#L95-L107


 - [ ] ID-131
unwrap(address,address) should be declared external:
	- [AssetWrapper.unwrap(address,address)](contracts/game-assets/AssetWrapper.sol#L92-L108)

contracts/game-assets/AssetWrapper.sol#L92-L108


 - [ ] ID-132
setApprovalForAll(address,bool) should be declared external:
	- [AssetHolder.setApprovalForAll(address,bool)](contracts/game-assets/AssetHolder.sol#L84-L86)

contracts/game-assets/AssetHolder.sol#L84-L86


 - [ ] ID-133
safeBatchTransferFrom(address,address,uint256[],uint256[],bytes) should be declared external:
	- [AssetHolder.safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)](contracts/game-assets/AssetHolder.sol#L111-L123)

contracts/game-assets/AssetHolder.sol#L111-L123


 - [ ] ID-134
renounceOwnership() should be declared external:
	- [Ownable.renounceOwnership()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L61-L63)

node_modules/@openzeppelin/contracts/access/Ownable.sol#L61-L63


 - [ ] ID-135
wrap(uint256,address,address) should be declared external:
	- [AssetWrapper.wrap(uint256,address,address)](contracts/game-assets/AssetWrapper.sol#L63-L88)

contracts/game-assets/AssetWrapper.sol#L63-L88


 - [ ] ID-136
uri(uint256) should be declared external:
	- [AssetHolder.uri(uint256)](contracts/game-assets/AssetHolder.sol#L48-L50)

contracts/game-assets/AssetHolder.sol#L48-L50


 - [ ] ID-137
transferOwnership(address) should be declared external:
	- [Ownable.transferOwnership(address)](node_modules/@openzeppelin/contracts/access/Ownable.sol#L69-L72)

node_modules/@openzeppelin/contracts/access/Ownable.sol#L69-L72


 - [ ] ID-138
balanceOfBatch(address[],uint256[]) should be declared external:
	- [AssetHolder.balanceOfBatch(address[],uint256[])](contracts/game-assets/AssetHolder.sol#L65-L81)

contracts/game-assets/AssetHolder.sol#L65-L81


 - [ ] ID-139
safeTransferFrom(address,address,uint256,uint256,bytes) should be declared external:
	- [AssetHolder.safeTransferFrom(address,address,uint256,uint256,bytes)](contracts/game-assets/AssetHolder.sol#L95-L107)

contracts/game-assets/AssetHolder.sol#L95-L107


 - [ ] ID-140
balanceOf(address) should be declared external:
	- [GameAsset.balanceOf(address)](contracts/game-assets/GameAsset.sol#L107-L110)

contracts/game-assets/GameAsset.sol#L107-L110


 - [ ] ID-141
setApprovalForAll(address,bool) should be declared external:
	- [GameAsset.setApprovalForAll(address,bool)](contracts/game-assets/GameAsset.sol#L181-L183)

contracts/game-assets/GameAsset.sol#L181-L183


 - [ ] ID-142
name() should be declared external:
	- [GameAsset.name()](contracts/game-assets/GameAsset.sol#L124-L126)

contracts/game-assets/GameAsset.sol#L124-L126


 - [ ] ID-143
renounceOwnership() should be declared external:
	- [Ownable.renounceOwnership()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L61-L63)

node_modules/@openzeppelin/contracts/access/Ownable.sol#L61-L63


 - [ ] ID-144
approve(address,uint256) should be declared external:
	- [GameAsset.approve(address,uint256)](contracts/game-assets/GameAsset.sol#L157-L167)

contracts/game-assets/GameAsset.sol#L157-L167


 - [ ] ID-145
symbol() should be declared external:
	- [GameAsset.symbol()](contracts/game-assets/GameAsset.sol#L131-L133)

contracts/game-assets/GameAsset.sol#L131-L133


 - [ ] ID-146
tokenURI(uint256) should be declared external:
	- [GameAsset.tokenURI(uint256)](contracts/game-assets/GameAsset.sol#L138-L143)

contracts/game-assets/GameAsset.sol#L138-L143


 - [ ] ID-147
safeTransferFrom(address,address,uint256) should be declared external:
	- [GameAsset.safeTransferFrom(address,address,uint256)](contracts/game-assets/GameAsset.sol#L209-L215)

contracts/game-assets/GameAsset.sol#L209-L215


 - [ ] ID-148
transferOwnership(address) should be declared external:
	- [Ownable.transferOwnership(address)](node_modules/@openzeppelin/contracts/access/Ownable.sol#L69-L72)

node_modules/@openzeppelin/contracts/access/Ownable.sol#L69-L72


 - [ ] ID-149
transferFrom(address,address,uint256) should be declared external:
	- [GameAsset.transferFrom(address,address,uint256)](contracts/game-assets/GameAsset.sol#L195-L204)

contracts/game-assets/GameAsset.sol#L195-L204


## shadowing-local
Impact: Low
Confidence: High
 - [ ] ID-150
[AssetWrapper.wrap(uint256,address,address).owner](contracts/game-assets/AssetWrapper.sol#L72) shadows:
	- [Ownable.owner()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L43-L45) (function)

contracts/game-assets/AssetWrapper.sol#L72


 - [ ] ID-151
[AssetWrapper.constructor(string).uri](contracts/game-assets/AssetWrapper.sol#L39) shadows:
	- [AssetHolder.uri(uint256)](contracts/game-assets/AssetHolder.sol#L48-L50) (function)
	- [IERC1155MetadataURI.uri(uint256)](node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol#L21) (function)

contracts/game-assets/AssetWrapper.sol#L39


 - [ ] ID-152
[GameAsset._setApprovalForAll(address,address,bool).operator](contracts/game-assets/GameAsset.sol#L414) shadows:
	- [GameAsset.operator](contracts/game-assets/GameAsset.sol#L24) (state variable)

contracts/game-assets/GameAsset.sol#L414


 - [ ] ID-153
[GameAsset.approve(address,uint256).owner](contracts/game-assets/GameAsset.sol#L158) shadows:
	- [Ownable.owner()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L43-L45) (function)

contracts/game-assets/GameAsset.sol#L158


 - [ ] ID-154
[GameAsset.ownerOf(uint256).owner](contracts/game-assets/GameAsset.sol#L116) shadows:
	- [Ownable.owner()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L43-L45) (function)

contracts/game-assets/GameAsset.sol#L116


 - [ ] ID-155
[GameAsset.balanceOf(address).owner](contracts/game-assets/GameAsset.sol#L107) shadows:
	- [Ownable.owner()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L43-L45) (function)

contracts/game-assets/GameAsset.sol#L107


 - [ ] ID-156
[GameAsset._setApprovalForAll(address,address,bool).owner](contracts/game-assets/GameAsset.sol#L413) shadows:
	- [Ownable.owner()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L43-L45) (function)

contracts/game-assets/GameAsset.sol#L413


 - [ ] ID-157
[GameAsset._isApprovedOrOwner(address,uint256).owner](contracts/game-assets/GameAsset.sol#L278) shadows:
	- [Ownable.owner()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L43-L45) (function)

contracts/game-assets/GameAsset.sol#L278


 - [ ] ID-158
[GameAsset.isApprovedForAll(address,address).operator](contracts/game-assets/GameAsset.sol#L188) shadows:
	- [GameAsset.operator](contracts/game-assets/GameAsset.sol#L24) (state variable)

contracts/game-assets/GameAsset.sol#L188


 - [ ] ID-159
[GameAsset.isApprovedForAll(address,address).owner](contracts/game-assets/GameAsset.sol#L188) shadows:
	- [Ownable.owner()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L43-L45) (function)

contracts/game-assets/GameAsset.sol#L188


 - [ ] ID-160
[GameAsset.setApprovalForAll(address,bool).operator](contracts/game-assets/GameAsset.sol#L181) shadows:
	- [GameAsset.operator](contracts/game-assets/GameAsset.sol#L24) (state variable)

contracts/game-assets/GameAsset.sol#L181


 - [ ] ID-161
[GameAsset._burn(uint256).owner](contracts/game-assets/GameAsset.sol#L349) shadows:
	- [Ownable.owner()](node_modules/@openzeppelin/contracts/access/Ownable.sol#L43-L45) (function)

contracts/game-assets/GameAsset.sol#L349


## reentrancy-events
Impact: Low
Confidence: Medium
 - [ ] ID-162
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
 - [ ] ID-163
[GameAsset.setOperator(address)._operator](contracts/game-assets/GameAsset.sol#L75) lacks a zero-check on :
		- [operator = _operator](contracts/game-assets/GameAsset.sol#L77)

contracts/game-assets/GameAsset.sol#L75


## naming-convention
Impact: Informational
Confidence: High
 - [ ] ID-164
Parameter [GameAsset.setOperator(address)._operator](contracts/game-assets/GameAsset.sol#L75) is not in mixedCase

contracts/game-assets/GameAsset.sol#L75


