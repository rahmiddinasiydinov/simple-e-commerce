const { createContext, useState, useContext, useEffect } = require("react");


const Context = createContext();

export function CategoriesProvider({ children }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("/api/getCategories")
            .then(res => res.json())
            .then(fetchedData => {
                setCategories(fetchedData.data);
                

            })
            .catch((error) => {
                console.log(error)
            });
    }, [])

    return <Context.Provider value={{ categories, setCategories }}>{children} </Context.Provider>
}

export function useCategoriesContext() {
    return useContext(Context);
}