/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface RegistryInterface extends ethers.utils.Interface {
  functions: {
    "controlCenters(address)": FunctionFragment;
    "deployProtocol(string)": FunctionFragment;
    "forwarder()": FunctionFragment;
    "getLatestVersion(address)": FunctionFragment;
    "getProtocolControl(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "providerAdmin()": FunctionFragment;
    "providerTreasury()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setProviderAdmin(address)": FunctionFragment;
    "setProviderTreasury(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "controlCenters",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deployProtocol",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "forwarder", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getLatestVersion",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getProtocolControl",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "providerAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "providerTreasury",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setProviderAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setProviderTreasury",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "controlCenters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployProtocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "forwarder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLatestVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProtocolControl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "providerAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "providerTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProviderAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProviderTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "DeployedForwarder(address)": EventFragment;
    "DeployedProtocol(address,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "UpdatedProviderAdmin(address,address)": EventFragment;
    "UpdatedProviderTreasury(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeployedForwarder"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DeployedProtocol"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatedProviderAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatedProviderTreasury"): EventFragment;
}

export type DeployedForwarderEvent = TypedEvent<
  [string] & { forwarder: string }
>;

export type DeployedProtocolEvent = TypedEvent<
  [string, string, BigNumber] & {
    deployer: string;
    protocolControl: string;
    version: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type UpdatedProviderAdminEvent = TypedEvent<
  [string, string] & { prevAdmin: string; newAdmin: string }
>;

export type UpdatedProviderTreasuryEvent = TypedEvent<
  [string, string] & { prevTreasury: string; newTreasury: string }
>;

export class Registry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: RegistryInterface;

  functions: {
    controlCenters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { latestVersion: BigNumber }>;

    deployProtocol(
      _protocolControlURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    forwarder(overrides?: CallOverrides): Promise<[string]>;

    getLatestVersion(
      _protocolDeployer: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getProtocolControl(
      _protocolDeployer: string,
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    providerAdmin(overrides?: CallOverrides): Promise<[string]>;

    providerTreasury(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProviderAdmin(
      _newAdminSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProviderTreasury(
      _newTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  controlCenters(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  deployProtocol(
    _protocolControlURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  forwarder(overrides?: CallOverrides): Promise<string>;

  getLatestVersion(
    _protocolDeployer: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getProtocolControl(
    _protocolDeployer: string,
    _version: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  providerAdmin(overrides?: CallOverrides): Promise<string>;

  providerTreasury(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProviderAdmin(
    _newAdminSigner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProviderTreasury(
    _newTreasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    controlCenters(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    deployProtocol(
      _protocolControlURI: string,
      overrides?: CallOverrides
    ): Promise<void>;

    forwarder(overrides?: CallOverrides): Promise<string>;

    getLatestVersion(
      _protocolDeployer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProtocolControl(
      _protocolDeployer: string,
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    providerAdmin(overrides?: CallOverrides): Promise<string>;

    providerTreasury(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setProviderAdmin(
      _newAdminSigner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setProviderTreasury(
      _newTreasury: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DeployedForwarder(address)"(
      forwarder?: null
    ): TypedEventFilter<[string], { forwarder: string }>;

    DeployedForwarder(
      forwarder?: null
    ): TypedEventFilter<[string], { forwarder: string }>;

    "DeployedProtocol(address,address,uint256)"(
      deployer?: string | null,
      protocolControl?: string | null,
      version?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { deployer: string; protocolControl: string; version: BigNumber }
    >;

    DeployedProtocol(
      deployer?: string | null,
      protocolControl?: string | null,
      version?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { deployer: string; protocolControl: string; version: BigNumber }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "UpdatedProviderAdmin(address,address)"(
      prevAdmin?: null,
      newAdmin?: null
    ): TypedEventFilter<
      [string, string],
      { prevAdmin: string; newAdmin: string }
    >;

    UpdatedProviderAdmin(
      prevAdmin?: null,
      newAdmin?: null
    ): TypedEventFilter<
      [string, string],
      { prevAdmin: string; newAdmin: string }
    >;

    "UpdatedProviderTreasury(address,address)"(
      prevTreasury?: null,
      newTreasury?: null
    ): TypedEventFilter<
      [string, string],
      { prevTreasury: string; newTreasury: string }
    >;

    UpdatedProviderTreasury(
      prevTreasury?: null,
      newTreasury?: null
    ): TypedEventFilter<
      [string, string],
      { prevTreasury: string; newTreasury: string }
    >;
  };

  estimateGas: {
    controlCenters(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    deployProtocol(
      _protocolControlURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    forwarder(overrides?: CallOverrides): Promise<BigNumber>;

    getLatestVersion(
      _protocolDeployer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProtocolControl(
      _protocolDeployer: string,
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    providerAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    providerTreasury(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProviderAdmin(
      _newAdminSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProviderTreasury(
      _newTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    controlCenters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deployProtocol(
      _protocolControlURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    forwarder(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLatestVersion(
      _protocolDeployer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProtocolControl(
      _protocolDeployer: string,
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    providerAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    providerTreasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProviderAdmin(
      _newAdminSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProviderTreasury(
      _newTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
