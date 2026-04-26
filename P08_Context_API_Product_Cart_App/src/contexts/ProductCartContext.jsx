import { createContext, useContext, useState } from 'react';

const ProductCartContext = createContext(null);

// custom hook
export const useCartItems = () => {
    return useContext(ProductCartContext);
};

export const ProductCartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <ProductCartContext.Provider value={{ cartItems, setCartItems }}>
            {props.children}
        </ProductCartContext.Provider>
    );
};
