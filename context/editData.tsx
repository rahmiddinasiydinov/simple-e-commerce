import { createContext, useContext, useState, ReactNode } from "react";

interface Data {
  id?: number;
  name?: string;
}

interface EditDataContextType {
  currentData: Data;
  setCurrentData: React.Dispatch<React.SetStateAction<Data>>;
}

const Context = createContext<EditDataContextType | undefined>(undefined);

interface EditDataProviderProps {
  children: ReactNode;
}

export function EditDataProvider({ children }: EditDataProviderProps) {
  const [currentData, setCurrentData] = useState<Data>({});

  return <Context.Provider value={{ currentData, setCurrentData }}>{children}</Context.Provider>;
}

export function useEditDataContext(): EditDataContextType {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useEditDataContext must be used within an EditDataProvider");
  }
  return context;
}
