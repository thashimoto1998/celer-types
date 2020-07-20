"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
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
