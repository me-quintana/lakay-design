import React, { useEffect, useState } from 'react';
import ProductsList from '../../mocks/productsList/productsList.jsx';
import ItemDetail from '../../components/itemDetail/itemDetail.jsx';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);
    
    useEffect(() => {

        const PromesaDetail = new Promise((resolve, reject) => {
            setTimeout(() => resolve(ProductsList.find(prod => prod.id == 1), 2000));
        });

        PromesaDetail.then((result) => {
            setProduct(result);
        });
    }, []);
    
    return (
        <>
            {product && <ItemDetail product = {product}/>};
        </>
    );
};

export default ItemDetailContainer;