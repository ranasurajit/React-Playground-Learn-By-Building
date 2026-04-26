import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Cart from './Cart';

const PRODUCTS_API = 'https://dummyjson.com/products';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(PRODUCTS_API);
            const productList = await response.json();
            setProducts(productList.products);
        };

        fetchProducts();
    }, []);

    return (
        <div className='flex justify-between align-top'>
            <div className='flex flex-wrap gap-6 p-6 justify-center w-[60vw]'>
                {
                    products !== null ? (
                        products.map((item) => (
                            <ProductCard
                                key={item.id}
                                id={item.id}
                                image={item.images[0]}
                                title={item.title}
                                price={item.price}
                            />
                        ))
                    ) : (
                        <div>No Products found!</div>
                    )
                }
            </div>
            <div className='flex flex-wrap justify-center w-[40vw]'>
                <Cart />
            </div>
        </div>
    );
};

export default Products;
