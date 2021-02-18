import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsList from '../../mocks/productsList/productsList.jsx';
import ItemList from '../../components/itemList/itemList.jsx';

const ItemListContainer = (props) => {

    const {categoryID} = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        setIsLoading(true);

        const PromesaItems = new Promise((resolve, reject) => {
            setTimeout(() => resolve((categoryID ? ProductsList.filter(prod => prod.categoryID === categoryID) : ProductsList), 2000));
        });

        PromesaItems.then((result) => {
            setProducts(result);
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
        <ItemList products={products}/>
    );
};

export default ItemListContainer;