import { useWeather } from '../contexts/WeatherContext';

const Card = () => {
    const { weatherData } = useWeather();

    const { current, location } = weatherData ?? {};

    if (!weatherData || !weatherData.current || !weatherData.location) {
        return (
            <div className='bg-linear-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-xl w-full max-w-md mx-auto mt-10'>
                <p className='text-center'>No data available. Search for a city.</p>
            </div>
        );
    }

    return (
        <div className='bg-linear-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-xl w-full max-w-md mx-auto mt-10'>
            {/* City Name */}
            <h2 className='text-2xl font-semibold mb-2'>
                {location.name}, {location.country}
            </h2>
            <div className='flex items-center justify-between'>
                <p className='opacity-80'>
                    Coordinates
                </p>
                <p className='font-semibold'>
                    {location.lat}, {location.lon}
                </p>
            </div>
            {/* Temperature */}
            <div className='flex items-center justify-between'>
                <p className='text-5xl font-bold'>
                    {Math.round(current.temp_c)}°C
                </p>
                {/* Weather Icon */}
                <img
                    src={current.condition.icon}
                    alt='weatherData icon'
                    className='w-16 h-16'
                />
            </div>
            {/* Description */}
            <p className='capitalize text-lg mt-2'>
                {current.condition.text}
            </p>
            {/* Extra Info */}
            <div className='grid grid-cols-2 gap-4 mt-4 text-sm'>
                <div>
                    <p className='opacity-80'>Feels Like</p>
                    <p className='font-semibold'>
                        {Math.round(current.feelslike_c)}°C
                    </p>
                </div>
                <div>
                    <p className='opacity-80'>Humidity</p>
                    <p className='font-semibold'>
                        {current.humidity}%
                    </p>
                </div>
                <div>
                    <p className='opacity-80'>Wind</p>
                    <p className='font-semibold'>
                        {current.wind_mph} m/hr
                    </p>
                </div>
                <div>
                    <p className='opacity-80'>Pressure</p>
                    <p className='font-semibold'>
                        {current.pressure_in} hPa
                    </p>
                </div>
                <div>
                    <p className='opacity-80'>Last Updated</p>
                    <p className='font-semibold'>
                        {current.last_updated} hours
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
