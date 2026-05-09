import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);

    const totalAmount = cartItems.reduce((total, item) => {
        total = total + item.price * item.quantity;
        return total;
    }, 0);

    return (
        <div className='p-6 max-w-4xl mx-auto'>
            <h1 className='text-2xl font-bold mb-6 text-gray-800'>
                🛒 Your Cart
            </h1>
            {cartItems.length === 0 ? (
                <p className='text-gray-500 text-center'>
                    Your cart is empty.
                </p>
            ) : (
                <div className='flex flex-col gap-4'>
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className='
                                flex justify-between items-center
                                bg-white shadow-md rounded-xl p-4
                                hover:shadow-lg transition
                            '
                        >
                            {/* Product Info */}
                            <div className='flex flex-col'>
                                <h2 className='text-lg font-semibold text-gray-800'>
                                    {item.title}
                                </h2>
                                <p className='text-sm text-gray-500'>
                                    Quantity: {item.quantity}
                                </p>
                            </div>
                            {/* Price */}
                            <div className='text-right'>
                                <p className='text-lg font-bold text-green-600'>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                                <p className='text-sm text-gray-400'>
                                    ${item.price} each
                                </p>
                            </div>
                        </div>
                    ))}
                    {/* Total Section */}
                    <div
                        className='
                            mt-6 p-4 rounded-xl
                            bg-linear-to-r from-indigo-500 to-blue-500
                            text-white flex justify-between items-center
                            shadow-lg
                        '
                    >
                        <span className='text-lg font-semibold'>
                            Total Amount
                        </span>
                        <span className='text-xl font-bold'>
                            ${totalAmount.toFixed(2)}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
