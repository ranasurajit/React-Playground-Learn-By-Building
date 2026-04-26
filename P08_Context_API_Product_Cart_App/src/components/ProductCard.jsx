import { useCartItems } from '../contexts/ProductCartContext';

const ProductCard = (props) => {
    const { image, title, price, id } = props;

    const { cartItems, setCartItems } = useCartItems();

    const onAddToCart = (id, image, title, price) => {
        const modifiedItems = [...cartItems];
        let isFound = false;
        for (const cartItem of modifiedItems) {
            if (cartItem.id === id) {
                cartItem.quantity++;
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            modifiedItems.push({
                id,
                image,
                title,
                price,
                quantity: 1
            });
        }
        setCartItems(modifiedItems);
    };

    return (
        <div className='bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300'>
            {/* Image */}
            <div className='h-48 w-100 bg-gray-100 flex items-center justify-center'>
                <img src={image} alt={title} className='h-full object-contain p-4' />
            </div>
            {/* Content */}
            <div className='p-4 flex flex-col grow'>
                <h2 className='text-lg font-semibold text-slate-800 line-clamp-2 min-h-12'>
                    {title}
                </h2>
                <div className='flex justify-between items-center'>
                    <p className='text-xl text-blue-900 font-semibold mt-2'>
                        ${price}
                    </p>
                    <button
                        onClick={() => onAddToCart(id, image, title, price)}
                        className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold p-2 rounded-lg cursor-pointer'
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
