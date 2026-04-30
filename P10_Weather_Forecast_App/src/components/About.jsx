import { useNavigate } from 'react-router';

const About = () => {
    const navigate = useNavigate();

    return (
        <div className='max-w-4xl mx-auto p-6 space-y-6'>

            {/* 🌦️ Title */}
            <h1 className='text-3xl font-bold text-gray-800'>
                About Forecastify 🌦️
            </h1>

            {/* 📖 Description */}
            <p className='text-gray-700 leading-relaxed'>
                Forecastify is a modern weather forecasting application built using React.
                It allows users to check real-time weather conditions, explore hourly forecasts,
                and visualize their location on an interactive map.
            </p>

            <p className='text-gray-700 leading-relaxed'>
                This project is part of a hands-on learning journey focused on building
                real-world applications using modern frontend technologies. It demonstrates
                API integration, state management, routing, and UI design best practices.
            </p>

            {/* 🚀 Features */}
            <div className='bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg'>
                <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                    🚀 Key Features
                </h2>
                <ul className='list-disc list-inside text-gray-700 space-y-1'>
                    <li>🌍 Search weather by city</li>
                    <li>📊 Detailed daily & hourly forecast</li>
                    <li>🗺️ Interactive map with location marker</li>
                    <li>🌡️ Temperature, humidity, wind & more</li>
                    <li>⚡ Fast and responsive UI</li>
                </ul>
            </div>

            {/* 🧰 Tech Stack */}
            <div className='bg-orange-50 border-l-4 border-orange-400 p-4 rounded-lg'>
                <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                    🧰 Tech Stack
                </h2>
                <ul className='list-disc list-inside text-gray-700 space-y-1'>
                    <li>⚛️ React (Hooks + Functional Components)</li>
                    <li>🧭 React Router</li>
                    <li>🎨 Tailwind CSS</li>
                    <li>🌐 REST API (Weather API)</li>
                    <li>🗺️ Leaflet.js (Map Integration)</li>
                </ul>
            </div>

            {/* 🎯 Purpose */}
            <div className='bg-green-50 border-l-4 border-green-400 p-4 rounded-lg'>
                <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                    🎯 Purpose
                </h2>
                <p className='text-gray-700'>
                    The goal of this project is to strengthen frontend development skills by
                    building a production-like application. It focuses on writing clean,
                    reusable components and understanding how real-world apps handle data,
                    UI, and user interactions.
                </p>
            </div>

            {/* 🔙 CTA */}
            <div className='text-center pt-4'>
                <button
                    onClick={() => navigate('/')}
                    className='bg-blue-500 text-white px-6 py-2.5 rounded-xl 
                               shadow-md hover:bg-blue-600 hover:shadow-lg 
                               active:scale-95 transition-all duration-200 
                               font-semibold'
                >
                    Back to Dashboard 🌍
                </button>
            </div>

        </div>
    );
};

export default About;
