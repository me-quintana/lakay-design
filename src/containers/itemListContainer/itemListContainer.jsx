import React, { useEffect, useState } from 'react';
import './itemListContainer.scss';
import ItemCount from '../../components/itemCount/itemCount.jsx';
import ProductsList from '../../mocks/productsList/productsList.jsx';
import ItemList from '../../components/itemList/itemList.jsx';

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const onAdd = (stock, contador) => {
        return () => {
            if(contador <= stock) {};
        };
    };

    useEffect(() => {

        setIsLoading(true);

        const Promesa = new Promise((resolve, reject) => {
            setTimeout(() => resolve(ProductsList), 2000);
        });

        Promesa.then((result) => {
            setProducts(result);
            setIsLoading(false);
        });
    }, []);

    if(isLoading) {
        return <h1>Cargando productos...</h1>;
    };

    return (
        <>
            <ItemCount inicial={1} stock={10} onAdd={onAdd}/>
            <ItemList products={products}/>
        </>
    );
};

export default ItemListContainer;