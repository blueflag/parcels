// @flow
import type Action from './Action';
import type {ParcelData} from '../types/Types';
import type {ParcelDataEvaluator} from '../types/Types';

import pipe from 'unmutable/lib/util/pipe';
import findLastIndex from 'unmutable/lib/findLastIndex';

import del from '../parcelData/delete';
import insertAfter from '../parcelData/insertAfter';
import insertBefore from '../parcelData/insertBefore';
import isParentValue from '../parcelData/isParentValue';
import push from '../parcelData/push';
import setMeta from '../parcelData/setMeta';
import setSelf from '../parcelData/setSelf';
import swap from '../parcelData/swap';
import swapNext from '../parcelData/swapNext';
import swapPrev from '../parcelData/swapPrev';
import unshift from '../parcelData/unshift';
import parcelDataUpdate from '../parcelData/update';

const actionMap = {
    batch: (lastKey, actions) => doDeepActionArray(actions),
    delete: del, //: (lastKey) => del(lastKey),
    insertAfter, //: (lastKey, value) => insertAfter(lastKey, value),
    insertBefore, //: (lastKey, value) => insertBefore(lastKey, value),
    push: (lastKey, values) => push(...values),
    setData: (lastKey, parcelData) => () => parcelData,
    setMeta: (lastKey, meta) => setMeta(meta),
    set: (lastKey, value) => setSelf(value),
    swap, //: (lastKey, swapKey) => swap(lastKey, swapKey),
    swapNext, //: (lastKey) => swapNext(lastKey),
    swapPrev, //: (lastKey) => swapPrev(lastKey),
    unshift: (lastKey, values) => unshift(...values),
    update: (lastKey, updater) => updater
};

const isProcessedFromParent = {
    delete: true,
    insertAfter: true,
    insertBefore: true,
    swap: true,
    swapNext: true,
    swapPrev: true
};

const requiresParentValue = {
    delete: true,
    insertAfter: true,
    insertBefore: true,
    push: true,
    swap: true,
    swapNext: true,
    swapPrev: true,
    unshift: true
};

const stepMap = {
    get: ({key}, next) => parcelDataUpdate(key, next),
    md: ({updater}, next) => pipe(updater, next),
    mu: ({updater, changeRequest, effectUpdate}, next) => (prevData) => {
        let nextData = next(prevData);
        let {effect, ...updated} = updater(
            nextData,
            changeRequest && changeRequest._create({
                prevData,
                nextData
            })
        );

        if(effect) {
            effect(effectUpdate);
        }

        return updated;
    }
};

const doAction = ({keyPath, type, payload}: Action) => (parcelData: ParcelData): ParcelData => {
    if(requiresParentValue[type] && !isParentValue(parcelData.value)) {
        return parcelData;
    }
    return actionMap[type](keyPath.slice(-1)[0], payload)(parcelData);
};

const doDeepAction = (action: Action): ParcelDataEvaluator => {
    let {steps, type} = action;

    if(isProcessedFromParent[type]) {
        let lastGetIndex = findLastIndex(step => step.type === 'get')(steps);
        steps = steps.slice(0, lastGetIndex);
    }

    return steps.reduceRight((next, step) => {
        let fn = stepMap[step.type];
        return fn(step, next);
    }, doAction(action));
};

const doDeepActionArray = (actions: Action|Action[]) => (parcelData: ParcelData): ?ParcelData => {
    let someSucceeded = false;
    return [].concat(actions).reduce((parcelData, action) => {
        if(!parcelData) {
            return;
        }

        try {
            let newParcelData = doDeepAction(action)(parcelData);
            someSucceeded = true;
            return newParcelData;
        } catch(e) {
            if(e.message === 'CANCEL') {
                return someSucceeded ? parcelData : undefined;
            }
            throw e;
        }
    }, parcelData);
};

export default doDeepActionArray;
