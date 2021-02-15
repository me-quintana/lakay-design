import './itemDetail.scss';
import ItemCount from '../../components/itemCount/itemCount.jsx';

const ItemDetail = ({ product }) => {

    const onAdd = (stock, contador) => {
        return () => {
            if(contador <= stock) {};
        };
    };

    let { name, price, description, dimensions, image, stock } = product;

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
                        <p className="card-text precio">${price}</p>
                        <ItemCount inicial={1} stock={stock} onAdd={onAdd}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;