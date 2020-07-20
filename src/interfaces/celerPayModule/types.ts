// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Enum, Option, Set, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, bool, u128, u32, u8 } from '@polkadot/types/primitive';
import { Signature } from '@polkadot/types/interfaces/extrinsics';
import { AccountId, Balance, BlockNumber, Call, Hash, Moment } from '@polkadot/types/interfaces/runtime';

/** @name AccountAmtPair */
export interface AccountAmtPair extends Struct {
  readonly account: Option<AccountId>;
  readonly amt: Balance;
}

/** @name ChannelOf */
export interface ChannelOf extends Struct {
  readonly balance_limits_enabled: bool;
  readonly balance_limits: Option<Balance>;
  readonly settle_finalized_time: Option<BlockNumber>;
  readonly dispute_timeout: BlockNumber;
  readonly token: TokenInfo;
  readonly status: ChannelStatus;
  readonly peer_profiles: Vec<PeerProfile>;
  readonly cooperative_withdraw_seq_num: Option<u128>;
  readonly withdraw_intent: WithdrawIntent;
}

/** @name ChannelStatus */
export interface ChannelStatus extends Set {
  readonly isUninitialized: boolean;
  readonly isOperable: boolean;
  readonly isSettling: boolean;
  readonly isClosed: boolean;
}

/** @name Condition */
export interface Condition extends Struct {
  readonly condition_type: ConditionType;
  readonly hash_lock: Option<Hash>;
  readonly call_is_finalized: Option<Call>;
  readonly call_get_outcome: Option<Call>;
  readonly numeric_app_num: Option<u32>;
  readonly numeric_session_id: Option<Hash>;
  readonly args_query_finalization: Option<Bytes>;
  readonly args_query_outcome: Option<Bytes>;
}

/** @name ConditionalPay */
export interface ConditionalPay extends Struct {
  readonly pay_timestamp: Moment;
  readonly src: AccountId;
  readonly dest: AccountId;
  readonly conditions: Vec<Condition>;
  readonly transfer_func: TransferFunction;
  readonly resolve_deadline: BlockNumber;
  readonly resovle_timeout: BlockNumber;
}

/** @name ConditionalPayOf */
export interface ConditionalPayOf extends Struct {
  readonly pay_timestamp: Moment;
  readonly src: AccountId;
  readonly dest: AccountId;
  readonly conditions: Vec<Condition>;
  readonly transfer_func: TransferFunction;
  readonly resolve_deadline: BlockNumber;
  readonly resovle_timeout: BlockNumber;
}

/** @name ConditionType */
export interface ConditionType extends Enum {
  readonly isHashLock: boolean;
  readonly isBooleanRuntimeModule: boolean;
  readonly isNumericRuntimeModule: boolean;
}

/** @name CondPayResult */
export interface CondPayResult extends Struct {
  readonly cond_pay: ConditionalPay;
  readonly amount: Balance;
}

/** @name CooperativeSettleInfo */
export interface CooperativeSettleInfo extends Struct {
  readonly channel_id: Hash;
  readonly seq_num: u128;
  readonly settle_balance: Vec<AccountAmtPair>;
  readonly settle_deadline: BlockNumber;
}

/** @name CooperativeSettleInfoOf */
export interface CooperativeSettleInfoOf extends Struct {
  readonly channel_id: Hash;
  readonly seq_num: u128;
  readonly settle_balance: Vec<AccountAmtPair>;
  readonly settle_deadline: BlockNumber;
}

/** @name CooperativeSettleRequest */
export interface CooperativeSettleRequest extends Struct {
  readonly settle_info: CooperativeSettleInfo;
  readonly sigs: Vec<Signature>;
}

/** @name CooperativeSettleRequestOf */
export interface CooperativeSettleRequestOf extends Struct {
  readonly settle_info: CooperativeSettleInfo;
  readonly sigs: Vec<Signature>;
}

