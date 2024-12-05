import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext()

export function CartProvider({children}){
    const [cart, setCart] = useState([])
    const updateCart = (newCart) => {
        setCart([...newCart])
    }
    return <Context.Provider value={{cart, updateCart}}>{children}</Context.Provider>
}

export function useCartContext(){
    return useContext(Context)
}