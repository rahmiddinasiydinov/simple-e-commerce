import { createContext, useContext, useState, ReactNode } from "react";
import { Category } from "../types/categories";


interface EditCategorisDataContextType {
  currentData: Category | undefined;
  setCurrentData: React.Dispatch<React.SetStateAction<Category>>;
}

const Context = createContext<EditCategorisDataContextType | undefined>(undefined);

interface EditDataProviderProps {
  children: ReactNode;
}

export function EditCategorisDataProvider({ children }: EditDataProviderProps) {
  const [currentData, setCurrentData] = useState<Category >();

  return <Context.Provider value={{ currentData, setCurrentData }}>{children}</Context.Provider>;
}

export function useEditCategorisDataContext(): EditCategorisDataContextType {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useEditDataContext must be used within an EditDataProvider");
  }
  return context;
}
