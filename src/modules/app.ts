import {
  Coin__factory,
  DataStore__factory,
  ERC20__factory,
  LazyMintERC1155__factory,
  LazyMintERC721__factory,
  Market__factory,
  NFTCollection__factory,
  NFT__factory,
  Pack__factory,
  ProtocolControl,
  ProtocolControl__factory,
  Royalty__factory,
  VotingGovernor__factory,
} from "@3rdweb/contracts";
import { AddressZero } from "@ethersproject/constants";
import { TransactionReceipt } from "@ethersproject/providers";
import { BigNumber, ethers, Signer } from "ethers";
import { isAddress } from "ethers/lib/utils";
import { JsonConvert } from "json2typescript";
import {
  ChainlinkVrf,
  CurrencyValue,
  getCurrencyValue,
  isNativeToken,
  Role,
  RolesMap,
} from "../common";
import { getNativeTokenByChainId } from "../common/currency";
import { SUPPORTED_CHAIN_ID } from "../common/chain";
import { getContractMetadata } from "../common/contract";
import { invariant } from "../common/invariant";
import { ModuleType } from "../common/module-type";
import { ModuleWithRoles } from "../core/module";
import { MetadataURIOrObject } from "../core/types";
import IAppModule from "../interfaces/IAppModule";
import FileOrBuffer from "../types/FileOrBuffer";
import BundleDropModuleMetadata from "../types/module-deployments/BundleDropModuleMetadata";
import BundleModuleMetadata from "../types/module-deployments/BundleModuleMetadata";
import CommonModuleMetadata from "../types/module-deployments/CommonModuleMetadata";
import CurrencyModuleMetadata from "../types/module-deployments/CurrencyModuleMetadata";
import DatastoreModuleMetadata from "../types/module-deployments/DatastoreModuleMetadata";
import DropModuleMetadata from "../types/module-deployments/DropModuleMetadata";
import MarketModuleMetadata from "../types/module-deployments/MarketModuleMetadata";
import NftModuleMetadata from "../types/module-deployments/NftModuleMetadata";
import PackModuleMetadata from "../types/module-deployments/PackModuleMetadata";
import SplitsModuleMetadata from "../types/module-deployments/SplitsModuleMetadata";
import TokenModuleMetadata from "../types/module-deployments/TokenModuleMetadata";
import VoteModuleMetadata from "../types/module-deployments/VoteModuleMetadata";
import { ModuleMetadata, ModuleMetadataNoType } from "../types/ModuleMetadata";
import { DEFAULT_BLOCK_TIMES_FALLBACK } from "../utils/blockTimeEstimator";
import { BundleDropModule } from "./bundleDrop";
import { CollectionModule } from "./collection";
import { DatastoreModule } from "./datastore";
import { DropModule } from "./drop";
import { MarketModule } from "./market";
import { NFTModule } from "./nft";
import { PackModule } from "./pack";
import { SplitsModule } from "./royalty";
import { CurrencyModule, TokenModule } from "./token";
import { VoteModule } from "./vote";

/**
 * Access this module by calling {@link ThirdwebSDK.getAppModule}
 * @public
 */
