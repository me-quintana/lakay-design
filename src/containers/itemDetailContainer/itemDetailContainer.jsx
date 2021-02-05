import React, { useEffect, useState } from 'react';

const ItemDetailContainer = () => {

    useEffect(() => {

        const Promesa = new Promise((resolve, reject) => {
            setTimeout(() => resolve(ProductsList), 2000);
        });

        Promesa.then((result) => {
            setProducts(result);
            setIsLoading(false);
        });
    }, []);
};

export default ItemDetailContainer;