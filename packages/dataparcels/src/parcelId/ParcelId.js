// @flow
import type {Key} from '../types/Types';
import type {ParcelIdData} from '../types/Types';

import last from 'unmutable/lib/last';
import push from 'unmutable/lib/push';
import rest from 'unmutable/lib/rest';
import update from 'unmutable/lib/update';
import pipeWith from 'unmutable/lib/util/pipeWith';

export const escapeKey = (key: string): string => key.replace(/([^\w])/g, "%$1");
export const stringifyPath = (path: string[]): string => path.map(escapeKey).join(".");

const DEFAULT_PARCELID_DATA = {
    id: ["^"],
    path: ["^"],
    typedPath: ["^"]
};

export default class ParcelId {
    _id: string[];
    _path: string[];
    _typedPath: string[];

    constructor(parcelIdData: ParcelIdData = DEFAULT_PARCELID_DATA) {
        this._id = parcelIdData.id;
        this._path = parcelIdData.path;
        this._typedPath = parcelIdData.typedPath;
    }

    _create: Function = (data: Object): ParcelId => {
        return new ParcelId(data);
    };

    key: Function = (): Key => {
        return last()(this._path);
    };

    id: Function = (): string => {
        return this._id.join(".");
    };

    path: Function = (): Array<Key> => {
        return rest()(this._path);
    };

    typedPathString: Function = (): string => {
        return this._typedPath.join(".");
    };

    push: Function = (key: Key, isElement: boolean): ParcelId => {
        let escapeAndPush: Function = isElement
            ? push(key)
            : push(escapeKey(key));

        return pipeWith(
            this.toJS(),
            update('id', escapeAndPush),
            update('path', push(key)),
            update('typedPath', escapeAndPush),
            this._create
        );
    };

    pushModifier: Function = (modifierTypeId: string): ParcelId => {
        return pipeWith(
            this.toJS(),
            update('id', push(`~${modifierTypeId}`)),
            this._create
        );
    };

    toJS: Function = (): Object => ({
        id: this._id,
        path: this._path,
        typedPath: this._typedPath
    });

    setTypeCode: Function = (typeCode: string) => {
        this._typedPath = update(-1, ii =>`${ii}:${typeCode}`)(this._typedPath);
    };
}
