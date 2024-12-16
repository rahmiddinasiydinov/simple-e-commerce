import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Product } from '../types/products';


interface ProductsContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Context = createContext<ProductsContextType | undefined>(undefined);

interface ProductsProviderProps {
  children: ReactNode;
}

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/getProducts")
      .then(res => res.json())
      .then(fetchedData => {
        setProducts(fetchedData.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <Context.Provider value={{ products, setProducts }}>{children}</Context.Provider>;
}

export function useProductsContext(): ProductsContextType {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useProductsContext must be used within a ProductsProvider");
  }
  return context;
}
