"use client"
import { createContext, useContext, useEffect, useState } from "react";
const Context = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            console.log("Hello");
            const currentCart = JSON.parse(localStorage.getItem("cart"));
            
            setCart(currentCart || []);
            
        }
    }, [])
    useEffect(()=>{
        console.log(cart);
        
    },[cart] )
    const updateCart = (newCart) => {
        setCart([...newCart])
        handleSave(newCart)
    }

    const handleSave = (newCart) => {
            if (typeof window !== "undefined" && window.localStorage) {
                localStorage.setItem("cart", JSON.stringify(newCart))
                "Hello"
            }
    }


    return <Context.Provider value={{ cart, updateCart }}>{children}</Context.Provider>
}

export function useCartContext() {
    return useContext(Context)
}