/** @name CooperativeWithdrawInfo */
export interface CooperativeWithdrawInfo extends Struct {
  readonly channel_id: Hash;
  readonly seq_num: u128;
  readonly withdraw: AccountAmtPair;
  readonly withdraw_deadline: BlockNumber;
  readonly recipient_channel_id: Hash;
}

/** @name CooperativeWithdrawInfoOf */
export interface CooperativeWithdrawInfoOf extends Struct {
  readonly channel_id: Hash;
  readonly seq_num: u128;
  readonly withdraw: AccountAmtPair;
  readonly withdraw_deadline: BlockNumber;
  readonly recipient_channel_id: Hash;
}

/** @name CooperativeWithdrawRequest */
export interface CooperativeWithdrawRequest extends Struct {
  readonly withdraw_info: CooperativeWithdrawInfo;
  readonly sigs: Vec<Signature>;
}

/** @name CooperativeWithdrawRequestOf */
export interface CooperativeWithdrawRequestOf extends Struct {
  readonly withdraw_info: CooperativeWithdrawInfo;
  readonly sigs: Vec<Signature>;
}

/** @name OpenChannelRequest */
export interface OpenChannelRequest extends Struct {
  readonly channel_initializer: PaymentChannelInitializer;
  readonly sigs: Vec<Signature>;
}

/** @name OpenChannelRequestOf */
export interface OpenChannelRequestOf extends Struct {
  readonly channel_initializer: PaymentChannelInitializer;
  readonly sigs: Vec<Signature>;
}

/** @name PayIdList */
export interface PayIdList extends Struct {
  readonly pay_ids: Vec<Hash>;
  readonly next_list_hash: Option<Hash>;
}

/** @name PayInfo */
export interface PayInfo extends Struct {
  readonly amount: Option<Balance>;
  readonly resolve_deadline: Option<BlockNumber>;
}

/** @name PayInfoOf */
export interface PayInfoOf extends Struct {
  readonly amount: Option<Balance>;
  readonly resolve_deadline: Option<BlockNumber>;
}

/** @name PaymentChannelInitializer */
export interface PaymentChannelInitializer extends Struct {
  readonly balance_limits_enabled: bool;
  readonly balance_limits: Option<Balance>;
  readonly init_distribution: TokenDistribution;
  readonly open_deadline: BlockNumber;
  readonly dispute_timeout: BlockNumber;
  readonly msg_value_receiver: u8;
}

/** @name PaymentChannelInitializerOf */
export interface PaymentChannelInitializerOf extends Struct {
  readonly balance_limits_enabled: bool;
  readonly balance_limits: Option<Balance>;
  readonly init_distribution: TokenDistribution;
  readonly open_deadline: BlockNumber;
  readonly dispute_timeout: BlockNumber;
  readonly msg_value_receiver: u8;
}

/** @name PeerProfile */
export interface PeerProfile extends Struct {
  readonly peer_addr: AccountId;
  readonly deposit: Balance;
  readonly withdrawal: Option<Balance>;
  readonly state: PeerState;
}

/** @name PeerProfileOf */
export interface PeerProfileOf extends Struct {
  readonly peer_addr: AccountId;
  readonly deposit: Balance;
  readonly withdrawal: Option<Balance>;
  readonly state: PeerState;
}

/** @name PeerState */
export interface PeerState extends Struct {
  readonly seq_num: u128;
  readonly transfer_out: Balance;
  readonly next_pay_id_list_hash: Option<Hash>;
  readonly last_pay_resolve_deadline: BlockNumber;
  readonly pending_pay_out: Balance;
}

/** @name PeerStateOf */
export interface PeerStateOf extends Struct {
  readonly seq_num: u128;
  readonly transfer_out: Balance;
  readonly next_pay_id_list_hash: Option<Hash>;
  readonly last_pay_resolve_deadline: BlockNumber;
  readonly pending_pay_out: Balance;
}

