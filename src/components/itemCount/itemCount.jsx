import './itemCount.scss';

const ItemCount = ({stock, contador, onSubstract, onAdd}) => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-3">
                {(contador > 1) ?
                    <button className="btn quantityBtn" onClick={() => {onSubstract()}}>-</button>
                    : <button className="btn quantityBtn disabled">-</button>
                }
                <b className="px-3">{contador}</b>
                {(contador < stock) ?
                    <button className="btn quantityBtn" onClick={() => {onAdd(stock)}}>+</button>
                    : <button className="btn quantityBtn disabled">+</button>
                }
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button className="btn buyBtn">Agregar al carrito</button>
            </div>
        </>
    );
};

export default ItemCount;