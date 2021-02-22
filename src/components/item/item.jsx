import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './item.scss';
import ItemCount from '../../components/itemCount/itemCount.jsx';

const Item = ({ item }) => {
    const [compra, setCompra] = useState([]);
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (stock, quantity) => {
        const itemInfo = {item: item, quantity: quantity};

        setGoToCart(true);
        
        return () => {
            if(quantity <= stock) {
                setCompra(itemInfo);
            };
        };
    };

    return (
        <div className="col mb-4">
            <div to={`/productos/${item.itemID}`} className="card cardItem shadow">
                <Link to={`/productos/${item.itemID}`}>
                    <img src={item.image} className="card-img-top img-fluid" alt={item.name}/>
                </Link>
                <Link to={`/productos/${item.itemID}`} className="card-body py-0 px-3">
                    <h5 className="card-title m-0">{item.name}</h5>
                    <p className="mt-3">${item.price}</p>
                </Link>
                <div className="pb-3">
                    {goToCart ?
                        <Link to={`/cart`}><button type="button" className="btn shadow-sm mainBtn goToCart">Ver carrito</button></Link>
                        : <ItemCount inicial={1} stock={item.stock} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Item;