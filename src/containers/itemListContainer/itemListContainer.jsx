import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase.jsx';
import ItemList from '../../components/itemList/itemList.jsx';

const ItemListContainer = (props) => {
    const {categoryID} = useParams();
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const baseDatos = getFirestore();
        const itemCollection = baseDatos.collection("items");
        
        const promesaItems = new Promise ((resolve, reject) => {
            resolve((categoryID) ?
                (itemCollection.where("categoryID", "==", categoryID).get().then((value) => {
                    return value.docs.map(element => ({...element.data()}));
                }))
                :
                (itemCollection.get().then((value) => {
                    return value.docs.map(element => ({...element.data()}));
                }))
            )
        });

        promesaItems.then((result) => {
            setItem(result);
            setIsLoading(false);
        });

    }, [categoryID]);

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