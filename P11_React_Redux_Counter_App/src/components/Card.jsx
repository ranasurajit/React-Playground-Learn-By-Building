import { useSelector } from 'react-redux';

const Card = () => {
    const count = useSelector(state => state.count);

    return (
        <div
            className='
                w-[350px]
                rounded-2xl
                shadow-xl
                p-6
                text-center
                text-white
                bg-gradient-to-br from-blue-500 to-indigo-600
                hover:shadow-2xl hover:scale-105
                transition-all duration-300
            '
        >
            {/* Title */}
            <h2 className='text-xl font-semibold mb-4 opacity-90'>
                Redux Counter
            </h2>

            {/* Count Display */}
            <div className='text-5xl font-bold mb-6'>
                {count}
            </div>

            {/* Subtitle */}
            <p className='text-sm opacity-80'>
                Global state managed via Redux 🧠
            </p>
        </div>
    );
};

export default Card;
