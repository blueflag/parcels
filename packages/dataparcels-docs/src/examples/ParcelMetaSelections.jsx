import React from 'react';
import useParcelState from 'react-dataparcels/useParcelState';
import ParcelBoundary from 'react-dataparcels/ParcelBoundary';
import asNode from 'react-dataparcels/asNode';
import asChildNodes from 'react-dataparcels/asChildNodes';
import exampleFrame from 'component/exampleFrame';

export default function FruitListEditor(props) {

    let [fruitListParcel] = useParcelState({
        value: [
            "Apple",
            "Banana",
            "Crumpets"
        ]
    });

    let selectedFruit = fruitListParcel
        .toArray()
        .filter(fruit => fruit.meta.selected);

    let allSelected = fruitListParcel.value.length === selectedFruit.length;

    let selectAll = (selected) => fruitListParcel.map(asNode(
        node => node.setMeta({selected})
    ));

    let deleteSelectedFruit = () => fruitListParcel.update(asChildNodes(
        fruits => fruits.filter(fruitNode => !fruitNode.meta.selected)
    ));

    return exampleFrame({fruitListParcel}, <div>
        {fruitListParcel.toArray((fruitParcel) => {
            return <ParcelBoundary parcel={fruitParcel} key={fruitParcel.key}>
                {(parcel) => {
                    let selectedParcel = parcel.metaAsParcel('selected');
                    return <div>
                        <input type="text" {...parcel.spreadDOM()} />
                        <input type="checkbox" style={{width: '2rem'}} {...selectedParcel.spreadDOMCheckbox()} />
                        <button onClick={() => parcel.swapPrev()}>^</button>
                        <button onClick={() => parcel.swapNext()}>v</button>
                        <button onClick={() => parcel.delete()}>x</button>
                    </div>;
                }}
            </ParcelBoundary>;
        })}
        <button onClick={() => fruitListParcel.push("New fruit")}>Add new fruit</button>
        {allSelected
            ? <button onClick={() => selectAll(false)}>Select none</button>
            : <button onClick={() => selectAll(true)}>Select all</button>
        }
        <button onClick={() => deleteSelectedFruit()}>Delete selected fruit</button>

        <h4>Selected fruit:</h4>
        <ul>
            {selectedFruit.map((fruitParcel) => {
                return <li key={fruitParcel.key}>
                    <button onClick={() => fruitParcel.setMeta({selected: false})}>x</button>
                    {fruitParcel.value}
                </li>;
            })}
        </ul>
    </div>);
}
