import {Box, Message} from 'dcme-style';
import Link from 'component/Link';
import ValueUpdater from 'docs/notes/ValueUpdater.md';

```flow
modifyBeforeUpdate?: Array<ValueUpdater>

type ValueUpdater = (value: any, changeRequest: ChangeRequest) => any;
```

The `modifyBeforeUpdate` config option allows derived data to be set on a Parcel.
Whenever the data in a ParcelHoc is about to be initialised or updated in any way, it is passed through all `modifyBeforeUpdate` functions.

Each function in the `modifyBeforeUpdate` array operates just like the `updater` provided to <Link to="/api/Parcel#modifyUp">Parcel.modifyUp()</Link>.

```js
ParcelHoc({
    name: "exampleParcel",
    valueFromProps: (props) => ({
        number: 99,
        isOdd: undefined
        // ^ this will contain derived data
    }),
    modifyBeforeUpdate: [
        (value) => ({
            ...value,
            isOdd: (value.number % 2 === 1)
        })
    ]
});

// exampleParcel.value.isOdd equals true
exampleParcel.set('number', 100);
// exampleParcel.value.isOdd now equals false
```

<ValueUpdater />