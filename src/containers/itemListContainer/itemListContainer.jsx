import React, { useEffect, useState } from 'react';
import './itemListContainer.scss';
import ItemCount from '../../components/itemCount/itemCount.jsx';

const ItemListContainer = (props) => {

    const [contador, setContador] = useState(1);

    const onSubstract = (stock) => {
        setContador(contador-1);
    };

    const onAdd = (stock) => {
        setContador(contador+1);
    };

    return (
        <ItemCount stock={10} contador={contador} onSubstract={onSubstract} onAdd={onAdd}/>
    );
};

export default ItemListContainer;