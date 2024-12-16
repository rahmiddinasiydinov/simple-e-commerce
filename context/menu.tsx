import React, { createContext, useContext, useState, ReactNode } from 'react';

type MenuStatusContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Context = createContext<MenuStatusContextType | undefined>(undefined);

interface MenuStatusProviderProps {
  children: ReactNode;
}

export function MenuStatusProvider({ children }: MenuStatusProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Context.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </Context.Provider>
  );
}

export function useMenuStatus(): MenuStatusContextType {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useMenuStatus must be used within a MenuStatusProvider');
  }
  return context;
}
