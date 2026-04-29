import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { RECIPE_API_URL } from '../constants';

const RecipeDetails = () => {
    const [recipeDetail, setRecipeDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            const recipeId = id || '1';
            const response = await axios.get(`${RECIPE_API_URL}/${recipeId}`);
            const data = response.data;
            setRecipeDetail(data);
        };
        fetchRecipeDetails();
    }, [id]);

    return (
        <div className='max-w-4xl mx-auto p-6'>

            {/* 🖼️ Image */}
            <div className='w-full h-80 overflow-hidden rounded-2xl shadow-lg'>
                <img
                    src={recipeDetail.image}
                    alt={recipeDetail.name}
                    className='w-full h-full object-cover'
                />
            </div>

            {/* 📌 Title */}
            <h1 className='text-3xl font-bold mt-6 text-gray-800'>
                {recipeDetail.name}
            </h1>

            {/* 🏷️ Meta Info */}
            <div className='flex gap-6 mt-4 text-gray-600 text-lg font-bold'>
                <span>⏱️ {recipeDetail.prepTimeMinutes} mins</span>
                <span>👨‍🍳 Servings: {recipeDetail.servings}</span>
                <span>🔥 {recipeDetail.caloriesPerServing} Calories / serving</span>
                <span>🍽️ {recipeDetail.cuisine}</span>
                <span>⭐️ {recipeDetail.rating}</span>
            </div>

            {/* 📝 Description */}
            <p className='mt-4 text-gray-700 leading-relaxed font-bold'>
                {recipeDetail.tags?.join(' | ')}
            </p>

            {/* 🥗 Ingredients */}
            <div className='mt-6'>
                <h2 className='text-xl font-semibold mb-3'>Ingredients</h2>
                <ul className='list-disc list-inside text-gray-700 space-y-1'>
                    {recipeDetail.ingredients?.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* 👨‍🍳 Instructions */}
            <div className='mt-6'>
                <h2 className='text-xl font-semibold mb-3'>Instructions</h2>
                <ul className='list-disc list-inside text-gray-700 space-y-1'>
                    {recipeDetail.instructions?.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecipeDetails;
