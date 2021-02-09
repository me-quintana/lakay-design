import './itemList.scss';
import Item from '../item/item.jsx';

const ItemList = ({ products }) => {
     
    return (
        <div className="container-fluid row row-cols-1 row-cols-sm-2 row-cols-lg-3 mx-0 mt-5">
            {products.map((products) => {
                return <Item key={products.id} products={products}/>;
            })}
        </div>
    );
};

export default ItemList;