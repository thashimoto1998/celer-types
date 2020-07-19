declare const _default: {
    types: {
        PayInfo: {
            amount: string;
            resolve_deadline: string;
        };
        PayInfoOf: {
            amount: string;
            resolve_deadline: string;
        };
        Wallet: {
            owners: string;
            balance: string;
        };
        WalletOf: {
            owners: string;
            balance: string;
        };
        ConditionType: {
            _enum: string[];
        };
        Condition: {
            condition_type: string;
            hash_lock: string;
            call_is_finalized: string;
            call_get_outcome: string;
            numeric_app_num: string;
            numeric_session_id: string;
            args_query_finalization: string;
            args_query_outcome: string;
        };
        TokenType: {
            _enum: string[];
        };
        TokenInfo: {
            token_type: string;
        };
        AccountAmtPair: {
            account: string;
            amt: string;
        };
        TokenTransfer: {
            token: string;
            receiver: string;
        };
        TransferFunctionType: {
            _enum: string[];
        };
        TransferFunction: {
            logic_type: string;
            max_transfer: string;
        };
        ConditionalPay: {
            pay_timestamp: string;
            src: string;
            dest: string;
            conditions: string;
            transfer_func: string;
            resolve_deadline: string;
            resovle_timeout: string;
        };
        ConditionalPayOf: {
            pay_timestamp: string;
            src: string;
            dest: string;
            conditions: string;
            transfer_func: string;
            resolve_deadline: string;
            resovle_timeout: string;
        };
        ResolvePaymentConditionsRequest: {
            cond_pay: string;
            hash_preimages: string;
        };
        ResolvePaymentConditionsRequestOf: {
            cond_pay: string;
            hash_preimages: string;
        };
        CondPayResult: {
            cond_pay: string;
            amount: string;
        };
        VouchedCondPayResult: {
            cond_pay_result: string;
            sig_of_src: string;
            sig_of_dest: string;
        };
        VouchedCondPayResultOf: {
            cond_pay_result: string;
            sig_of_src: string;
            sig_of_dest: string;
        };
        TokenDistribution: {
            token: string;
            distribution: string;
        };
        PaymentChannelInitializer: {
            balance_limits_enabled: string;
            balance_limits: string;
            init_distribution: string;
            open_deadline: string;
            dispute_timeout: string;
            msg_valie_receiver: string;
        };
        PaymentChannelInitializerOf: {
            balance_limits_enabled: string;
            balance_limits: string;
            init_distribution: string;
            open_deadline: string;
            dispute_timeout: string;
            msg_valie_receiver: string;
        };
        OpenChannelRequest: {
            channel_initializer: string;
            sigs: string;
        };
        OpenChannelRequestOf: {
            channel_initializer: string;
            sigs: string;
        };
        PayIdList: {
            pay_ids: string;
            next_list_hash: string;
        };
        SimplexPaymentChannel: {
            channel_id: string;
            peer_from: string;
            seq_num: string;
            transfer_to_peer: string;
            pending_pay_ids: string;
            last_pay_resolve_deadline: string;
            total_pending_amount: string;
        };
        SignedSimplexState: {
            signed_simplex_state: string;
            sigs: string;
        };
        SignedSimplexStateArray: {
            signed_simplex_states: string;
        };
        SignedSimplexStateArrayOf: {
            signed_simplex_states: string;
        };
        CooperativeWithdrawInfo: {
            channel_id: string;
            seq_num: string;
            withdraw: string;
            withdraw_deadline: string;
            recipient_channel_id: string;
        };
        CooperativeWithdrawInfoOf: {
            channel_id: string;
            seq_num: string;
            withdraw: string;
            withdraw_deadline: string;
            recipient_channel_id: string;
        };
        CooperativeWithdrawRequest: {
            withdraw_info: string;
            sigs: string;
        };
        CooperativeWithdrawRequestOf: {
            withdraw_info: string;
            sigs: string;
        };
        CooperativeSettleInfo: {
            channel_id: string;
            seq_num: string;
            settle_balance: string;
            settle_deadline: string;
        };
        CooperativeSettleInfoOf: {
            channel_id: string;
            seq_num: string;
            settle_balance: string;
            settle_deadline: string;
        };
        CooperativeSettleRequest: {
            settle_info: string;
            sigs: string;
        };
        CooperativeSettleRequestOf: {
            settle_info: string;
            sigs: string;
        };
        ChannelStatus: {
            _set: {
                Uninitialized: number;
                Operable: number;
                Settling: number;
                Closed: number;
            };
        };
        PeerState: {
            seq_num: string;
            transfer_out: string;
            next_pay_id_list_hash: string;
            last_pay_resolve_deadline: string;
            pending_pay_out: string;
        };
        PeerStateOf: {
            seq_num: string;
            transfer_out: string;
            next_pay_id_list_hash: string;
            last_pay_resolve_deadline: string;
            pending_pay_out: string;
        };
        PeerProfile: {
            peer_addr: string;
            deposit: string;
            withdrawal: string;
            state: string;
        };
        PeerProfileOf: {
            peer_addr: string;
            deposit: string;
            withdrawal: string;
            state: string;
        };
        WithdrawIntent: {
            receiver: string;
            amount: string;
            request_time: string;
            recipient_channel_id: string;
        };
        WithdrawIntentOf: {
            receiver: string;
            amount: string;
            request_time: string;
            recipient_channel_id: string;
        };
        ChannelOf: {
            balance_limits_enabled: string;
            balance_limits: string;
            settle_finalized_time: string;
            dispute_timeout: string;
            token: string;
            status: string;
            peer_profiles: string;
            cooperative_withdraw_seq_num: string;
            withdraw_intent: string;
        };
    };
};
export default _default;
