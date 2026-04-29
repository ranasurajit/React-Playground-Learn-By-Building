import { useWeather } from '../contexts/WeatherContext';

const Input = () => {
    const { query, setQuery } = useWeather();
    return (
        <>
            <input
                type='text'
                placeholder='Enter city or zip...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className='flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
        </>
    );
};

export default Input;
