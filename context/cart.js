"use client"
import { createContext, useContext, useEffect, useState } from "react";
const Context = createContext()

export function CartProvider({children}){
    const savedCart = JSON.parse( localStorage.getItem("cart"));

    const [cart, setCart] = useState(savedCart || [])
    const updateCart = (newCart) => {
        setCart([...newCart])
        localStorage.setItem("cart", JSON.stringify(newCart));
    }
    return <Context.Provider value={{cart, updateCart}}>{children}</Context.Provider>
}

export function useCartContext(){
    return useContext(Context)
}