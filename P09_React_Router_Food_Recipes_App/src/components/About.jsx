import { useNavigate } from 'react-router';

const About = () => {
    const navigate = useNavigate();

    const onExplore = () => {
        navigate('/');
    };

    return (
        <div className='max-w-4xl mx-auto p-6'>

            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
                About RecipeVerse 🍳
            </h1>

            <p className='text-gray-700 leading-relaxed mb-4'>
                RecipeVerse is a modern cooking recipe application built using React.
                It allows users to explore a variety of delicious recipes, view detailed
                instructions, and discover new cuisines from around the world.
            </p>

            <p className='text-gray-700 leading-relaxed mb-4'>
                This project is part of a learning journey focused on building real-world
                React applications. It demonstrates concepts like routing, API integration,
                state management, and reusable component design.
            </p>

            <div className='mt-6 bg-orange-50 border-l-4 border-orange-400 p-4 rounded-lg'>
                <p className='text-gray-800 font-medium'>
                    🚀 Tech Stack:
                </p>
                <ul className='list-disc list-inside text-gray-700 mt-2'>
                    <li>React (Functional Components & Hooks)</li>
                    <li>React Router</li>
                    <li>Tailwind CSS</li>
                    <li>REST API Integration</li>
                </ul>
            </div>

            <div className='mt-6'>
                <button
                    className='bg-orange-500 text-white px-5 py-2.5 rounded-xl 
                               shadow-md hover:bg-orange-600 hover:shadow-lg 
                               active:scale-95 transition-all duration-200 
                               font-semibold'
                    onClick={onExplore}
                >
                    Explore Recipes 🍽️
                </button>
            </div>
        </div>
    );
};

export default About;
