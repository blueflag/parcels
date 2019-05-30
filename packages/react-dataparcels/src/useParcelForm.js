// @flow

// $FlowFixMe - useState is a named export of react
import {useState} from 'react';

import type Parcel from 'dataparcels';
import type ChangeRequest from 'dataparcels/ChangeRequest';
import type {ParcelValueUpdater} from 'dataparcels';

import useParcelState from './useParcelState';
import useParcelBuffer from './useParcelBuffer';
import ParcelBufferControl from './ParcelBufferControl';

type Params = {
    value: any,
    updateValue?: boolean,
    onChange?: (value: any, changeRequest: ChangeRequest) => void,
    buffer?: boolean,
    debounce?: number,
    validation: ParcelValueUpdater|() => ParcelValueUpdater,
    beforeChange?: ParcelValueUpdater|ParcelValueUpdater[]
};

type Return = [Parcel, ParcelBufferControl];

export default (params: Params): Return => {

    let {
        value,
        updateValue = false,
        onChange,
        buffer = true,
        debounce = 0,
        validation,
        beforeChange = []
    } = params;

    const [validationFn] = useState(() => (validation && validation.length === 0)
        ? validation()
        : undefined
    );

    beforeChange = [
        validationFn || validation,
        ...beforeChange
    ].filter(Boolean);

    let [outerParcel] = useParcelState({
        value,
        updateValue,
        onChange
    });

    let [innerParcel, innerParcelControl] = useParcelBuffer({
        parcel: outerParcel,
        buffer,
        debounce,
        beforeChange
    });

    return [innerParcel, innerParcelControl];
};