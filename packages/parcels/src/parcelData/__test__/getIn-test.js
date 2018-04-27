// @flow
import test from 'ava';
import getIn from '../getIn';

test('getIn should work with objects', (tt: Object) => {
    let parcelData = {
        value: {
            a: {
                b: 1
            }
        }
    };
    let expectedParcelData = {
        value: 1,
        key: "b"
    };

    tt.deepEqual(expectedParcelData, getIn(['a', 'b'])(parcelData));

    let expectedParcelData2 = {
        value: undefined
    };

    tt.is(undefined, getIn(['z', 'b'])(parcelData));
});

test('getIn should not clone value', (tt: Object) => {
    let parcelData = {
        value: {
            a: {
                b: 1
            }
        }
    };
    tt.is(parcelData.value.a.b, getIn(['a','b'])(parcelData).value);
});