import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './itemDetail.scss';
import ItemCount from '../../components/itemCount/itemCount.jsx';
import { UseCartContext } from '../../context/cartContext/cartContext.jsx';

const ItemDetail = ({ item }) => {
    const [goToCart, setGoToCart] = useState(false);

    const { cart, cartQuantity, totalPrice,  addItem, removeItem } = UseCartContext();

    const onAdd = (evt, quantity) => {
        evt.stopPropagation();

        addItem(item, quantity);

        setGoToCart(true);
    };

    const remove = () => {
        removeItem();
    };

    console.log(cart);
    console.log(cartQuantity);
    console.log(totalPrice);

    return (
        <div className="container-fluid mx-0 my-5 px-5">
            <div className="card cardItemDetail p-sm-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={item.image} alt="Espejo Awondi"/>
                    </div>
                    <div className="col-md-8 card-body mt-4">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">Medidas:<br/>{item.dimensions}</p>
                        <p className="card-text itemPrice">${item.price}</p>
                        {goToCart ?
                            <Link to={`/cart`}><button type="button" className="btn shadow-sm mainBtn goToCart">Ver carrito</button></Link>
                            : <ItemCount inicial={1} stock={item.stock} onAdd={onAdd}/>
                        }
                        <button type="button" className="btn shadow-sm mainBtn" onClick={() => {remove()}}>REMOVE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;