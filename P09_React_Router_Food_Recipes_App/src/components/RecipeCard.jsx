const RecipeCard = ({ image, title, onExplore }) => {
    return (
        <div className='min-w-2xs rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300'>
            {/* Image */}
            <img
                className='w-full h-48 object-cover'
                src={image}
                alt={title}
            />
            {/* Content */}
            <div className='p-5 flex flex-col gap-4'>
                <h2 className='text-xl font-semibold text-gray-800'>
                    {title}
                </h2>
                {/* Button */}
                <button
                    onClick={onExplore}
                    className='bg-orange-500 text-white px-5 py-2.5 rounded-xl 
                    shadow-md hover:bg-orange-600 hover:shadow-lg 
                    active:scale-95 transition-all duration-200 
                    font-semibold'
                >
                    Explore Recipe 🍽️
                </button>
            </div>
        </div>
    );
};

export default RecipeCard;
