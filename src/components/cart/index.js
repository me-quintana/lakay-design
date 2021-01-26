import './style.css';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = () => {
    return (
        <>
            <a className="navbarIcon">
                <FontAwesomeIcon icon={faShoppingCart} type="button" href="#" className="iconFontAwesone"/>
                <p className="m-0">Carrito</p>
            </a>
        </>
    );
};

export default Cart;