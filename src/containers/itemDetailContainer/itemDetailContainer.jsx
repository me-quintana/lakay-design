import React, { useEffect, useState } from 'react';
//import ProductsList from '../../mocks/productsList/productsList.jsx';
import ItemDetail from '../../components/itemDetail/itemDetail.jsx';

const ItemDetailContainer = ({ products}) => {
    
    /*useEffect(() => {

        const Promesa = new Promise((resolve, reject) => {
            setTimeout(() => resolve(ProductsList), 2000);
        });

        Promesa.then((result) => {
            setProducts(result);
        });
    }, []);*/
    
    return (
        <>
            <ItemDetail/>;
        </>
    );
};

export default ItemDetailContainer;