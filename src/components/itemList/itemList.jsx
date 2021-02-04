import './itemList.scss';
import Item from '../item/item.jsx';

const ItemList = ({ products }) => {
    return (
        <div>
            {products.map((products) => {
                return <Item key={products.id} products={products}/>;
            })}
        </div>
    );
};

export default ItemList;