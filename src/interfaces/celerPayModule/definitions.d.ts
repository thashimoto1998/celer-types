declare const _default: {
    types: {
        PayInfo: {
            amount: string;
            resolveDeadline: string;
        };
        PayInfoOf: {
            amount: string;
            resolveDeadline: string;
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
            conditionType: string;
            hashLock: string;
            callIsFinalized: string;
            callGetOutcome: string;
            numericAppNum: string;
            numericSessionId: string;
            argsQueryFinalization: string;
            argsQueryOutcome: string;
        };
        TokenType: {
            _enum: string[];
        };
        TokenInfo: {
            tokenType: string;
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
            logicType: string;
            maxTransfer: string;
        };
        ConditionalPay: {
            payTimestamp: string;
            src: string;
            dest: string;
            conditions: string;
            transferFunc: string;
            resolveDeadline: string;
            resovleTimeout: string;
        };
        ConditionalPayOf: {
            payTimestamp: string;
            src: string;
            dest: string;
            conditions: string;
            transferFunc: string;
            resolveDeadline: string;
            resolveTimeout: string;
        };
        ResolvePaymentConditionsRequest: {
            condPay: string;
            hashPreimages: string;
        };
        ResolvePaymentConditionsRequestOf: {
            condPay: string;
            hashPreimages: string;
        };
        CondPayResult: {
            condPay: string;
            amount: string;
        };
        VouchedCondPayResult: {
            condPayResult: string;
            sigOfSrc: string;
            sigOfDest: string;
        };
        VouchedCondPayResultOf: {
            condPayResult: string;
            sigOfSrc: string;
            sigOfDest: string;
        };
        TokenDistribution: {
            token: string;
            distribution: string;
        };
        PaymentChannelInitializer: {
            balanceLimitsEnabled: string;
            balanceLimits: string;
            initDistribution: string;
            openDeadline: string;
            disputeTimeout: string;
            msgValueReceiver: string;
        };
        PaymentChannelInitializerOf: {
            balanceLimitsEnabled: string;
            balanceLimits: string;
            initDistribution: string;
            openDeadline: string;
            disputeTimeout: string;
            msgValueReceiver: string;
        };
        OpenChannelRequest: {
            channelInitializer: string;
            sigs: string;
        };
        OpenChannelRequestOf: {
            channelInitializer: string;
            sigs: string;
        };
        PayIdList: {
            payIds: string;
            nextListHash: string;
        };
        SimplexPaymentChannel: {
            channelId: string;
            peerFrom: string;
            seqNum: string;
            transferToPeer: string;
            pendingPayIds: string;
            lastPayResolveDeadline: string;
            totalPendingAmount: string;
        };
        SignedSimplexState: {
            signedSimplexState: string;
            sigs: string;
        };
        SignedSimplexStateArray: {
            signedSimplexStates: string;
        };
        SignedSimplexStateArrayOf: {
            signedSimplexStates: string;
        };
        CooperativeWithdrawInfo: {
            channelId: string;
            seqNum: string;
            withdraw: string;
            withdrawDeadline: string;
            recipientChannelId: string;
        };
        CooperativeWithdrawInfoOf: {
            channelId: string;
            seqNum: string;
            withdraw: string;
            withdrawDeadline: string;
            recipientChannelId: string;
        };
        CooperativeWithdrawRequest: {
            withdrawInfo: string;
            sigs: string;
        };
        CooperativeWithdrawRequestOf: {
            withdrawInfo: string;
            sigs: string;
        };
        CooperativeSettleInfo: {
            channelId: string;
            seqNum: string;
            settleBalance: string;
            settleDeadline: string;
        };
        CooperativeSettleInfoOf: {
            channelId: string;
            seqNum: string;
            settleBalance: string;
            settleDeadline: string;
        };
        CooperativeSettleRequest: {
            settleInfo: string;
            sigs: string;
        };
        CooperativeSettleRequestOf: {
            settleInfo: string;
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
            seqNum: string;
            transferOut: string;
            nextPayIdListHash: string;
            lastPayResolveDeadline: string;
            pendingPayOut: string;
        };
        PeerStateOf: {
            seqNum: string;
            transferOut: string;
            nextPayIdListHash: string;
            lastPayResolveDeadline: string;
            pendingPayOut: string;
        };
        PeerProfile: {
            peerAddr: string;
            deposit: string;
            withdrawal: string;
            state: string;
        };
        PeerProfileOf: {
            peerAddr: string;
            deposit: string;
            withdrawal: string;
            state: string;
        };
        WithdrawIntent: {
            receiver: string;
            amount: string;
            requestTime: string;
            recipientChannelId: string;
        };
        WithdrawIntentOf: {
            receiver: string;
            amount: string;
            requestTime: string;
            recipientChannelId: string;
        };
        ChannelOf: {
            balanceLimitsEnabled: string;
            balanceLimits: string;
            settleFinalizedTime: string;
            disputeTimeout: string;
            token: string;
            status: string;
            peerProfiles: string;
            cooperativeWithdrawSeqNum: string;
            withdrawIntent: string;
        };
    };
};
export default _default;
