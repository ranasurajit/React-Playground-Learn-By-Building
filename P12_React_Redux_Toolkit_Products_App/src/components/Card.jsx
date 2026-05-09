const Card = ({ product, onAddToCart }) => {
    return (
        <div className='bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 relative'>
            {/* Image */}
            <div className='h-56 bg-gray-100 flex items-center justify-center p-4'>
                <img
                    src={product.image}
                    alt={product.title}
                    className='h-full object-contain'
                />
            </div>
            {/* Content */}
            <div className='p-4 flex flex-col gap-3 flex-1'>
                {/* Title */}
                <h2 className='text-lg font-semibold text-gray-800 line-clamp-2'>
                    {product.title}
                </h2>
                {/* Category */}
                <p className='text-sm text-gray-500 capitalize'>
                    {product.category}
                </p>
                {/* Description */}
                <p className='text-sm text-gray-600 line-clamp-3'>
                    {product.description}
                </p>
                {/* Rating */}
                <div className='flex items-center justify-between text-sm mt-2'>
                    <span className='text-yellow-500 font-medium'>
                        ⭐ {product.rating.rate}
                    </span>
                    <span className='text-gray-500'>
                        ({product.rating.count} reviews)
                    </span>
                </div>
                {/* Price + Button */}
                <div className='mt-auto flex items-center justify-between'>
                    <span className='text-xl font-bold text-green-600'>
                        ${product.price}
                    </span>
                    <button
                        onClick={onAddToCart}
                        className='
                            bg-[#6C8AA6] 
                            text-white 
                            px-4 py-2 
                            rounded-xl 
                            font-medium 
                            shadow-md 
                            hover:bg-[#5a738c] 
                            hover:shadow-lg 
                            active:scale-95 
                            transition-all duration-200
                            absolute
                            right-4
                            bottom-3
                        '
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
