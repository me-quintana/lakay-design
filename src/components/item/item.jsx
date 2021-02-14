import './item.scss';
import { Link } from 'react-router-dom';
import ItemCount from '../../components/itemCount/itemCount.jsx';

const Item = ({ products }) => {

    const onAdd = (stock, contador) => {
        return () => {
            if(contador <= stock) {};
        };
    };

    return (
        <div className="col mb-4">
            <Link to={`/productos/${products.itemID}`} className="card cardItem shadow">
                <img src={products.image} className="card-img-top img-fluid" alt={products.name}/>
                <div className="card-body px-3">
                    <h5 className="card-title m-0">{products.name}</h5>
                    <p className="precio mt-3">${products.price}</p>
                    <ItemCount inicial={1} stock={products.stock} onAdd={onAdd}/>
                </div>
            </Link>
        </div>
    );
};

export default Item;