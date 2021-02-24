import './cart.scss';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from '../../context/cartContext/cartContext.jsx';

const Cart = () => {
    const { cartQuantity } = useCartContext();

    return (
        <>
            <a className="navbarIcon">
                <FontAwesomeIcon icon={faShoppingCart} type="button" href="#" className="iconFontAwesone"/>
                <span className="cartQuantity">{cartQuantity}</span>
                <p className="m-0">Carrito</p>
            </a>
        </>
    );
};

export default Cart;