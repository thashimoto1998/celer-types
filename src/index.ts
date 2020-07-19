import { ApiPromise } from '@polkadot/api';

import * as celerDefinitions from './interfaces/definitions';

async function main (): Promise<void> {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(celerDefinitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    const api = await ApiPromise.create({
        types: {
            ...types,
            // aliasses that don't do well as part of interfaces
            'voting::VoteType': 'VoteType',
            'voting::TallyType': 'TallyType',
            // chain-specific overrides
            Keys: 'SessionKeys4'
        }
    });

    await api.isReady;
    console.log(api.genesisHash.toHex());
}

main();