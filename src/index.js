"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@polkadot/api");
const celerDefinitions = __importStar(require("./interfaces/definitions"));
async function main() {
    // extract all types from definitions - fast and dirty approach, flatted on 'types'
    const types = Object.values(celerDefinitions).reduce((res, { types }) => (Object.assign(Object.assign({}, res), types)), {});
    const api = await api_1.ApiPromise.create({
        types: Object.assign(Object.assign({}, types), { 
            // aliasses that don't do well as part of interfaces
            'voting::VoteType': 'VoteType', 'voting::TallyType': 'TallyType', 
            // chain-specific overrides
            Keys: 'SessionKeys4' })
    });
    await api.isReady;
    console.log(api.genesisHash.toHex());
}
main();
