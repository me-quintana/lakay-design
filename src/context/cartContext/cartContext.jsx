import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const UseCartContext = () => useContext(CartContext);

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    //Función para agregar productos al carrito
    function addItem(item, quantity) {

        //Función para saber si un producto está en el carrito
        const isInCart = cart.findIndex(i => i.id === item.id);

        setCartQuantity(cartQuantity + quantity);
        setTotalPrice(totalPrice + quantity * item.price);

        //Agregar productos repetidos al carrito
        if(isInCart !== -1) {
            setCart(cart.map(i => (i.id === item.id ? {...i, quantity: i.quantity + quantity} : i )));
        } else {
            //Agregar productos nuevos al carrito
            setCart([...cart, {...item, quantity: quantity}]);
        };
    };

    //Función para eliminar productos del carrito
    function removeItem() {
    };

    //Función para vaciar el carrito
    function emptyCart() {
        setCart([]);
        setCartQuantity(0);
        setTotalPrice(0);
    };

    return (
        <CartContext.Provider value={{ cart, cartQuantity, totalPrice, addItem, removeItem, emptyCart }}>
            {children}
        </CartContext.Provider>
    );
};