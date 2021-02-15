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
            <div to={`/productos/${products.itemID}`} className="card cardItem shadow">
                <Link to={`/productos/${products.itemID}`}>
                    <img src={products.image} className="card-img-top img-fluid" alt={products.name}/>
                </Link>
                <Link to={`/productos/${products.itemID}`} className="card-body py-0 px-3">
                    <h5 className="card-title m-0">{products.name}</h5>
                    <p className="precio mt-3">${products.price}</p>
                </Link>
                <div className="pb-3">   
                    <ItemCount inicial={1} stock={products.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    );
};

export default Item;