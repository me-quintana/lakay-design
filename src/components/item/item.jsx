import './item.scss';
import ItemCount from '../../components/itemCount/itemCount.jsx';

const Item = ({ products }) => {

    const onAdd = (stock, contador) => {
        return () => {
            if(contador <= stock) {};
        };
    };

    return (
        <div className="col mb-4">
            <div className="card shadow">
                <img src={products.image} className="card-img-top img-fluid" alt="Bondiola con papines"/>
                <div className="card-body">
                    <h5 className="card-title m-0">{products.name}</h5>
                    <p className="precio mt-3">${products.price}</p>
                    <ItemCount inicial={1} stock={products.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    );
};

export default Item;