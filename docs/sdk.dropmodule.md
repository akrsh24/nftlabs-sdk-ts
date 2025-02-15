<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [DropModule](./sdk.dropmodule.md)

## DropModule class

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Access this module by calling [ThirdwebSDK.getDropModule()](./sdk.thirdwebsdk.getdropmodule.md)

<b>Signature:</b>

```typescript
export declare class DropModule extends ModuleWithRoles<DropV2> implements ITransferable 
```
<b>Extends:</b> [ModuleWithRoles](./sdk.modulewithroles.md)<!-- -->&lt;DropV2&gt;

<b>Implements:</b> [ITransferable](./sdk.itransferable.md)

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `DropModule` class.

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [moduleType](./sdk.dropmodule.moduletype.md) | <code>static</code> | [ModuleType](./sdk.moduletype.md) | <b><i>(BETA)</i></b> |
|  [roles](./sdk.dropmodule.roles.md) | <code>static</code> | readonly \["admin", "minter", "transfer"\] | <b><i>(BETA)</i></b> |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [balance()](./sdk.dropmodule.balance.md) |  | <b><i>(BETA)</i></b> |
|  [balanceOf(address)](./sdk.dropmodule.balanceof.md) |  | <b><i>(BETA)</i></b> |
|  [burn(tokenId)](./sdk.dropmodule.burn.md) |  | <b><i>(BETA)</i></b> |
|  [canClaim(quantity, addressToCheck)](./sdk.dropmodule.canclaim.md) |  | <b><i>(BETA)</i></b> - Parameters interface may change, proofs parameter is ignored. |
|  [claim(quantity, proofs)](./sdk.dropmodule.claim.md) |  | <b><i>(BETA)</i></b> Claim a token for yourself |
|  [claimTo(quantity, addressToClaim, proofs)](./sdk.dropmodule.claimto.md) |  | <b><i>(BETA)</i></b> Claim a token and send it to someone else |
|  [createBatch(metadatas)](./sdk.dropmodule.createbatch.md) |  | <b><i>(BETA)</i></b> Create batch allows you to create a batch of tokens in one transaction. This function can only be called once per module at the moment. |
|  [get(tokenId)](./sdk.dropmodule.get.md) |  | <b><i>(BETA)</i></b> |
|  [getActiveClaimCondition()](./sdk.dropmodule.getactiveclaimcondition.md) |  | <b><i>(BETA)</i></b> |
|  [getActiveMintCondition()](./sdk.dropmodule.getactivemintcondition.md) |  | <b><i>(BETA)</i></b> |
|  [getAll(queryParams)](./sdk.dropmodule.getall.md) |  | <b><i>(BETA)</i></b> |
|  [getAllClaimConditions()](./sdk.dropmodule.getallclaimconditions.md) |  | <b><i>(BETA)</i></b> |
|  [getAllClaimed(queryParams)](./sdk.dropmodule.getallclaimed.md) |  | <b><i>(BETA)</i></b> |
|  [getAllMintConditions()](./sdk.dropmodule.getallmintconditions.md) |  | <b><i>(BETA)</i></b> |
|  [getAllUnclaimed(queryParams)](./sdk.dropmodule.getallunclaimed.md) |  | <b><i>(BETA)</i></b> |
|  [getClaimConditionsFactory()](./sdk.dropmodule.getclaimconditionsfactory.md) |  | <b><i>(BETA)</i></b> Creates a claim condition factory |
|  [getClaimIneligibilityReasons(quantity, addressToCheck)](./sdk.dropmodule.getclaimineligibilityreasons.md) |  | <b><i>(BETA)</i></b> For any claim conditions that a particular wallet is violating, this function returns human readable information about the breaks in the condition that can be used to inform the user. |
|  [getDefaultSaleRecipient()](./sdk.dropmodule.getdefaultsalerecipient.md) |  | <b><i>(BETA)</i></b> |
|  [getMintConditionsFactory()](./sdk.dropmodule.getmintconditionsfactory.md) |  | <b><i>(BETA)</i></b> |
|  [getOwned(\_address)](./sdk.dropmodule.getowned.md) |  | <b><i>(BETA)</i></b> |
|  [getRoyaltyBps()](./sdk.dropmodule.getroyaltybps.md) |  | <b><i>(BETA)</i></b> Gets the royalty BPS (basis points) of the contract |
|  [getRoyaltyRecipientAddress()](./sdk.dropmodule.getroyaltyrecipientaddress.md) |  | <b><i>(BETA)</i></b> Gets the address of the royalty recipient |
|  [isApproved(address, operator)](./sdk.dropmodule.isapproved.md) |  | <b><i>(BETA)</i></b> |
|  [isTransferRestricted()](./sdk.dropmodule.istransferrestricted.md) |  | <b><i>(BETA)</i></b> |
|  [isV1()](./sdk.dropmodule.isv1.md) |  | <b><i>(BETA)</i></b> Check if contract is v1 or v2. If the contract doesn't have nextTokenIdToMint = v1 contract. |
|  [lazyMint(metadata)](./sdk.dropmodule.lazymint.md) |  | <b><i>(BETA)</i></b> |
|  [lazyMintBatch(metadatas)](./sdk.dropmodule.lazymintbatch.md) |  | <b><i>(BETA)</i></b> |
|  [ownerOf(tokenId)](./sdk.dropmodule.ownerof.md) |  | <b><i>(BETA)</i></b> |
|  [setApproval(operator, approved)](./sdk.dropmodule.setapproval.md) |  | <b><i>(BETA)</i></b> |
|  [setClaimConditions(factory)](./sdk.dropmodule.setclaimconditions.md) |  | <b><i>(BETA)</i></b> Sets public mint conditions for the next minting using the claim condition factory. |
|  [setDefaultSaleRecipient(recipient)](./sdk.dropmodule.setdefaultsalerecipient.md) |  | <b><i>(BETA)</i></b> |
|  [setMintConditions(factory)](./sdk.dropmodule.setmintconditions.md) |  | <b><i>(BETA)</i></b> |
|  [setModuleMetadata(metadata)](./sdk.dropmodule.setmodulemetadata.md) |  | <b><i>(BETA)</i></b> |
|  [setPublicMintConditions(conditions)](./sdk.dropmodule.setpublicmintconditions.md) |  | <b><i>(BETA)</i></b> |
|  [setRestrictedTransfer(restricted)](./sdk.dropmodule.setrestrictedtransfer.md) |  | <b><i>(BETA)</i></b> |
|  [setRoyaltyBps(amount)](./sdk.dropmodule.setroyaltybps.md) |  | <b><i>(BETA)</i></b> |
|  [totalClaimedSupply()](./sdk.dropmodule.totalclaimedsupply.md) |  | <b><i>(BETA)</i></b> |
|  [totalSupply()](./sdk.dropmodule.totalsupply.md) |  | <b><i>(BETA)</i></b> |
|  [totalUnclaimedSupply()](./sdk.dropmodule.totalunclaimedsupply.md) |  | <b><i>(BETA)</i></b> |
|  [transfer(to, tokenId)](./sdk.dropmodule.transfer.md) |  | <b><i>(BETA)</i></b> |
|  [transferFrom(from, to, tokenId)](./sdk.dropmodule.transferfrom.md) |  | <b><i>(BETA)</i></b> |
|  [updateClaimConditions(factory)](./sdk.dropmodule.updateclaimconditions.md) |  | <b><i>(BETA)</i></b> |

