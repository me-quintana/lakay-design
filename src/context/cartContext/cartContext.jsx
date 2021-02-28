import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    //Función para agregar productos al carrito
    function addItem(item, quantity) {

        //Función para saber si un producto está en el carrito
        const index = cart.findIndex(i => i.item.itemID === item.itemID);

        setCartQuantity(cartQuantity + quantity);
        setTotalPrice(totalPrice + quantity * item.price);

        //Agregar productos repetidos al carrito
        if(index !== -1) {
            let newArray = [...cart];
            newArray[index].quantity += quantity;
            setCart(newArray);
            console.log(index);
        } else {
            //Agregar productos nuevos al carrito
            setCart([...cart, {item, quantity}]);
            console.log(index);
        };
    };

    //Función para eliminar productos del carrito
    function removeItem(item, quantity) {
        setCart(cart.filter(i => i.item.itemID !== item.itemID));
        setCartQuantity(cartQuantity - quantity);
        setTotalPrice(totalPrice - quantity * item.price);
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