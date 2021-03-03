import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase.jsx';
import ItemDetail from '../../components/itemDetail/itemDetail.jsx';

const ItemDetailContainer = () => {
    const {itemID} = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {

        const baseDatos = getFirestore();
        const itemCollection = baseDatos.collection("items");
        const item = itemCollection.doc(itemID);
        item.get().then((value) => {
            setItem({itemID: value.itemID, ...value.data()});
        });
    }, []);
    
    return (
        <>
            {item && <ItemDetail item = {item}/>}
        </>
    );
};

export default ItemDetailContainer;