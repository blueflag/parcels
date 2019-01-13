// @flow
import type ChangeRequest from '../../change/ChangeRequest';
import type Parcel from '../Parcel';
import type {ParcelMeta} from '../../types/Types';
import type {ParcelValueUpdater} from '../../types/Types';

import Types from '../../types/Types';
import StaticParcel from '../../staticParcel/StaticParcel';
import ValidateValueUpdater from '../../util/ValidateValueUpdater';

import ParcelTypes from '../ParcelTypes';
import HashString from '../../util/HashString';

import filterNot from 'unmutable/lib/filterNot';
import has from 'unmutable/lib/has';
import isEmpty from 'unmutable/lib/isEmpty';
import merge from 'unmutable/lib/merge';
import set from 'unmutable/lib/set';
import setIn from 'unmutable/lib/setIn';
import pipe from 'unmutable/lib/util/pipe';
import pipeWith from 'unmutable/lib/util/pipeWith';

let HashFunction = (fn: Function): string => `${HashString(fn.toString())}`;

export default (_this: Parcel): Object => ({

    modifyDown: (updater: ParcelValueUpdater): Parcel => {
        Types(`modifyDown()`, `updater`, `function`)(updater);

        let {value} = _this._parcelData;
        let updatedValue = updater(value, _this);
        ValidateValueUpdater(value, updatedValue);

        let updatedType = new ParcelTypes(updatedValue);
        let updatedTypeChanged: boolean = updatedType.isParent() !== _this._parcelTypes.isParent()
            || updatedType.isIndexed() !== _this._parcelTypes.isIndexed();

        let onDispatch;
        if(updatedTypeChanged) {
            onDispatch = (changeRequest: ChangeRequest) => {
                _this.batch(
                    (parcel: Parcel) => {
                        parcel.set(updatedValue);
                        parcel.dispatch(changeRequest);
                    },
                    changeRequest
                );
            };
        }

        return _this._create({
            id: _this._id.pushModifier(`mv-${HashFunction(updater)}`),
            parcelData: {
                ..._this._parcelData,
                value: updatedValue
            },
            onDispatch
        });
    },

    modifyUp: (updater: ParcelValueUpdater): Parcel => {
        Types(`modifyUp()`, `updater`, `function`)(updater);
        return _this.modifyChange((parcel: Parcel, changeRequest: ChangeRequest) => {

            let {value} = changeRequest.nextData;
            let updatedValue = updater(value, _this);
            ValidateValueUpdater(value, updatedValue);

            // dispatch all non-value actions in this change request
            let valueActionFilter = actions => actions.filter(action => !action.isValueAction());
            parcel.dispatch(changeRequest.updateActions(valueActionFilter));

            parcel.set(updatedValue);
        });
    },

    modifyDownDeep: (updater: Function): Parcel => {
        Types(`modifyDownDeep()`, `updater`, `function`)(updater);

        let staticUpdater = StaticParcel._updateFromData(updater);

        return _this._create({
            id: _this._id.pushModifier(`md-${HashFunction(updater)}`),
            parcelData: staticUpdater(_this._parcelData),
            onDispatch: (changeRequest: ChangeRequest) => {
                _this.dispatch(changeRequest._addPre(staticUpdater));
            }
        });
    },

    modifyUpDeep: (updater: Function): Parcel => {
        Types(`modifyUpDeep()`, `updater`, `function`)(updater);

        let staticUpdater = StaticParcel._updateFromData(updater);

        return _this._create({
            id: _this._id.pushModifier(`mu-${HashFunction(updater)}`),
            onDispatch: (changeRequest: ChangeRequest) => {
                _this.dispatch(changeRequest._addPost(staticUpdater));
            }
        });
    },

    modifyChange: (batcher: Function): Parcel => {
        Types(`modifyChange()`, `batcher`, `function`)(batcher);
        return _this._create({
            id: _this._id.pushModifier(`mcb-${HashFunction(batcher)}`),
            onDispatch: (changeRequest: ChangeRequest) => {
                _this.batch(
                    (parcel: Parcel) => batcher(parcel, changeRequest._setBaseParcel(parcel)),
                    changeRequest
                );
            }
        });
    },

    initialMeta: (initialMeta: ParcelMeta = {}): Parcel => {
        Types(`initialMeta()`, `initialMeta`, `object`)(initialMeta);
        let {meta} = _this._parcelData;

        let partialMetaToSet = pipeWith(
            initialMeta,
            filterNot((value, key) => has(key)(meta))
        );

        let metaSetter = isEmpty()(partialMetaToSet)
            ? ii => ii
            : pipe(
                setIn(['parcelData', 'meta'], merge(partialMetaToSet)(meta)),
                set('onDispatch', (changeRequest: ChangeRequest) => {
                    _this.batch((parcel: Parcel) => {
                        parcel.setMeta(partialMetaToSet);
                        parcel.dispatch(changeRequest);
                    });
                })
            );

        return pipeWith(
            {
                id: _this._id.pushModifier('im')
            },
            metaSetter,
            _this._create
        );
    },

    _boundarySplit: ({handleChange}: *): Parcel => {
        return _this._create({
            id: _this._id.pushModifier('bs'),
            parent: _this._parent,
            handleChange,
            treeshare: _this._treeshare.boundarySplit()
        });
    }
});
