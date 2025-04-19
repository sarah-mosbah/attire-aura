import { createContext, useState } from "react";

const addToCartItem = (cartItems, productToAdd) => {
    const newCartItems =  [...cartItems];
    const cartItem = newCartItems.find((item) => item.id === productToAdd.id);
    if(!!cartItem) {
        return cartItems.map((item) => item.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity+1}: item);
    } else {
        return [...cartItems, {...productToAdd, quantity: 1}];
    }
}

export const CartContext =  createContext({
    visibility: false,
    setVisibility: () => null,
    cartItems: [],
    addToCart: () =>  {}
})


export const CartProvider = ({children}) => {
    const [visibility, setVisibility] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (productToAdd) => {
        const newCartItems = addToCartItem(cartItems, productToAdd)
        setCartItems(newCartItems);
    }
    const value =  {visibility, setVisibility, cartItems, addToCart};



    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}