/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
        PayInfo: {
            amount: "Option<Balance>",
            resolve_deadline: "Option<BlockNumber>"
        },
        PayInfoOf: {
            amount: "Option<Balance>",
            resolve_deadline: "Option<BlockNumber>",
        },
        Wallet: {
            owners: "Vec<AccountId>",
            balance: "Balance",
        },
        WalletOf: {
            owners: "Vec<AccountId>",
            balance: "Balance",
        },
        ConditionType: {
            _enum: ['HashLock', 'BooleanRuntimeModule', 'NumericRuntimeModule']
        },
        Condition: {
            condition_type: 'ConditionType',
            hash_lock: 'Option<Hash>',
            call_is_finalized: 'Option<Call>',
            call_get_outcome: 'Option<Call>',
            numeric_app_num: 'Option<u32>',
            numeric_session_id: 'Option<Hash>',
            args_query_finalization: 'Option<Vec<u8>>',
            args_query_outcome: 'Option<Vec<u8>>',
        },
        TokenType: {
            _enum: ['Invalid', 'Celer']
        },
        TokenInfo: {
            token_type: 'TokenType',
        },
        AccountAmtPair: {
            account: 'Option<AccountId>',
            amt: 'Balance',
        },
        TokenTransfer: {
            token: 'TokenInfo',
            receiver: 'AccountAmtPair',
        },
        TransferFunctionType: {
            _enum: [
                'BooleanAnd', 'BooleanOr', 'BooleanCircut', 
                'NumericAdd', 'NumericMax', 'NumericMin',
            ]
        },
        TransferFunction: {
            logic_type: 'TransferFunctionType',
            max_transfer: 'TokenTransfer',
        },
        ConditionalPay: {
            pay_timestamp: 'Moment',
            src: 'AccountId',
            dest: 'AccountId',
            conditions: 'Vec<Condition>',
            transfer_func: 'TransferFunction',
            resolve_deadline: 'BlockNumber',
            resovle_timeout: 'BlockNumber',
        },
        ConditionalPayOf: {
            pay_timestamp: 'Moment',
            src: 'AccountId',
            dest: 'AccountId',
            conditions: 'Vec<Condition>',
            transfer_func: 'TransferFunction',
            resolve_deadline: 'BlockNumber',
            resovle_timeout: 'BlockNumber',
        },
        ResolvePaymentConditionsRequest: {
            cond_pay: 'ConditionalPay',
            hash_preimages: 'Vec<Hash>',
        },
        ResolvePaymentConditionsRequestOf: {
            cond_pay: 'ConditionalPay',
            hash_preimages: 'Vec<Hash>',
        },
        CondPayResult: {
            cond_pay: "ConditionalPay",
            amount: "Balance",
        },
        VouchedCondPayResult: {
            cond_pay_result: 'CondPayResult',
            sig_of_src: 'Signature',
            sig_of_dest: 'Signature',
        },
        VouchedCondPayResultOf: {
            cond_pay_result: 'CondPayResult',
            sig_of_src: 'Signature',
            sig_of_dest: 'Signature',
        },
        TokenDistribution: {
            token: 'TokenInfo',
            distribution: 'Vec<AccountAmtPair>',
        },
        PaymentChannelInitializer: {
            balance_limits_enabled: 'bool',
            balance_limits: 'Option<Balance>',
            init_distribution: 'TokenDistribution',
            open_deadline: 'BlockNumber',
            dispute_timeout: 'BlockNumber',
            msg_value_receiver: 'u8',
        },
        PaymentChannelInitializerOf: {
            balance_limits_enabled: 'bool',
            balance_limits: 'Option<Balance>',
            init_distribution: 'TokenDistribution',
            open_deadline: 'BlockNumber',
            dispute_timeout: 'BlockNumber',
            msg_value_receiver: 'u8',
        },
        OpenChannelRequest: {
            channel_initializer: 'PaymentChannelInitializer',
            sigs: 'Vec<Signature>',
        },
        OpenChannelRequestOf: {
            channel_initializer: 'PaymentChannelInitializer',
            sigs: 'Vec<Signature>',
        },
        PayIdList: {
            pay_ids: 'Vec<Hash>',
            next_list_hash: 'Option<Hash>',
        },
        SimplexPaymentChannel: {
            channel_id: "Hash",
            peer_from: "Option<AccountId>",
            seq_num: "u128",
            transfer_to_peer: "Option<TokenTransfer>",
            pending_pay_ids: "Option<PayIdList>",
            last_pay_resolve_deadline: "Option<BlockNumber>",
            total_pending_amount: "Option<Balance>",
        },
        SignedSimplexState: {
            signed_simplex_state: "SimplexPaymentChannel",
            sigs: "Vec<Signature>",
        },
        SignedSimplexStateArray: {
            signed_simplex_states: "Vec<SignedSimplexState>",
        },
        SignedSimplexStateArrayOf: {
            signed_simplex_states: "Vec<SignedSimplexState>",
        },
        CooperativeWithdrawInfo: {
            channel_id: "Hash",
            seq_num: "u128",
            withdraw: "AccountAmtPair",
            withdraw_deadline: "BlockNumber",
            recipient_channel_id: "Hash",
        },
        CooperativeWithdrawInfoOf: {
            channel_id: "Hash",
            seq_num: "u128",
            withdraw: "AccountAmtPair",
            withdraw_deadline: "BlockNumber",
            recipient_channel_id: "Hash",
        },
        CooperativeWithdrawRequest: {
            withdraw_info: "CooperativeWithdrawInfo",
            sigs: "Vec<Signature>",
        },
        CooperativeWithdrawRequestOf: {
            withdraw_info: "CooperativeWithdrawInfo",
            sigs: "Vec<Signature>",
        },
        CooperativeSettleInfo: {
            channel_id: "Hash",
            seq_num: "u128",
            settle_balance: "Vec<AccountAmtPair>",
            settle_deadline: "BlockNumber",
        },
        CooperativeSettleInfoOf: {
            channel_id: "Hash",
            seq_num: "u128",
            settle_balance: "Vec<AccountAmtPair>",
            settle_deadline: "BlockNumber",
        },
        CooperativeSettleRequest: {
            settle_info: "CooperativeSettleInfo",
            sigs: "Vec<Signature>",
        },
        CooperativeSettleRequestOf: {
            settle_info: "CooperativeSettleInfo",
            sigs: "Vec<Signature>",
        },
        ChannelStatus: {
            _set: {
                Uninitialized: 0,
                Operable: 1,
                Settling: 2,
                Closed: 3,
            }
        },
        PeerState: {
            seq_num: "u128",
            transfer_out: "Balance",
            next_pay_id_list_hash: "Option<Hash>",
            last_pay_resolve_deadline: "BlockNumber",
            pending_pay_out: "Balance",
        },
        PeerStateOf: {
            seq_num: "u128",
            transfer_out: "Balance",
            next_pay_id_list_hash: "Option<Hash>",
            last_pay_resolve_deadline: "BlockNumber",
            pending_pay_out: "Balance",
        },
        PeerProfile: {
            peer_addr: "AccountId",
            deposit: "Balance",
            withdrawal: "Option<Balance>",
            state: "PeerState",
        },
        PeerProfileOf: {
            peer_addr: "AccountId",
            deposit: "Balance",
            withdrawal: "Option<Balance>",
            state: "PeerState",
        },
        WithdrawIntent: {
            receiver: "AccountId",
            amount: "Option<Balance>",
            request_time: "Option<BlockNumber>",
            recipient_channel_id: "Option<Hash>",
        },
        WithdrawIntentOf: {
            receiver: "AccountId",
            amount: "Option<Balance>",
            request_time: "Option<BlockNumber>",
            recipient_channel_id: "Option<Hash>",
        },
        ChannelOf: {
            balance_limits_enabled: "bool",
            balance_limits: "Option<Balance>",
            settle_finalized_time: "Option<BlockNumber>",
            dispute_timeout: "BlockNumber",
            token: "TokenInfo",
            status: "ChannelStatus",
            peer_profiles: "Vec<PeerProfile>",
            cooperative_withdraw_seq_num: "Option<u128>",
            withdraw_intent: "WithdrawIntent",
        },
    }
};