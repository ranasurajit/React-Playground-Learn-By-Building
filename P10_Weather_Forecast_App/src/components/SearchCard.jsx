import Input from './Input';
import ActionButton from './ActionButton';
import { useWeather } from '../contexts/WeatherContext';

const SearchCard = () => {
    const { query, setQuery, searchQuery, refreshQuery } = useWeather();

    return (
        <div className='bg-white p-4 rounded-2xl shadow-2xl w-full max-w-md mx-auto flex items-center gap-3 mt-3.5'>
            {/* Input */}
            <Input />
            {/* Button */}
            <ActionButton label='Search' onClick={searchQuery} />
            <ActionButton label='Refresh' onClick={refreshQuery} />
        </div>
    )
};

export default SearchCard;
