const Categories = () => {
    const categories = [
        { name: 'Breakfast', emoji: '🍳' },
        { name: 'Lunch', emoji: '🥗' },
        { name: 'Dinner', emoji: '🍲' },
        { name: 'Desserts', emoji: '🍰' },
        { name: 'Snacks', emoji: '🍟' },
        { name: 'Drinks', emoji: '🥤' },
    ];

    return (
        <div className='max-w-6xl mx-auto p-6'>
            <h1 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
                Explore Categories 🍽️
            </h1>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center
                                   hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer'
                    >
                        <div className='text-4xl mb-3'>{cat.emoji}</div>
                        <h2 className='text-lg font-semibold text-gray-700'>
                            {cat.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
