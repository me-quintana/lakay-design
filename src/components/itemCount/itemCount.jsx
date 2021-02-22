import React, { useState } from 'react';
import './itemCount.scss';

const ItemCount = ({ inicial, stock, onAdd }) => {
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
            <div className="card-footer cardFooterItemCount pt-3 pb-0">
                <button type="button" className="btn shadow-sm mainBtn addToCart" data-id="1" onClick={(evt) => {onAdd(evt, contador)}}>Agregar</button>
            </div>
        </>
    );
};

export default ItemCount;