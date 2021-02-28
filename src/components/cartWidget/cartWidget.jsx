import { Link } from 'react-router-dom';
import './cartWidget.scss';
import { useCartContext } from '../../context/cartContext/cartContext.jsx';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidget = () => {
    const { cartQuantity } = useCartContext();

    return (
        <>
            <Link to={`/carrito`} className="navbarIcon p-2">
                <FontAwesomeIcon icon={faShoppingCart} type="button" className="iconFontAwesone"/>
                {cartQuantity > 0 &&
                    <p className="cartQuantity">{cartQuantity}</p>
                }
                <p className="m-0">Carrito</p>
            </Link>
        </>
    );
};

export default CartWidget;