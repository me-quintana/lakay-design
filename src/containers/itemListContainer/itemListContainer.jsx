import React, { useEffect, useState } from 'react';
import { getFirestore } from '../../firebase/firebase.jsx';
import ItemList from '../../components/itemList/itemList.jsx';

const ItemListContainer = (props) => {
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const baseDatos = getFirestore();
        const itemCollection = baseDatos.collection("items");
        itemCollection.get().then((value) => {
            let auxItems = value.docs.map(async (item) => {
                const categoryCollection = baseDatos.collection("categories");
                let auxCategorias = await categoryCollection.doc(item.data().categoryID).get();
                return {...item.data(), category: auxCategorias.data()};
            });
            setIsLoading(false);
            setItem(auxItems);
        });
    }, []);

    if(isLoading) {
        return (
            <div className="d-flex justify-content-center">
                <img src="/images/loading.gif" className="loading" alt="Loading"/>
            </div>
        );
    };

    return (
        <ItemList item={item}/>
    );
};

export default ItemListContainer;