
import { createContext, useState, useEffect } from "react";

const addToCartItem = (cartItems, productToAdd) => {
    const newCartItems =  [...cartItems];
    const cartItem = newCartItems.find((item) => item.id === productToAdd.id);
    if(!!cartItem) {
        return cartItems.map((item) => item.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity+1}: item);
    } else {
        return [...cartItems, {...productToAdd, quantity: 1}];
    }
}



const decrementCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === productToRemove.id);

  if (!existingCartItem) return cartItems;

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== productToRemove.id);
  }

  return cartItems.map(item =>
    item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === productToRemove.id);
    if(!existingCartItem) return cartItems;

    return cartItems.filter(item => item.id !== productToRemove.id);
}

export const CartContext =  createContext({
    visibility: false,
    setVisibility: () => null,
    cartItems: [],
    addToCart: () =>  {},
    numberOfItems: 0,
    decrementQuantityOfItem: () => {},
    removeItem: () => {},
})


export const CartProvider = ({children}) => {
    const [visibility, setVisibility] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [numberOfItems, setNumberOfItems] = useState(0);
    const addToCart = (productToAdd) => {
        const newCartItems = addToCartItem(cartItems, productToAdd);
        setCartItems(newCartItems);
     
    }

    const decrementQuantityOfItem = (productToRemove) => {
       const newCartItems = decrementCartItem(cartItems, productToRemove);
         setCartItems(newCartItems);
    }


    const removeItem = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
          setCartItems(newCartItems);
     }

    useEffect(() => {
        calculateNumberOfItems();
    }, [cartItems])

    const calculateNumberOfItems = () => {
        const numberOfItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        setNumberOfItems(numberOfItems);
    }


    const value =  {visibility, setVisibility, cartItems, addToCart, numberOfItems, decrementQuantityOfItem, removeItem};



    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}