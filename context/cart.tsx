"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Define types for the cart items (adjust based on your cart data)
interface CartItem {
    id: number,
    name: string,
    desc: string,
    photo: string,
    categoryId: number
}

interface CartContextType {
    cart: CartItem[];
    updateCart: (newCart: CartItem[]) => void;
}

const Context = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const currentCart = JSON.parse(localStorage.getItem("cart") || '[]');
            setCart(currentCart);
        }
    }, []);

    const updateCart = (newCart: CartItem[]) => {
        setCart([...newCart]);
        handleSave(newCart);
    };

    const handleSave = (newCart: CartItem[]) => {
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
