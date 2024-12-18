import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Category } from '../types/categories';



interface CategoriesContextType {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}

const Context = createContext<CategoriesContextType | undefined>(undefined);

interface CategoriesProviderProps {
  children: ReactNode;
}

export function CategoriesProvider({ children }: CategoriesProviderProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/api/getCategories")
      .then(res => res.json())
      .then(fetchedData => {
        setCategories(fetchedData.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <Context.Provider value={{ categories, setCategories }}>{children}</Context.Provider>;
}

export function useCategoriesContext(): CategoriesContextType {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useCategoriesContext must be used within a CategoriesProvider");
  }
  return context;
}
