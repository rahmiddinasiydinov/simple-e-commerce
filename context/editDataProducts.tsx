import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../types/products";


interface EditProductsDataContextType {
  currentData: Product | undefined;
  setCurrentData: React.Dispatch<React.SetStateAction<Product | undefined>>;
}

const Context = createContext<EditProductsDataContextType | undefined>(undefined);

interface EditDataProviderProps {
  children: ReactNode;
}

export function EditProductsDataProvider({ children }: EditDataProviderProps) {
  const [currentData, setCurrentData] = useState<Product >();

  return <Context.Provider value={{ currentData, setCurrentData }}>{children}</Context.Provider>;
}

export function useEditProductsDataContext(): EditProductsDataContextType {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useEditDataContext must be used within an EditDataProvider");
  }
  return context;
}
