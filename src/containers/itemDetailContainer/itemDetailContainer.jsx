import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsList from '../../mocks/productsList/productsList.jsx';
import ItemDetail from '../../components/itemDetail/itemDetail.jsx';

const ItemDetailContainer = () => {

    const {itemID} = useParams();
    const [product, setProduct] = useState(null);
    
    useEffect(() => {

        const PromesaDetail = new Promise((resolve, reject) => {
            setTimeout(() => resolve(ProductsList.find(prod => prod.itemID === itemID), 2000));
        });

        PromesaDetail.then((result) => {
            setProduct(result);
        });
    }, [itemID]);
    
    return (
        <>
            {product && <ItemDetail product = {product}/>}
        </>
    );
};

export default ItemDetailContainer;