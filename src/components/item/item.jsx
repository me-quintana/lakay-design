import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './item.scss';
import ItemCount from '../../components/itemCount/itemCount.jsx';

const Item = ({ products }) => {

    const [cart, setCart] = useState([]);
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (stock, contador) => {
        const itemInfo = {item: products, quantity: contador};
        setGoToCart(true);
        return () => {
            if(contador <= stock) {
                setCart(itemInfo);
            };
        };
    };

    return (
        <div className="col mb-4">
            <div to={`/productos/${products.itemID}`} className="card cardItem shadow">
                <Link to={`/productos/${products.itemID}`}>
                    <img src={products.image} className="card-img-top img-fluid" alt={products.name}/>
                </Link>
                <Link to={`/productos/${products.itemID}`} className="card-body py-0 px-3">
                    <h5 className="card-title m-0">{products.name}</h5>
                    <p className="mt-3">${products.price}</p>
                </Link>
                <div className="pb-3">
                    {goToCart ?
                        <Link to={`/cart`}><button type="button" className="btn shadow-sm mainBtn goToCart">Ver carrito</button></Link>
                        : <ItemCount inicial={1} stock={products.stock} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Item;