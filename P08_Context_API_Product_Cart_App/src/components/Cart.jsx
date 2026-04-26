import { useCartItems } from '../contexts/ProductCartContext';

const Cart = () => {
    const { cartItems, setCartItems } = useCartItems();

    const totalPrice = cartItems.reduce((total, item) => {
        return total + (item.quantity * item.price);
    }, 0);

    const onAdd = (item) => {
        const modifiedItems = [...cartItems];
        for (const cartItem of modifiedItems) {
            if (cartItem.id === item.id) {
                cartItem.quantity++;
            }
        }
        setCartItems(modifiedItems);
    };

    const onRemove = (item) => {
        const modifiedItems = [...cartItems];
        for (const cartItem of modifiedItems) {
            if (cartItem.id === item.id) {
                cartItem.quantity--;
                if (cartItem.quantity === 0) {
                    onDelete(item.id);
                    return;
                }
            }
        }
        setCartItems(modifiedItems);
    };

    const onDelete = (itemId) => {
        const modifiedItems = cartItems.filter((cartItem) => {
            return cartItem.id !== itemId;
        });
        setCartItems(modifiedItems);
    };

    return (
        <div className='w-screen m-6.25 p-6 bg-white border border-slate-200 shadow-sm'>
            <h1 className='text-2xl font-bold mb-6'>Shopping Cart</h1>
            <div className='flex flex-col gap-4'>
                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className='flex items-center justify-between shadow-md rounded-xl p-4 bg-slate-50 hover:bg-slate-100'
                    >
                        {/* Left: Image + Title */}
                        <div className='flex items-center gap-4 w-1/2'>
                            <img
                                src={item.image}
                                alt={item.title}
                                className='h-20 w-20 object-contain bg-gray-100 p-2 rounded'
                            />
                            <div>
                                <h2 className='font-semibold text-gray-800 line-clamp-2'>
                                    {item.title}
                                </h2>
                                <p className='text-blue-900 font-semibold'>
                                    ₹{item.price}
                                </p>
                            </div>
                        </div>
                        {/* Middle: Quantity Controls */}
                        <div className='flex items-center gap-3'>
                            <button
                                onClick={() => onRemove(item)}
                                className='px-3 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 cursor-pointer'
                            >
                                -
                            </button>
                            <span className='font-medium'>{item.quantity}</span>
                            <button
                                onClick={() => onAdd(item)}
                                className='px-3 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 cursor-pointer'
                            >
                                +
                            </button>
                        </div>
                        {/* Right: Total + Delete */}
                        <div className='flex items-center gap-6'>
                            <p className='text-blue-900 font-semibold'>
                                ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <button
                                onClick={() => onDelete(item.id)}
                                className='text-red-400 hover:text-red-600 cursor-pointer'
                            >
                                ❌
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* Total Section */}
            <div className='mt-8 flex justify-between items-center border-t pt-4'>
                <h2 className='text-xl font-bold'>Total:</h2>
                <p className='text-xl text-blue-900 font-semibold'>
                    ${totalPrice.toFixed(2)}
                </p>
            </div>
            {/* Checkout Button */}
            <button className='mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition cursor-pointer'>
                Proceed to Checkout
            </button>
        </div>
    );
};

export default Cart;
