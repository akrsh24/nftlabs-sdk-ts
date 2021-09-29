/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ProtocolControl,
  ProtocolControlInterface,
} from "../ProtocolControl";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_provider",
        type: "address",
      },
      {
        internalType: "address",
        name: "_providerTreasury",
        type: "address",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "moduleId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "moduleType",
        type: "uint256",
      },
    ],
    name: "ModuleUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_providerTreasury",
        type: "address",
      },
    ],
    name: "OwnerTreasuryUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "providerFeeBps",
        type: "uint256",
      },
    ],
    name: "ProviderFeeBpsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_providerTreasury",
        type: "address",
      },
    ],
    name: "ProviderTreasuryUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isPaused",
        type: "bool",
      },
    ],
    name: "SystemPaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "moduleId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "moduleAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "restriction",
        type: "bool",
      },
    ],
    name: "TransferRestricted",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_BPS",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_PROVIDER_FEE_BPS",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROTOCOL_ADMIN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROTOCOL_PROVIDER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newModuleAddress",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_moduleType",
        type: "uint8",
      },
    ],
    name: "addModule",
    outputs: [
      {
        internalType: "bytes32",
        name: "moduleId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_moduleType",
        type: "uint256",
      },
    ],
    name: "getAllModulesOfType",
    outputs: [
      {
        internalType: "address[]",
        name: "allModules",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "moduleIds",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "moduleType",
    outputs: [
      {
        internalType: "enum ProtocolControl.ModuleType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "modules",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "numOfModuleType",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerTreasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_toPause",
        type: "bool",
      },
    ],
    name: "pauseProtocol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "providerFeeBps",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "providerTreasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_URI",
        type: "string",
      },
    ],
    name: "setContractURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "systemPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferProtocolFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_moduleId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_newModuleAddress",
        type: "address",
      },
    ],
    name: "updateModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newTreasury",
        type: "address",
      },
    ],
    name: "updateOwnerTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "_newFeeBps",
        type: "uint128",
      },
    ],
    name: "updateProviderFeeBps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newTreasury",
        type: "address",
      },
    ],
    name: "updateProviderTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080604052600780546001600160801b0319166101f41790553480156200002557600080fd5b50604051620020a6380380620020a6833981016040819052620000489162000376565b80516200005d906008906020840190620002b8565b5060018054610100600160a81b0319166101006001600160a01b038581169190910291909117909155600280546001600160a01b031916918616919091179055620000b8600080516020620020868339815191528562000184565b620000d3600080516020620020668339815191528462000184565b620000ee600080516020620020868339815191528062000194565b62000109600080516020620020668339815191528062000194565b7fb825ab4f81e4900f8508fcfa9b52c04f19a7bcf5ecc6b19d902fcde1fda9c214846040516200013a91906200047e565b60405180910390a17e2db23efd8339ec0c6d1e7fe86528420c0a007b4f33268e7b90f75b3a17b778836040516200017291906200047e565b60405180910390a150505050620004e5565b620001908282620001e9565b5050565b6000620001a18362000273565b600084815260208190526040808220600101859055519192508391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b620001f582826200028b565b62000190576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556200022f620002b4565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000818152602081905260409020600101545b919050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b3390565b828054620002c69062000492565b90600052602060002090601f016020900481019282620002ea576000855562000335565b82601f106200030557805160ff191683800117855562000335565b8280016001018555821562000335579182015b828111156200033557825182559160200191906001019062000318565b506200034392915062000347565b5090565b5b8082111562000343576000815560010162000348565b80516001600160a01b03811681146200028657600080fd5b600080600080608085870312156200038c578384fd5b62000397856200035e565b93506020620003a88187016200035e565b9350620003b8604087016200035e565b60608701519093506001600160401b0380821115620003d5578384fd5b818801915088601f830112620003e9578384fd5b815181811115620003fe57620003fe620004cf565b604051601f8201601f1916810185018381118282101715620004245762000424620004cf565b60405281815283820185018b10156200043b578586fd5b8592505b818310156200045e57838301850151818401860152918401916200043f565b818311156200046f57858583830101525b979a9699509497505050505050565b6001600160a01b0391909116815260200190565b600281046001821680620004a757607f821691505b60208210811415620004c957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611b7180620004f56000396000f3fe6080604052600436106101d15760003560e01c806394658d7e116100f7578063b0b6cc1a11610095578063e8a3d48511610064578063e8a3d48514610520578063ef2933ec14610535578063f7032e6514610555578063fd967f4714610575576101d8565b8063b0b6cc1a1461049e578063c097b1fb146104be578063c0e72740146104de578063d547741f14610500576101d8565b80639d2f83f0116100d15780639d2f83f014610427578063a217fddf1461043c578063a8a1044214610451578063aca8417514610471576101d8565b806394658d7e146103e857806398990a0e146103fd57806399c04d3b14610412576101d8565b806340f182c51161016f5780637cdca11c1161013e5780637cdca11c146103685780638a131d5d1461038857806391d14854146103a8578063938e3d7b146103c8576101d8565b806340f182c5146102f157806357a91814146103115780635cd42315146103265780636e05e41d14610348576101d8565b806328aa9b40116101ab57806328aa9b40146102625780632f2ff15d1461028f57806336568abe146102b15780633fff7bf8146102d1576101d8565b806301ffc9a7146101dd5780630f603ed314610213578063248a9ca314610235576101d8565b366101d857005b600080fd5b3480156101e957600080fd5b506101fd6101f83660046115a0565b61058a565b60405161020a9190611795565b60405180910390f35b34801561021f57600080fd5b506102286105b7565b60405161020a91906116f7565b34801561024157600080fd5b5061025561025036600461155d565b6105c6565b60405161020a91906117a0565b34801561026e57600080fd5b5061028261027d36600461155d565b6105db565b60405161020a91906117a9565b34801561029b57600080fd5b506102af6102aa366004611575565b6105f0565b005b3480156102bd57600080fd5b506102af6102cc366004611575565b610619565b3480156102dd57600080fd5b506102556102ec36600461155d565b610668565b3480156102fd57600080fd5b5061025561030c3660046114ea565b61067a565b34801561031d57600080fd5b506102556107a4565b34801561033257600080fd5b5061033b6107c8565b60405161020a9190611a67565b34801561035457600080fd5b50610255610363366004611495565b6107ce565b34801561037457600080fd5b506102af610383366004611495565b6107e0565b34801561039457600080fd5b506102af6103a3366004611495565b610897565b3480156103b457600080fd5b506101fd6103c3366004611575565b610935565b3480156103d457600080fd5b506102af6103e33660046115c8565b61095e565b3480156103f457600080fd5b506102556109b0565b34801561040957600080fd5b506102286109d4565b34801561041e57600080fd5b5061033b6109e8565b34801561043357600080fd5b506101fd610a00565b34801561044857600080fd5b50610255610a09565b34801561045d57600080fd5b506102af61046c3660046114af565b610a0e565b34801561047d57600080fd5b5061049161048c36600461155d565b610ba9565b60405161020a9190611748565b3480156104aa57600080fd5b506102286104b936600461155d565b610cb4565b3480156104ca57600080fd5b506102af6104d9366004611575565b610ccf565b3480156104ea57600080fd5b506104f3610df6565b60405161020a91906117d1565b34801561050c57600080fd5b506102af61051b366004611575565b610e84565b34801561052c57600080fd5b506104f3610ea3565b34801561054157600080fd5b506102af610550366004611525565b610f35565b34801561056157600080fd5b506102af610570366004611635565b610fb9565b34801561058157600080fd5b5061033b611090565b60006001600160e01b03198216637965db0b60e01b14806105af57506105af82611096565b90505b919050565b6002546001600160a01b031681565b60009081526020819052604090206001015490565b60046020526000908152604090205460ff1681565b6105f9826105c6565b61060a816106056110af565b6110b3565b6106148383611117565b505050565b6106216110af565b6001600160a01b0316816001600160a01b03161461065a5760405162461bcd60e51b815260040161065190611a0a565b60405180910390fd5b610664828261119c565b5050565b60066020526000908152604090205481565b60006106a67f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c133610935565b6106c25760405162461bcd60e51b8152600401610651906118f3565b60ff82166000818152600660209081526040918290205491516106e69391016116e9565b6040516020818303038152906040528051906020012090506001600660008460ff16815260200190815260200160002060008282546107259190611a84565b90915550506000818152600360209081526040808320805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03881690811790915580845260059092528083208490555160ff85169284917f1d3dc09176e587732ef26b4edb7961028f2e33cce7ad22d62f07e6a5e26d8e649190a492915050565b7ff20dc52d9f915492d8534c2045a2e74047b4a9fcc12dbd73812d6a9a24a6da4181565b6103e881565b60056020526000908152604090205481565b61080a7ff20dc52d9f915492d8534c2045a2e74047b4a9fcc12dbd73812d6a9a24a6da4133610935565b6108265760405162461bcd60e51b815260040161065190611896565b600180547fffffffffffffffffffffff0000000000000000000000000000000000000000ff166101006001600160a01b038416021790556040517e2db23efd8339ec0c6d1e7fe86528420c0a007b4f33268e7b90f75b3a17b7789061088c9083906116f7565b60405180910390a150565b6108c17f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c133610935565b6108dd5760405162461bcd60e51b8152600401610651906118f3565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383161790556040517fb825ab4f81e4900f8508fcfa9b52c04f19a7bcf5ecc6b19d902fcde1fda9c2149061088c9083906116f7565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6109887f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c133610935565b6109a45760405162461bcd60e51b8152600401610651906118f3565b610614600883836113e5565b7f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c181565b60015461010090046001600160a01b031681565b6007546fffffffffffffffffffffffffffffffff1681565b60015460ff1681565b600081565b610a387f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c133610935565b610a545760405162461bcd60e51b8152600401610651906118f3565b60006001600160a01b038416610ac857826001600160a01b031682604051610a7b90611665565b60006040518083038185875af1925050503d8060008114610ab8576040519150601f19603f3d011682016040523d82523d6000602084013e610abd565b606091505b505080915050610b4b565b60405163a9059cbb60e01b81526001600160a01b0385169063a9059cbb90610af6908690869060040161172f565b602060405180830381600087803b158015610b1057600080fd5b505af1158015610b24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b489190611541565b90505b80610b685760405162461bcd60e51b8152600401610651906119ad565b7f78e6250172d8e0a57d8d41f480f13581571a2d27bb2a93f5f7bd2511f5c22a6c848484604051610b9b9392919061170b565b60405180910390a150505050565b6000818152600660205260409020546060908067ffffffffffffffff811115610be257634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610c0b578160200160208202803683370190505b50915060005b81811015610cad5760008185604051602001610c2e9291906116e9565b60408051601f1981840301815291815281516020928301206000818152600390935291205485519192506001600160a01b031690859084908110610c8257634e487b7160e01b600052603260045260246000fd5b6001600160a01b039092166020928302919091019091015250610ca6600182611a84565b9050610c11565b5050919050565b6003602052600090815260409020546001600160a01b031681565b610cf97f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c133610935565b610d155760405162461bcd60e51b8152600401610651906118f3565b6000828152600360205260409020546001600160a01b0316610d495760405162461bcd60e51b815260040161065190611950565b6000828152600360209081526040808320805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038616908117909155835260058252808320859055848352600490915290205460ff166007811115610dbc57634e487b7160e01b600052602160045260246000fd5b6040516001600160a01b0383169084907f1d3dc09176e587732ef26b4edb7961028f2e33cce7ad22d62f07e6a5e26d8e6490600090a45050565b60088054610e0390611b02565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2f90611b02565b8015610e7c5780601f10610e5157610100808354040283529160200191610e7c565b820191906000526020600020905b815481529060010190602001808311610e5f57829003601f168201915b505050505081565b610e8d826105c6565b610e99816106056110af565b610614838361119c565b606060088054610eb290611b02565b80601f0160208091040260200160405190810160405280929190818152602001828054610ede90611b02565b8015610f2b5780601f10610f0057610100808354040283529160200191610f2b565b820191906000526020600020905b815481529060010190602001808311610f0e57829003601f168201915b5050505050905090565b610f5f7f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c133610935565b610f7b5760405162461bcd60e51b8152600401610651906118f3565b6001805460ff19168215151790556040517f59617e84cd4a4d47c34c76f190da73d3a6a0236e0770dcba41851db53f336f579061088c908390611795565b610fe37ff20dc52d9f915492d8534c2045a2e74047b4a9fcc12dbd73812d6a9a24a6da4133610935565b610fff5760405162461bcd60e51b815260040161065190611896565b6103e86fffffffffffffffffffffffffffffffff821611156110335760405162461bcd60e51b815260040161065190611839565b600780546fffffffffffffffffffffffffffffffff19166fffffffffffffffffffffffffffffffff83161790556040517f6777126e1a64b3a9a031086219e1670bb7c131b028d08a9b037899f452b6513b9061088c908390611a67565b61271081565b6001600160e01b031981166301ffc9a760e01b14919050565b3390565b6110bd8282610935565b610664576110d5816001600160a01b0316601461121f565b6110e083602061121f565b6040516020016110f1929190611668565b60408051601f198184030181529082905262461bcd60e51b8252610651916004016117d1565b6111218282610935565b610664576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556111586110af565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6111a68282610935565b15610664576000828152602081815260408083206001600160a01b03851684529091529020805460ff191690556111db6110af565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6060600061122e836002611a9c565b611239906002611a84565b67ffffffffffffffff81111561125f57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611289576020820181803683370190505b509050600360fc1b816000815181106112b257634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106112ef57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000611313846002611a9c565b61131e906001611a84565b90505b60018111156113bf577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061136d57634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061139157634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c936113b881611aeb565b9050611321565b5083156113de5760405162461bcd60e51b815260040161065190611804565b9392505050565b8280546113f190611b02565b90600052602060002090601f0160209004810192826114135760008555611459565b82601f1061142c5782800160ff19823516178555611459565b82800160010185558215611459579182015b8281111561145957823582559160200191906001019061143e565b50611465929150611469565b5090565b5b80821115611465576000815560010161146a565b80356001600160a01b03811681146105b257600080fd5b6000602082840312156114a6578081fd5b6113de8261147e565b6000806000606084860312156114c3578182fd5b6114cc8461147e565b92506114da6020850161147e565b9150604084013590509250925092565b600080604083850312156114fc578182fd5b6115058361147e565b9150602083013560ff8116811461151a578182fd5b809150509250929050565b600060208284031215611536578081fd5b81356113de81611b53565b600060208284031215611552578081fd5b81516113de81611b53565b60006020828403121561156e578081fd5b5035919050565b60008060408385031215611587578182fd5b823591506115976020840161147e565b90509250929050565b6000602082840312156115b1578081fd5b81356001600160e01b0319811681146113de578182fd5b600080602083850312156115da578182fd5b823567ffffffffffffffff808211156115f1578384fd5b818501915085601f830112611604578384fd5b813581811115611612578485fd5b866020828501011115611623578485fd5b60209290920196919550909350505050565b600060208284031215611646578081fd5b81356fffffffffffffffffffffffffffffffff811681146113de578182fd5b90565b60007f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000825283516116a0816017850160208801611abb565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516116dd816028840160208801611abb565b01602801949350505050565b918252602082015260400190565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6020808252825182820181905260009190848201906040850190845b818110156117895783516001600160a01b031683529284019291840191600101611764565b50909695505050505050565b901515815260200190565b90815260200190565b60208101600883106117cb57634e487b7160e01b600052602160045260246000fd5b91905290565b60006020825282518060208401526117f0816040850160208701611abb565b601f01601f19169190910160400192915050565b6020808252818101527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604082015260600190565b60208082526038908201527f50726f746f636f6c436f6e74726f6c3a2070726f76696465722066656520636160408201527f6e6e6f742062652067726561746572207468616e203130250000000000000000606082015260800190565b6020808252603f908201527f50726f746f636f6c3a204f6e6c792070726f746f636f6c2070726f766964657260408201527f2061646d696e732063616e2063616c6c20746869732066756e6374696f6e2e00606082015260800190565b60208082526036908201527f50726f746f636f6c3a204f6e6c792070726f746f636f6c2061646d696e73206360408201527f616e2063616c6c20746869732066756e6374696f6e2e00000000000000000000606082015260800190565b60208082526036908201527f50726f746f636f6c436f6e74726f6c3a2061206d6f64756c652077697468207460408201527f68697320494420646f6573206e6f742065786973742e00000000000000000000606082015260800190565b60208082526034908201527f50726f746f636f6c20436f6e74726f6c3a206661696c656420746f207472616e60408201527f736665722070726f746f636f6c2066756e64732e000000000000000000000000606082015260800190565b6020808252602f908201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560408201527f20726f6c657320666f722073656c660000000000000000000000000000000000606082015260800190565b6fffffffffffffffffffffffffffffffff91909116815260200190565b60008219821115611a9757611a97611b3d565b500190565b6000816000190483118215151615611ab657611ab6611b3d565b500290565b60005b83811015611ad6578181015183820152602001611abe565b83811115611ae5576000848401525b50505050565b600081611afa57611afa611b3d565b506000190190565b600281046001821680611b1657607f821691505b60208210811415611b3757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8015158114611b6157600080fd5b5056fea164736f6c6343000800000af20dc52d9f915492d8534c2045a2e74047b4a9fcc12dbd73812d6a9a24a6da410245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c1";

export class ProtocolControl__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _admin: string,
    _provider: string,
    _providerTreasury: string,
    _uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ProtocolControl> {
    return super.deploy(
      _admin,
      _provider,
      _providerTreasury,
      _uri,
      overrides || {}
    ) as Promise<ProtocolControl>;
  }
  getDeployTransaction(
    _admin: string,
    _provider: string,
    _providerTreasury: string,
    _uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _admin,
      _provider,
      _providerTreasury,
      _uri,
      overrides || {}
    );
  }
  attach(address: string): ProtocolControl {
    return super.attach(address) as ProtocolControl;
  }
  connect(signer: Signer): ProtocolControl__factory {
    return super.connect(signer) as ProtocolControl__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProtocolControlInterface {
    return new utils.Interface(_abi) as ProtocolControlInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProtocolControl {
    return new Contract(address, _abi, signerOrProvider) as ProtocolControl;
  }
}
