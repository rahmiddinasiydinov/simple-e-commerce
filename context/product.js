const { createContext, useState, useContext, useEffect } = require("react");


const Context = createContext();

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/getProducts")
            .then(res => res.json())
            .then(fetchedData => {
                setProducts(fetchedData.data);
                console.log(fetchedData);
                

            })
            .catch((error) => {
                console.log(error)
            });
    }, [])

    return <Context.Provider value={{ products, setProducts }}>{children} </Context.Provider>
}

export function useProductsContext() {
    return useContext(Context);
}