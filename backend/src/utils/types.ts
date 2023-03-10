import { AnyTuple } from '@polkadot/types/types';
import { EventRecord } from '@polkadot/types/interfaces';
import { GenericExtrinsic } from '@polkadot/types';
import {
  Fragment,
  JsonFragment,
  FunctionFragment,
  EventFragment,
  ConstructorFragment,
} from '@ethersproject/abi';

export interface LoggerOptions {
  scaner: string;
}

export interface ScanerConfig {
  name: string;
  enabled: boolean;
  scaner: string;
  apiCustomTypes?: string;
  startDelay?: number;
  mode?: string;
  chunkSize?: number;
  statsPrecision?: number;
  pollingTime?: number;
  historySize?: number;
  erasPerDay?: number;
  tokenDecimals?: number;
  featuredTimespan?: number;
}

export interface IdentityInfo {
  verifiedIdentity: boolean;
  hasSubIdentity: boolean;
  name: string;
  identityRating: number;
}

export interface CommisionHistoryItem {
  era: string;
  commission: string;
}

export interface ClusterInfo {
  clusterName: string;
  clusterMembers: number;
}

export type ABIFragment =
  | Fragment
  | JsonFragment
  | FunctionFragment
  | EventFragment
  | ConstructorFragment;

export type ABI = ReadonlyArray<ABIFragment>;

export type IndexedBlockEvent = [number, EventRecord];
export type IndexedBlockExtrinsic = [number, GenericExtrinsic<AnyTuple>];