/** @name ResolvePaymentConditionsRequest */
export interface ResolvePaymentConditionsRequest extends Struct {
  readonly cond_pay: ConditionalPay;
  readonly hash_preimages: Vec<Hash>;
}

/** @name ResolvePaymentConditionsRequestOf */
export interface ResolvePaymentConditionsRequestOf extends Struct {
  readonly cond_pay: ConditionalPay;
  readonly hash_preimages: Vec<Hash>;
}

/** @name SignedSimplexState */
export interface SignedSimplexState extends Struct {
  readonly signed_simplex_state: SimplexPaymentChannel;
  readonly sigs: Vec<Signature>;
}

/** @name SignedSimplexStateArray */
export interface SignedSimplexStateArray extends Struct {
  readonly signed_simplex_states: Vec<SignedSimplexState>;
}

/** @name SignedSimplexStateArrayOf */
export interface SignedSimplexStateArrayOf extends Struct {
  readonly signed_simplex_states: Vec<SignedSimplexState>;
}

/** @name SimplexPaymentChannel */
export interface SimplexPaymentChannel extends Struct {
  readonly channel_id: Hash;
  readonly peer_from: Option<AccountId>;
  readonly seq_num: u128;
  readonly transfer_to_peer: Option<TokenTransfer>;
  readonly pending_pay_ids: Option<PayIdList>;
  readonly last_pay_resolve_deadline: Option<BlockNumber>;
  readonly total_pending_amount: Option<Balance>;
}

/** @name TokenDistribution */
export interface TokenDistribution extends Struct {
  readonly token: TokenInfo;
  readonly distribution: Vec<AccountAmtPair>;
}

/** @name TokenInfo */
export interface TokenInfo extends Struct {
  readonly token_type: TokenType;
}

/** @name TokenTransfer */
export interface TokenTransfer extends Struct {
  readonly token: TokenInfo;
  readonly receiver: AccountAmtPair;
}

/** @name TokenType */
export interface TokenType extends Enum {
  readonly isInvalid: boolean;
  readonly isCeler: boolean;
}

/** @name TransferFunction */
export interface TransferFunction extends Struct {
  readonly logic_type: TransferFunctionType;
  readonly max_transfer: TokenTransfer;
}

/** @name TransferFunctionType */
export interface TransferFunctionType extends Enum {
  readonly isBooleanAnd: boolean;
  readonly isBooleanOr: boolean;
  readonly isBooleanCircut: boolean;
  readonly isNumericAdd: boolean;
  readonly isNumericMax: boolean;
  readonly isNumericMin: boolean;
}

/** @name VouchedCondPayResult */
export interface VouchedCondPayResult extends Struct {
  readonly cond_pay_result: CondPayResult;
  readonly sig_of_src: Signature;
  readonly sig_of_dest: Signature;
}

/** @name VouchedCondPayResultOf */
export interface VouchedCondPayResultOf extends Struct {
  readonly cond_pay_result: CondPayResult;
  readonly sig_of_src: Signature;
  readonly sig_of_dest: Signature;
}

/** @name Wallet */
export interface Wallet extends Struct {
  readonly owners: Vec<AccountId>;
  readonly balance: Balance;
}

/** @name WalletOf */
export interface WalletOf extends Struct {
  readonly owners: Vec<AccountId>;
  readonly balance: Balance;
}

/** @name WithdrawIntent */
export interface WithdrawIntent extends Struct {
  readonly receiver: AccountId;
  readonly amount: Option<Balance>;
  readonly request_time: Option<BlockNumber>;
  readonly recipient_channel_id: Option<Hash>;
}

/** @name WithdrawIntentOf */
export interface WithdrawIntentOf extends Struct {
  readonly receiver: AccountId;
  readonly amount: Option<Balance>;
  readonly request_time: Option<BlockNumber>;
  readonly recipient_channel_id: Option<Hash>;
}

export type PHANTOM_CELERPAYMODULE = 'celerPayModule';
