import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './itemDetail.scss';
import ItemCount from '../../components/itemCount/itemCount.jsx';
import { useCartContext } from '../../context/cartContext/cartContext.jsx';

const ItemDetail = ({ item }) => {
    const [goToCart, setGoToCart] = useState(false);

    const { addItem } = useCartContext();

    const onAdd = (evt, quantity) => {
        evt.stopPropagation();

        addItem(item, quantity);

        setGoToCart(true);
    };

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
                            <Link to={`/carrito`}><button type="button" className="btn shadow-sm mainBtn goToCart">Ver carrito</button></Link>
                            : <ItemCount inicial={1} stock={item.stock} onAdd={onAdd}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;