// @flow
import Parcel from '../Parcel';
import GetAction from '../../util/__test__/GetAction-testUtil';
import ParcelShape from '../../parcelShape/ParcelShape';
import TestValidateValueUpdater from '../../util/__test__/TestValidateValueUpdater-testUtil';

test('Parcel.set() should call the Parcels handleChange function with the new parcelData', () => {
    expect.assertions(3);

    var data = {
        value: 123
    };

    var expectedData = {
        child: undefined,
        meta: {},
        value: 456,
        key: '^'
    };

    var expectedAction = {
        type: "set",
        keyPath: [],
        payload: {
            value: 456
        }
    };

    new Parcel({
        ...data,
        handleChange: (parcel, changeRequest) => {
            expect(expectedData).toEqual(parcel.data);
            expect(expectedData).toEqual(changeRequest.nextData);
            expect(expectedAction).toEqual(GetAction(changeRequest));
        }
    }).set(456);
});

test('Parcel.set() should remove and replace child data when setting a deep data structure', () => {
    expect.assertions(2);

    var data = {
        value: [[1,2,3],[4]]
    };

    var expectedData = {
        child: [
            {"key": "#a"},
            {"key": "#b"}
        ],
        key: "^",
        meta: {},
        value: [[6], [2, 3, 4]]
    };

    var expectedDeepData = {
        child: undefined,
        meta: {},
        value: 6,
        key: '#a'
    };

    new Parcel({
        ...data,
        handleChange: (parcel) => {
            expect(parcel.data).toEqual(expectedData);
            let deep = parcel.getIn([0,0]).data;
            expect(deep).toEqual(expectedDeepData);
        }
    }).set([[6],[2,3,4]]);
});

test('Parcel.update() should call the Parcels handleChange function with the new parcelData', () => {

    let handleChange = jest.fn();
    let updater = jest.fn(ii => ii + 1);

    new Parcel({
        value: 123,
        handleChange
    }).update(updater);

    expect(updater.mock.calls[0][0]).toBe(123);
    expect(handleChange.mock.calls[0][0].data.value).toBe(124);
});

test('Parcel.update() should validate value updater', () => {
    TestValidateValueUpdater(
        expect,
        (value, updater) => new Parcel({value}).update(updater)
    );
});

test('Parcel.updateShape() should call the Parcels handleChange function with the new parcelData', () => {

    let handleChange = jest.fn();
    let updater = jest.fn(parcelShape => parcelShape.push(4));

    new Parcel({
        value: [1,2,3],
        handleChange
    }).updateShape(updater);

    expect(updater.mock.calls[0][0] instanceof ParcelShape).toBe(true);
    expect(handleChange.mock.calls[0][0].data.value).toEqual([1,2,3,4]);
});

test('Parcel.onChange() should work like set that only accepts a single argument', () => {
    expect.assertions(2);

    var data = {
        value: 123
    };

    var expectedData = {
        child: undefined,
        meta: {},
        value: 456,
        key: '^'
    };

    var expectedAction = {
        type: "set",
        keyPath: [],
        payload: {
            value: 456
        }
    };

    new Parcel({
        ...data,
        handleChange: (parcel, changeRequest) => {
            expect(expectedData).toEqual(parcel.data);
            expect(expectedAction).toEqual(GetAction(changeRequest));
        }
    }).onChange(456);
});

test('Parcel.onChangeDOM() should work like onChange but take the value from event.currentTarget.value', () => {
    expect.assertions(2);

    var data = {
        value: 123
    };

    var expectedData = {
        child: undefined,
        meta: {},
        value: 456,
        key: '^'
    };

    var expectedAction = {
        type: "set",
        keyPath: [],
        payload: {
            value: 456
        }
    };

    new Parcel({
        ...data,
        handleChange: (parcel, changeRequest) => {
            expect(expectedData).toEqual(parcel.data);
            expect(expectedAction).toEqual(GetAction(changeRequest));
        }
    }).onChangeDOM({
        currentTarget: {
            value: 456
        }
    });
});

test('Parcel.setMeta() should call the Parcels handleChange function with the new meta merged in', () => {
    expect.assertions(3);

    var data = {
        value: 123
    };

    var expectedMeta = {
        abc: 123
    };

    var expectedMeta2 = {
        abc: 123,
        def: 456
    };

    var expectedAction = {
        type: "setMeta",
        keyPath: [],
        payload: {
            meta: {
                abc: 123
            }
        }
    };

    var changes = 0;

    new Parcel({
        ...data,
        handleChange: (parcel, changeRequest) => {
            changes++;

            if(changes === 1) {
                expect(expectedMeta).toEqual(parcel.meta);
                expect(expectedAction).toEqual(GetAction(changeRequest));
                parcel.setMeta({
                    def: 456
                });

            } else if(changes === 2) {
                expect(expectedMeta2).toEqual(parcel.meta);
            }
        }
    }).setMeta({
        abc: 123
    });
});

test('Parcel.setChangeRequestMeta() should set change request meta', () => {
    var data = {
        value: 123,
        handleChange: (parcel, changeRequest) => {
            expect({a: 3, b: 2}).toEqual(changeRequest.changeRequestMeta);
        }
    };

    var parcel = new Parcel(data).batch(parcel => {
        parcel.setChangeRequestMeta({a: 1});
        parcel.onChange(456);
        parcel.setChangeRequestMeta({b: 2});
        parcel.setChangeRequestMeta({a: 3});
    });
});
