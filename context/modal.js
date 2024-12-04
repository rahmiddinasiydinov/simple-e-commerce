import { createContext, useContext, useState } from "react";

const Context = createContext()

export function ModalStatusProvider({children}){
    const [isModalOpen, setModalStatus] = useState(false);
    const [modalType, setModalType] = useState("category");
    
    return <Context.Provider value={{isModalOpen, setModalStatus, modalType, setModalType}}>{children}</Context.Provider>
}

export function useModalStatusContext(){
    return useContext(Context);
}