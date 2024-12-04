import { createContext, useContext, useState } from "react";

const Context = createContext()

export function EditDataProvider({ children }) {
    const [currentData, setCurrentData] = useState({});

    return <Context.Provider value={{
        currentData, setCurrentData
    }}>{children}</Context.Provider>
}

export function useEditDataContext(){
    return useContext(Context);
}