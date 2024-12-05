"use client"
import { createContext, useContext, useEffect, useState } from "react";
const Context = createContext()

export function CartProvider({children}){
    let savedCart = [];
    if(localStorage){
        savedCart = JSON.parse(localStorage.getItem('cart'));
    }
    const [cart, setCart] = useState(savedCart || [])
    const updateCart = (newCart) => {
        setCart([...newCart])
        if(localStorage){
            localStorage.setItem('cart', JSON.stringify(newCart))
        }
    }
    return <Context.Provider value={{cart, updateCart}}>{children}</Context.Provider>
}

export function useCartContext(){
    return useContext(Context)
}