// @flow
import type {
    Key,
    ParcelData
} from '../types/Types';

import decodeHashKey from './decodeHashKey';
import updateChild from './updateChild';
import updateChildKeys from './updateChildKeys';

import doIf from 'unmutable/lib/doIf';
import identity from 'unmutable/lib/identity';
import has from 'unmutable/lib/has';
import merge from 'unmutable/lib/merge';
import set from 'unmutable/lib/set';
import update from 'unmutable/lib/update';
import updateIn from 'unmutable/lib/updateIn';
import pipe from 'unmutable/lib/util/pipe';
import pipeWith from 'unmutable/lib/util/pipeWith';

export default (key: Key, input: ParcelData) => (parcelData: ParcelData): ParcelData => {
    key = decodeHashKey(key)(parcelData);
    return pipeWith(
        parcelData,
        has('value')(input) ? update('value', set(key, input.value)) : identity(),
        updateChild(),
        updateIn(
            ['child', key],
            pipe(
                input.child ? set('child', input.child) : identity(),
                has('meta')(input) ? update('meta', {}, merge(input.meta)) : identity()
            )
        ),
        updateChildKeys()
    );
};
