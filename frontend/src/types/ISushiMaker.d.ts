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
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ISushiMakerInterface extends ethers.utils.Interface {
  functions: {
    "bar()": FunctionFragment;
    "bridgeFor(address)": FunctionFragment;
    "claimOwnership()": FunctionFragment;
    "convert(address,address)": FunctionFragment;
    "convertMultiple(address[],address[])": FunctionFragment;
    "factory()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "setBridge(address,address)": FunctionFragment;
    "transferOwnership(address,bool,bool)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "bar", values?: undefined): string;
  encodeFunctionData(functionFragment: "bridgeFor", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "convert",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "convertMultiple",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBridge",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string, boolean, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "bar", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bridgeFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "convert", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "convertMultiple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "LogBridgeSet(address,address)": EventFragment;
    "LogConvert(address,address,address,uint256,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogBridgeSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogConvert"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class ISushiMaker extends Contract {
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

  interface: ISushiMakerInterface;

  functions: {
    bar(overrides?: CallOverrides): Promise<[string]>;

    "bar()"(overrides?: CallOverrides): Promise<[string]>;

    bridgeFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<[string] & { bridge: string }>;

    "bridgeFor(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[string] & { bridge: string }>;

    claimOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    convert(
      token0: string,
      token1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "convert(address,address)"(
      token0: string,
      token1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    convertMultiple(
      token0: string[],
      token1: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "convertMultiple(address[],address[])"(
      token0: string[],
      token1: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    "factory()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<[string]>;

    setBridge(
      token: string,
      bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setBridge(address,address)"(
      token: string,
      bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bar(overrides?: CallOverrides): Promise<string>;

  "bar()"(overrides?: CallOverrides): Promise<string>;

  bridgeFor(token: string, overrides?: CallOverrides): Promise<string>;

  "bridgeFor(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<string>;

  claimOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "claimOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  convert(
    token0: string,
    token1: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "convert(address,address)"(
    token0: string,
    token1: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  convertMultiple(
    token0: string[],
    token1: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "convertMultiple(address[],address[])"(
    token0: string[],
    token1: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

  setBridge(
    token: string,
    bridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setBridge(address,address)"(
    token: string,
    bridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    direct: boolean,
    renounce: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address,bool,bool)"(
    newOwner: string,
    direct: boolean,
    renounce: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bar(overrides?: CallOverrides): Promise<string>;

    "bar()"(overrides?: CallOverrides): Promise<string>;

    bridgeFor(token: string, overrides?: CallOverrides): Promise<string>;

    "bridgeFor(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<string>;

    claimOwnership(overrides?: CallOverrides): Promise<void>;

    "claimOwnership()"(overrides?: CallOverrides): Promise<void>;

    convert(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "convert(address,address)"(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<void>;

    convertMultiple(
      token0: string[],
      token1: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "convertMultiple(address[],address[])"(
      token0: string[],
      token1: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

    setBridge(
      token: string,
      bridge: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setBridge(address,address)"(
      token: string,
      bridge: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    LogBridgeSet(
      token: string | null,
      bridge: string | null
    ): TypedEventFilter<[string, string], { token: string; bridge: string }>;

    LogConvert(
      server: string | null,
      token0: string | null,
      token1: string | null,
      amount0: null,
      amount1: null,
      amountSUSHI: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        server: string;
        token0: string;
        token1: string;
        amount0: BigNumber;
        amount1: BigNumber;
        amountSUSHI: BigNumber;
      }
    >;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    bar(overrides?: CallOverrides): Promise<BigNumber>;

    "bar()"(overrides?: CallOverrides): Promise<BigNumber>;

    bridgeFor(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "bridgeFor(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    convert(
      token0: string,
      token1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "convert(address,address)"(
      token0: string,
      token1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    convertMultiple(
      token0: string[],
      token1: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "convertMultiple(address[],address[])"(
      token0: string[],
      token1: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    setBridge(
      token: string,
      bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setBridge(address,address)"(
      token: string,
      bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bar(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "bar()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridgeFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "bridgeFor(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    convert(
      token0: string,
      token1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "convert(address,address)"(
      token0: string,
      token1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    convertMultiple(
      token0: string[],
      token1: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "convertMultiple(address[],address[])"(
      token0: string[],
      token1: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setBridge(
      token: string,
      bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setBridge(address,address)"(
      token: string,
      bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
