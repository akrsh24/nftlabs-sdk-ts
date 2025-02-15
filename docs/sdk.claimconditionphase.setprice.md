<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [ClaimConditionPhase](./sdk.claimconditionphase.md) &gt; [setPrice](./sdk.claimconditionphase.setprice.md)

## ClaimConditionPhase.setPrice() method

Set the price claim condition for the drop.

<b>Signature:</b>

```typescript
setPrice(price: BigNumberish, tokenAddress?: string): ClaimConditionPhase;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  price | BigNumberish | The price of the currency in wei. Must be &gt;<!-- -->= 0. |
|  tokenAddress | string | The address of an ERC20 contract to use as the currency for the claim. By default this is the native currency address which is 0x0000000000000000000000000000000000000000 address. |

<b>Returns:</b>

ClaimConditionPhase

