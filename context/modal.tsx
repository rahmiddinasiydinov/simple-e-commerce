import React, { createContext, useContext, useState, ReactNode } from "react";

type ModalStatusContextType = {
  isModalOpen: boolean;
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: string;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
};

const Context = createContext<ModalStatusContextType | undefined>(undefined);

interface ModalStatusProviderProps {
  children: ReactNode;
}

export function ModalStatusProvider({ children }: ModalStatusProviderProps) {
  const [isModalOpen, setModalStatus] = useState(false);
  const [modalType, setModalType] = useState("category");

  return (
    <Context.Provider value={{ isModalOpen, setModalStatus, modalType, setModalType }}>
      {children}
    </Context.Provider>
  );
}

export function useModalStatusContext(): ModalStatusContextType {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useModalStatusContext must be used within a ModalStatusProvider");
  }
  return context;
}