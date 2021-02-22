import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsList from '../../mocks/productsList/productsList.jsx';
import ItemDetail from '../../components/itemDetail/itemDetail.jsx';

const ItemDetailContainer = () => {
    const {itemID} = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {

        const PromesaDetail = new Promise((resolve, reject) => {
            setTimeout(() => resolve(ProductsList.find(i => i.itemID === itemID), 2000));
        });

        PromesaDetail.then((result) => {
            setItem(result);
        });
    }, [itemID]);
    
    return (
        <>
            {item && <ItemDetail item = {item}/>}
        </>
    );
};

export default ItemDetailContainer;