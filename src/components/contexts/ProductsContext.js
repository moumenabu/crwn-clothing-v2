import { useState, useEffect ,createContext } from "react";
import productsArr from "../data/shop-data.json";


export const ProductsContext = createContext(null);

export function ProductsContextProvider({children}) {
    const [products, setProducts] = useState([]);
    const value = {products}; // spreads the array into an object element - i.e. {products: [...]} - using an object is best practice as in the future more states might be passed 
    
    useEffect(() => setProducts(productsArr), []);
    
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}