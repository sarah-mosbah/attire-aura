import { createContext, useState } from "react";


export const CartDropDownContext =  createContext({
    visibility: false,
    setVisibility: () => null
})


export const CartDropDownProvider = ({children}) => {
    const [visibility, setVisibility] = useState(false);
    const value =  {visibility, setVisibility};
    return (
        <CartDropDownContext.Provider value={value}>{children}</CartDropDownContext.Provider>
    )
}