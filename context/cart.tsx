"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Product } from "../types/products";

// Define types for the cart items (adjust based on your cart data)


interface CartContextType {
    cart: Product[];
    updateCart: (newCart: Product[]) => void;
}

const Context = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const currentCart = JSON.parse(localStorage.getItem("cart") || '[]');
            setCart(currentCart);
        }
    }, []);

    const updateCart = (newCart: Product[]) => {
        setCart([...newCart]);
        handleSave(newCart);
    };

    const handleSave = (newCart: Product[]) => {
        if (typeof window !== "undefined" && window.localStorage) {
            localStorage.setItem("cart", JSON.stringify(newCart));
        }
    };

    return <Context.Provider value={{ cart, updateCart }}>{children}</Context.Provider>;
}

export function useCartContext(): CartContextType {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider");
    }
    return context;
}
