import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './itemDetail.scss';
import ItemCount from '../../components/itemCount/itemCount.jsx';

const ItemDetail = ({ product }) => {

    const [cart, setCart] = useState([]);
    const [goToCart, setGoToCart] = useState(false);

    let { name, price, description, dimensions, image, stock } = product;

    const onAdd = (stock, contador) => {
        const itemInfo = {item: product, quantity: contador};
        setGoToCart(true);
        return () => {
            if(contador <= stock) {
                setCart(itemInfo);
            };
        };
    };

    return (
        <div className="container-fluid mx-0 my-5 px-5">
            <div className="card cardItemDetail p-sm-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={image} alt="Espejo Awondi"/>
                    </div>
                    <div className="col-md-8 card-body mt-4">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">Medidas:<br/>{dimensions}</p>
                        <p className="card-text itemPrice">${price}</p>
                        {goToCart ?
                            <Link to={`/cart`}><button type="button" className="btn shadow-sm mainBtn goToCart">Ver carrito</button></Link>
                            : <ItemCount inicial={1} stock={stock} onAdd={onAdd}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;