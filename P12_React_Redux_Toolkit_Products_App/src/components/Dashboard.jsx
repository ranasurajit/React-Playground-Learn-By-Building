import { useEffect, useState } from 'react';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const Dashboard = () => {
    const PRODUCTS_API_URL = 'https://fakestoreapi.com';

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`${PRODUCTS_API_URL}/products`);
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const onAddToCart = (item) => {
        dispatch(addItem({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: 1
        }));
    };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
            {
                products.map((item) => (
                    <Card
                        key={item.id}
                        product={item}
                        onAddToCart={() => { onAddToCart(item) }}
                    />
                ))
            }
        </div>
    );
};

export default Dashboard;
