import { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import { useNavigate } from 'react-router';
import { RECIPE_API_URL } from '../constants';

const Dashboard = () => {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await axios.get(RECIPE_API_URL);
            const data = response.data;
            setRecipes(data.recipes);
        };
        fetchRecipes();
    }, []);

    const exploreRecipe = (recipeId) => {
        navigate(`/recipes/${recipeId}`);
    };

    return (
        <div className='flex flex-wrap gap-6 justify-center p-6'>
            {
                recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        image={recipe.image}
                        title={recipe.name}
                        onExplore={() => {
                            exploreRecipe(recipe.id)
                        }}
                    />
                ))
            }
        </div>
    );
};

export default Dashboard;
