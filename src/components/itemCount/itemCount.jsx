import React, { useEffect, useState } from 'react';
import './itemCount.scss';

const ItemCount = ({inicial, stock, onAdd}) => {

    const [contador, setContador] = useState(inicial);

    const onSubstractItem = () => {
        setContador(contador-1);
    };

    const onAddItem = () => {
        setContador(contador+1);
    };
    
    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-3">
                {(contador > 1) ?
                    <button className="btn quantityBtn" onClick={() => {onSubstractItem()}}>-</button>
                    : <button className="btn quantityBtn disabled">-</button>
                }
                <b className="px-3">{contador}</b>
                {(contador < stock) ?
                    <button className="btn quantityBtn" onClick={() => {onAddItem(stock)}}>+</button>
                    : <button className="btn quantityBtn disabled">+</button>
                }
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button className="btn buyBtn" onClick={() => {onAdd(stock, contador)}}>Agregar al carrito</button>
            </div>
        </>
    );
};

export default ItemCount;