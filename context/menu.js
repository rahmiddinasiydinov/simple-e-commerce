import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

export  function MenuStatusProvider({children}) {
const [isOpen, setIsOpen] = useState(false);
  return (
    <Context.Provider value={{isOpen, setIsOpen}}>{children}</Context.Provider>
  )
}

export function useMenuStatus(){
    return useContext(Context);
}

