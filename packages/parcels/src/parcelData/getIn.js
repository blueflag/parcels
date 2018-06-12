// @flow
import type {
    Key,
    ParcelData
} from '../types/Types';

import get from './get';
import has from './has';

export default (keyPath: Array<Key>) => (parcelData: ParcelData): ParcelData => {
    for(let key of keyPath) {
        if(!has(key)(parcelData)) {
            return {
                value: undefined,
                key,
                meta: {}
            };
        }
        parcelData = get(key)(parcelData);
    }
    return parcelData;
};
