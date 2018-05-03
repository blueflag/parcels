// @flow
import type {
    ParcelData,
    PartialParcelData
} from '../types/Types';


import doIf from 'unmutable/lib/doIf';
import has from 'unmutable/lib/has';
import merge from 'unmutable/lib/merge';
import set from 'unmutable/lib/set';
import update from 'unmutable/lib/update';
import pipeWith from 'unmutable/lib/util/pipeWith';

export default (input: PartialParcelData) => (parcelData: ParcelData): ParcelData => {
    return pipeWith(
        parcelData,
        doIf(
            () => has('value')(input),
            set('value', input.value)
        ),
        doIf(
            () => has('meta')(input),
            update('meta', merge(input.meta))
        )
    );
};