export class AppModule
  extends ModuleWithRoles<ProtocolControl>
  implements IAppModule
{
  private jsonConvert = new JsonConvert();

  public static roles = [RolesMap.admin] as const;

  /**
   * @override
   * @internal
   */
  protected getModuleRoles(): readonly Role[] {
    return CurrencyModule.roles;
  }

  /**
   * The internal module type for the app module.
   * We do not treat it as a fully fledged module on the contract level, so it does not have a real type.
   * @internal
   * @readonly
   */
  private moduleType: ModuleType = -1;

  /**
   * @internal
   */
  protected connectContract(): ProtocolControl {
    return ProtocolControl__factory.connect(
      this.address,
      this.providerOrSigner,
    );
  }

  /**
   * @internal
   */
  protected getModuleType(): ModuleType {
    return this.moduleType;
  }

  /**
   * @internal
   *
   */
  private async getModuleAddress(moduleType: ModuleType): Promise<string[]> {
    return await this.readOnlyContract.getAllModulesOfType(moduleType);
  }

  private async getNFTAddress(): Promise<string[]> {
    return this.getModuleAddress(ModuleType.NFT);
  }

  private async getBundleAddress(): Promise<string[]> {
    return this.getModuleAddress(ModuleType.BUNDLE);
  }

  private async getPackAddress(): Promise<string[]> {
    return this.getModuleAddress(ModuleType.PACK);
  }

  private async getCurrencyAddress(): Promise<string[]> {
    return this.getModuleAddress(ModuleType.CURRENCY);
  }

  private async getMarketAddress(): Promise<string[]> {
    return this.getModuleAddress(ModuleType.MARKET);
  }

  private async getDropAddress(): Promise<string[]> {
    return this.getModuleAddress(ModuleType.DROP);
  }

  private async getDatastoreAddress(): Promise<string[]> {
    return this.getModuleAddress(ModuleType.DATASTORE);
  }

  public async getRoyaltyTreasury(address?: string): Promise<string> {
    return await this.readOnlyContract.getRoyaltyTreasury(
      address || AddressZero,
    );
  }

  /**
   * @internal
   * @param addresses - The addresses of the modules to get metadata for.
   */
  public async getAllContractMetadata(
    addresses: string[],
  ): Promise<ModuleMetadataNoType[]> {
    const metadatas = await Promise.all(
      addresses.map((address) =>
        getContractMetadata(
          this.providerOrSigner,
          address,
          this.ipfsGatewayUrl,
          true,
        ),
      ),
    );
    return addresses
      .filter((d) => d)
      .map((address, i) => {
        return {
          address,
          metadata: metadatas[i],
        };
      });
  }

  /**
   * Method to get a list of pack module metadata.
   * @returns A promise of an array of Pack modules.
   * @deprecated - Use {@link AppModule.getAllModuleMetadata} instead
   */
  public async getPackModules(): Promise<ModuleMetadata[]> {
    return (await this.getAllContractMetadata(await this.getPackAddress())).map(
      (m) => ({
        ...m,
        type: ModuleType.PACK,
      }),
    );
  }

  /**
   * Method to get a list of NFT module metadata.
   * @returns A promise of an array of NFT modules.
   * @deprecated - Use {@link AppModule.getAllModuleMetadata} instead
   */
  public async getNFTModules(): Promise<ModuleMetadata[]> {
    return (await this.getAllContractMetadata(await this.getNFTAddress())).map(
      (m) => ({
        ...m,
        type: ModuleType.NFT,
      }),
    );
  }

  /**
   * Method to get a list of Bundle module metadata.
   * @returns A promise of an array of Bundle modules.
   * @deprecated - Use {@link AppModule.getAllModuleMetadata} instead
   */
  public async getCollectionModules(): Promise<ModuleMetadata[]> {
    return await this.getBundleModules();
  }

  public async getBundleModules(): Promise<ModuleMetadata[]> {
    return (
      await this.getAllContractMetadata(await this.getBundleAddress())
    ).map((m) => ({
      ...m,
      type: ModuleType.BUNDLE,
    }));
  }

  /**
   * Method to get a list of Currency module metadata.
   * @returns A promise of an array of Currency modules.
   * @deprecated - Use {@link AppModule.getAllModuleMetadata} instead
   */
  public async getCurrencyModules(): Promise<ModuleMetadata[]> {
    return (
      await this.getAllContractMetadata(await this.getCurrencyAddress())
    ).map((m) => ({
      ...m,
      type: ModuleType.CURRENCY,
    }));
  }

  /**
   * Method to get a list of Datastore module metadata.
   * @alpha
   * @returns A promise of an array of Datastore modules.
   * @deprecated - Use {@link AppModule.getAllModuleMetadata} instead
   */
  public async getDatastoreModules(): Promise<ModuleMetadata[]> {
    return (
      await this.getAllContractMetadata(await this.getDatastoreAddress())
    ).map((m) => ({
      ...m,
      type: ModuleType.DATASTORE,
    }));
  }

  /**
   * Method to get a list of Market module metadata.
   * @returns A promise of an array of Market modules.
   * @deprecated - Use {@link AppModule.getAllModuleMetadata} instead
   */
  public async getMarketModules(): Promise<ModuleMetadata[]> {
    return (
      await this.getAllContractMetadata(await this.getMarketAddress())
    ).map((m) => ({
      ...m,
      type: ModuleType.MARKET,
    }));
  }

  /**
   * Method to get a list of Drop module metadata.
   * @returns A promise of an array of Drop modules.
   * @deprecated - Use {@link AppModule.getAllModuleMetadata} instead
   */
  public async getDropModules(): Promise<ModuleMetadata[]> {
    return (await this.getAllContractMetadata(await this.getDropAddress())).map(
      (m) => ({
        ...m,
        type: ModuleType.DROP,
      }),
    );
  }

  /**
   * Method to get a list of all module metadata on a given app.
   * @public
   * @param filterByModuleType - Optional array of {@link ModuleType} to filter by.
   * @returns Array of module metadata
   */
  public async getAllModuleMetadata(
    filterByModuleType?: ModuleType[],
  ): Promise<ModuleMetadata[]> {
    const moduleTypesToGet = filterByModuleType || [
      ModuleType.NFT,
      ModuleType.BUNDLE,
      ModuleType.PACK,
      ModuleType.TOKEN,
      ModuleType.MARKET,
      ModuleType.DATASTORE,
      ModuleType.DROP,
      ModuleType.BUNDLE_DROP,
      ModuleType.VOTE,
    ];
    return (
      await Promise.all(
        moduleTypesToGet.map(async (moduleType) => {
          const moduleAddresses = await this.getModuleAddress(moduleType);
          return (await this.getAllContractMetadata(moduleAddresses)).map(
            (m) => ({
              ...m,
              type: moduleType,
            }),
          );
        }),
      )
    ).reduce((acc, curr) => acc.concat(curr), []);
  }

  // owner functions
  /**
   * @deprecated - Use setMetadata() instead
   */
  public async setModuleMetadata(
    metadata: MetadataURIOrObject,
  ): Promise<TransactionReceipt> {
    const uri = await this.sdk.getStorage().uploadMetadata(metadata);
    return await this.sendTransaction("setContractURI", [uri]);
  }

  public async setRoyaltyTreasury(
    treasury: string,
  ): Promise<TransactionReceipt> {
    return await this.sendTransaction("setRoyaltyTreasury", [treasury]);
  }

  public async setModuleRoyaltyTreasury(
    moduleAddress: string,
    treasury: string,
  ): Promise<TransactionReceipt> {
    return await this.sendTransaction("setModuleRoyaltyTreasury", [
      moduleAddress,
      treasury,
    ]);
  }

  public async withdrawFunds(
    to: string,
    currency: string,
  ): Promise<TransactionReceipt> {
    if (isNativeToken(currency)) {
      currency = ethers.constants.AddressZero;
    }
    return await this.sendTransaction("withdrawFunds", [to, currency]);
  }

  /**
   * Helper method that handles `image` property uploads if its a file
   *
   * @param metadata - The metadata of the module to be deployed
   * @returns - The sanitized metadata with an uploaded image ipfs hash
   */
  private async _prepareMetadata(metadata: CommonModuleMetadata): Promise<any> {
    if (typeof metadata.image === "string") {
      return Promise.resolve(metadata);
    }
    if (metadata.image === undefined) {
      return Promise.resolve(metadata);
    }

    metadata.image = await this.sdk
      .getStorage()
      .upload(
        metadata.image as FileOrBuffer,
        this.address,
        await this.getSignerAddress(),
      );
    return Promise.resolve(metadata);
  }

  /**
   * Helper method that deploys a module and returns its address
   *
   * @internal
   *
   * @param moduleType - The ModuleType to deploy
   * @param args - Constructor arguments for the module
   * @param factory - The ABI factory used to call the `deploy` method
   * @returns The address of the deployed module
   */
  private async _deployModule<T extends ModuleType>(
    moduleType: T,
    args: any[],
    factory: any,
  ): Promise<string> {
    const gasPrice = await this.sdk.getGasPrice();
    const txOpts = gasPrice
      ? { gasPrice: ethers.utils.parseUnits(gasPrice.toString(), "gwei") }
      : {};

    const tx = await new ethers.ContractFactory(factory.abi, factory.bytecode)
      .connect(this.signer as Signer)
      .deploy(...args, txOpts);

    await tx.deployed();
    const contractAddress = tx.address;

    const addModuleTx = await this.contract.addModule(
      contractAddress,
      moduleType,
      txOpts,
    );
    await addModuleTx.wait();
    return contractAddress;
  }

  /**
   * Deploys a collection module.
   *
   * @param metadata - Metadata about the module.
   * @returns A promise with the newly created module.
   */
  public async deployBundleModule(
    metadata: BundleModuleMetadata,
  ): Promise<CollectionModule> {
    const serializedMetadata = this.jsonConvert.serializeObject(
      await this._prepareMetadata(metadata),
      BundleModuleMetadata,
    );

    const metadataUri = await this.sdk
      .getStorage()
      .uploadMetadata(
        serializedMetadata,
        this.address,
        await this.getSignerAddress(),
      );

    const address = await this._deployModule(
      ModuleType.COLLECTION,
      [
        this.address,
        await this.sdk.getForwarderAddress(),
        metadataUri,
        BigNumber.from(
          metadata.sellerFeeBasisPoints ? metadata.sellerFeeBasisPoints : 0,
        ),
      ],
      NFTCollection__factory,
    );

    return this.sdk.getCollectionModule(address);
  }

  /**
   * Deploys a Splits module
   *
   * @param metadata - The module metadata
   * @returns - The deployed splits module
   */
  public async deploySplitsModule(
    metadata: SplitsModuleMetadata,
  ): Promise<SplitsModule> {
    const serializedMetadata = this.jsonConvert.serializeObject(
      await this._prepareMetadata(metadata),
      SplitsModuleMetadata,
    );

    const metadataUri = await this.sdk
      .getStorage()
      .uploadMetadata(
        serializedMetadata,
        this.address,
        await this.getSignerAddress(),
      );

    const address = await this._deployModule(
      ModuleType.SPLITS,
      [
        this.address,
        await this.sdk.getForwarderAddress(),
        metadataUri,
        metadata.recipientSplits.map((s) => s.address),
        metadata.recipientSplits.map((s) => s.shares),
      ],
      Royalty__factory,
    );

    return this.sdk.getSplitsModule(address);
  }

  /**
   * Deploys a NFT module.
   *
   * @param metadata - The module metadata
   * @returns - The deployed NFT module
   */
  public async deployNftModule(
    metadata: NftModuleMetadata,
  ): Promise<NFTModule> {
    const serializedMetadata = this.jsonConvert.serializeObject(
      await this._prepareMetadata(metadata),
      NftModuleMetadata,
    );

    const metadataUri = await this.sdk
      .getStorage()
      .uploadMetadata(
        serializedMetadata,
        this.address,
        await this.getSignerAddress(),
      );

    const address = await this._deployModule(
      ModuleType.NFT,
      [
        this.address,
        metadata.name,
        metadata.symbol ? metadata.symbol : "",
        await this.sdk.getForwarderAddress(),
        metadataUri,
        metadata.sellerFeeBasisPoints,
      ],
      NFT__factory,
    );

    return this.sdk.getNFTModule(address);
  }

  /**
   * Deploys a currency module.
   *
   * @param metadata - The module metadata
   * @returns - The deployed currency module
   */
  public async deployCurrencyModule(
    metadata: CurrencyModuleMetadata,
  ): Promise<CurrencyModule> {
    const serializedMetadata = this.jsonConvert.serializeObject(
      await this._prepareMetadata(metadata),
      CurrencyModuleMetadata,
    );

    const metadataUri = await this.sdk
      .getStorage()
      .uploadMetadata(
        serializedMetadata,
        this.address,
        await this.getSignerAddress(),
      );

    const address = await this._deployModule(
      ModuleType.CURRENCY,
      [
        this.address,
        metadata.name,
        metadata.symbol ? metadata.symbol : "",
        await this.sdk.getForwarderAddress(),
        metadataUri,
      ],
      Coin__factory,
    );

    return this.sdk.getCurrencyModule(address);
  }

  /**
   * Deploys a token module.
   *
   * @param metadata - The module metadata
   * @returns - The deployed currency module
   */
  public async deployTokenModule(
    metadata: TokenModuleMetadata,
  ): Promise<TokenModule> {
    const serializedMetadata = this.jsonConvert.serializeObject(
      await this._prepareMetadata(metadata),
      CurrencyModuleMetadata,
    );

    const metadataUri = await this.sdk
      .getStorage()
      .uploadMetadata(
        serializedMetadata,
        this.address,
        await this.getSignerAddress(),
      );

    const address = await this._deployModule(
      ModuleType.CURRENCY,
      [
        this.address,
        metadata.name,
        metadata.symbol ? metadata.symbol : "",
        await this.sdk.getForwarderAddress(),
        metadataUri,
      ],
      Coin__factory,
    );

    return this.sdk.getTokenModule(address);
  }

  /**
   * Deploys a Marketplace module
   *
   * @param metadata - The module metadata
   * @returns - The deployed Marketplace module
   */
  public async deployMarketModule(
    metadata: MarketModuleMetadata,
  ): Promise<MarketModule> {
    const serializedMetadata = this.jsonConvert.serializeObject(
      await this._prepareMetadata(metadata),
      MarketModuleMetadata,
    );

    const metadataUri = await this.sdk
      .getStorage()
      .uploadMetadata(
        serializedMetadata,
        this.address,
        await this.getSignerAddress(),
      );

    const address = await this._deployModule(
      ModuleType.MARKET,
      [
        this.address,
        await this.sdk.getForwarderAddress(),
        metadataUri,
        metadata.marketFeeBasisPoints ? metadata.marketFeeBasisPoints : 0,
      ],
      Market__factory,
    );

    return this.sdk.getMarketModule(address);
  }

  /**
   * Deploys a Pack module
   *
   * @param metadata - The module metadata
   * @returns - The deployed Pack module
   */
  public async deployPackModule(
    metadata: PackModuleMetadata,
  ): Promise<PackModule> {
    const serializedMetadata = this.jsonConvert.serializeObject(
      await this._prepareMetadata(metadata),
      PackModuleMetadata,
    );

    const metadataUri = await this.sdk
      .getStorage()
      .uploadMetadata(
        serializedMetadata,
        this.address,
        await this.getSignerAddress(),
      );

    const chainId = await this.getChainID();
    const { vrfCoordinator, linkTokenAddress, keyHash, fees } =
      ChainlinkVrf[chainId as keyof typeof ChainlinkVrf];

    const address = await this._deployModule(
      ModuleType.PACK,
      [
        this.address,
        metadataUri,
        vrfCoordinator,
        linkTokenAddress,
        keyHash,
        fees,
        await this.sdk.getForwarderAddress(),
        metadata.sellerFeeBasisPoints ? metadata.sellerFeeBasisPoints : 0,
      ],
      Pack__factory,
    );

    return this.sdk.getPackModule(address);
  }

  /**
   * Deploys a Drop module
   *
   * @param metadata - The module metadata
   * @returns - The deployed Drop module
   */
  public async deployDropModule(
    metadata: DropModuleMetadata,
  ): Promise<DropModule> {
    invariant(
      metadata.primarySaleRecipientAddress !== "" &&
        isAddress(metadata.primarySaleRecipientAddress),
      "Primary sale recipient address must be specified and must be a valid address",
    );

    const serializedMetadata = this.jsonConvert.serializeObject(
      await this._prepareMetadata(metadata),
      DropModuleMetadata,
    );

    const metadataUri = await this.sdk
      .getStorage()
      .uploadMetadata(
        serializedMetadata,
        this.address,
        await this.getSignerAddress(),
      );

    const nativeTokenWrapperAddress = getNativeTokenByChainId(
      await this.getChainID(),
    ).wrapped.address;

    const address = await this._deployModule(
      ModuleType.DROP,
      [
        metadata.name,
        metadata.symbol ? metadata.symbol : "",
        metadataUri,
        this.address,
        await this.sdk.getForwarderAddress(),
        nativeTokenWrapperAddress,
        metadata.primarySaleRecipientAddress,
        metadata.sellerFeeBasisPoints ? metadata.sellerFeeBasisPoints : 0,
        metadata.primarySaleFeeBasisPoints
          ? metadata.primarySaleFeeBasisPoints
          : 0,
      ],
      LazyMintERC721__factory,
    );

    return this.sdk.getDropModule(address);
  }

  /**
   * Deploys a Bundle Drop module
   *
   * @param metadata - The module metadata
   * @returns - The deployed Bundle Drop module
   */
  public async deployBundleDropModule(
    metadata: BundleDropModuleMetadata,
  ): Promise<BundleDropModule> {
    invariant(
      metadata.primarySaleRecipientAddress !== "" &&
        isAddress(metadata.primarySaleRecipientAddress),
      "Primary sale recipient address must be specified and must be a valid address",
    );

    const serializedMetadata = this.jsonConvert.serializeObject(
      await this._prepareMetadata(metadata),
      DropModuleMetadata,
    );

    const metadataUri = await this.sdk
      .getStorage()
      .uploadMetadata(
        serializedMetadata,
        this.address,
        await this.getSignerAddress(),
      );

    const nativeTokenWrapperAddress = getNativeTokenByChainId(
      await this.getChainID(),
    ).wrapped.address;

    const address = await this._deployModule(
      ModuleType.BUNDLE_DROP,
      [
        metadataUri,
        this.address,
        await this.sdk.getForwarderAddress(),
        nativeTokenWrapperAddress,
        metadata.primarySaleRecipientAddress,
        metadata.sellerFeeBasisPoints ? metadata.sellerFeeBasisPoints : 0,
        metadata.primarySaleFeeBasisPoints
          ? metadata.primarySaleFeeBasisPoints
          : 0,
      ],
      LazyMintERC1155__factory,
    );

    return this.sdk.getBundleDropModule(address);
  }

  /**
   * Deploys a Datastore module
   *
   * @alpha
   * @param metadata - The module metadata
   * @returns - The deployed Datastore module
   */
  public async deployDatastoreModule(
    metadata: DatastoreModuleMetadata,
  ): Promise<DatastoreModule> {
    const serializedMetadata = this.jsonConvert.serializeObject(
      await this._prepareMetadata(metadata),
      DatastoreModuleMetadata,
    );

    const metadataUri = await this.sdk
      .getStorage()
      .uploadMetadata(
        serializedMetadata,
        this.address,
        await this.getSignerAddress(),
      );

    const address = await this._deployModule(
      ModuleType.DATASTORE,
      [this.address, await this.sdk.getForwarderAddress(), metadataUri],
      DataStore__factory,
    );

    return this.sdk.getDatastoreModule(address);
  }

  /**
   * Deploys a Vote module
   *
   * @param metadata - The module metadata
   * @returns - The deployed vote module
   */
  public async deployVoteModule(
    metadata: VoteModuleMetadata,
  ): Promise<VoteModule> {
    invariant(
      metadata.votingTokenAddress !== "" &&
        isAddress(metadata.votingTokenAddress),
      "Voting Token Address must be a valid address",
    );
    invariant(
      metadata.votingQuorumFraction >= 0 &&
        metadata.votingQuorumFraction <= 100,
      "Quofrum Fraction must be in the range of 0-100 representing percentage",
    );

    const chainId = await this.getChainID();
    const timeBetweenBlocks =
      DEFAULT_BLOCK_TIMES_FALLBACK[chainId as SUPPORTED_CHAIN_ID];

    const waitTimeInBlocks =
      metadata.proposalStartWaitTimeInSeconds /
      timeBetweenBlocks.secondsBetweenBlocks;
    const votingTimeInBlocks =
      metadata.proposalVotingTimeInSeconds /
      timeBetweenBlocks.secondsBetweenBlocks;

    metadata.votingDelay = waitTimeInBlocks;
    metadata.votingPeriod = votingTimeInBlocks;

    // verify making sure that the voting token address is valid
    try {
      await Coin__factory.connect(
        metadata.votingTokenAddress,
        this.readOnlyContract.provider,
      ).callStatic.getPastTotalSupply(0);
    } catch (e) {
      invariant(false, "Token is not compatible with the vote module");
    }

    const serializedMetadata = this.jsonConvert.serializeObject(
      await this._prepareMetadata(metadata),
      VoteModuleMetadata,
    );

    const metadataUri = await this.sdk
      .getStorage()
      .uploadMetadata(
        serializedMetadata,
        this.address,
        await this.getSignerAddress(),
      );

    const address = await this._deployModule(
      ModuleType.VOTE,
      [
        metadata.name,
        metadata.votingTokenAddress,
        metadata.votingDelay,
        metadata.votingPeriod,
        metadata.minimumNumberOfTokensNeededToPropose,
        metadata.votingQuorumFraction,
        await this.sdk.getForwarderAddress(),
        metadataUri,
      ],
      VotingGovernor__factory,
    );

    return this.sdk.getVoteModule(address);
  }

  /**
   * Check the balance of the project wallet in the native token of the chain
   *
   * @returns - The balance of the project in the native token of the chain
   */
  public async balance(): Promise<BigNumber> {
    const walletBalance = await this.readOnlyContract.provider.getBalance(
      this.address,
    );
    return walletBalance;
  }

  /**
   * Check the balance of the project wallet in a particular
   * ERC20 token contract
   *
   * @returns - The balance of the project in the native token of the chain
   */
  public async balanceOfToken(tokenAddress: string): Promise<CurrencyValue> {
    let balance: BigNumber;
    if (isNativeToken(tokenAddress)) {
      balance = await this.balance();
    } else {
      const erc20 = ERC20__factory.connect(
        tokenAddress,
        this.readOnlyContract.provider,
      );
      try {
        balance = await erc20.balanceOf(this.address);
      } catch (e) {
        console.error(tokenAddress, e);
        balance = BigNumber.from(0);
      }
    }

    return await getCurrencyValue(this.providerOrSigner, tokenAddress, balance);
  }
}
