import { useEffect, useState } from 'react';
import { useWeather } from '../contexts/WeatherContext';
import StatCard from './StatCard';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const Forecast = () => {
    const { query } = useWeather();
    const [forecastData, setForecastData] = useState(null);
    const [location, setLocation] = useState('');

    useEffect(() => {
        const fetchWeatherForecast = async () => {
            try {
                const queryParam = query ? query : 'India';
                const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${queryParam}&aqi=yes`;
                const response = await fetch(URL);
                const data = await response.json();
                if (data.error) {
                    setForecastData(null);
                    console.log(data?.error?.message);
                } else {
                    setLocation(`${data?.location?.name}, ${data?.location?.country}`);
                    setForecastData(data?.forecast?.forecastday?.[0]);
                }
            } catch (error) {
                setForecastData(null);
                console.log(error);
            }
        };
        fetchWeatherForecast();
    }, [query]);
    if (!forecastData) {
        return (<h2>No Forecast Data Found!</h2>);
    }
    const { day, astro, hour, date } = forecastData;
    return (
        <div className='max-w-6xl mx-auto p-6 space-y-6'>

            {/* 🌤️ Top Summary */}
            <div className='bg-linear-to-br from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between'>

                {/* Left */}
                <div>
                    <h1 className='text-2xl font-bold text-white mb-2.5'>
                        📍 {location}
                    </h1>
                    <h2 className='text-lg font-bold text-white'>
                        📅 {date}
                    </h2>
                    <p className='text-white mt-2'>
                        {day.condition.text}
                    </p>

                    <div className='mt-4 text-lg font-semibold text-white'>
                        🌡️ {day.avgtemp_c}°C (Avg)
                    </div>
                </div>

                {/* Right */}
                <div className='flex flex-col items-center mt-4 md:mt-0'>
                    <img
                        src={`https:${day.condition.icon}`}
                        alt='weather'
                        className='w-20 h-20'
                    />
                    <span className='text-sm text-white'>
                        UV: {day.uv}
                    </span>
                </div>
            </div>

            {/* 📊 Stats Grid */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <StatCard label='Max Temp' value={`${day.maxtemp_c}°C`} />
                <StatCard label='Min Temp' value={`${day.mintemp_c}°C`} />
                <StatCard label='Humidity' value={`${day.avghumidity}%`} />
                <StatCard label='Rain Chance' value={`${day.daily_chance_of_rain}%`} />
                <StatCard label='Wind' value={`${day.maxwind_kph} km/h`} />
                <StatCard label='Visibility' value={`${day.avgvis_km} km`} />
                <StatCard label='Sunrise' value={astro.sunrise} />
                <StatCard label='Sunset' value={astro.sunset} />
            </div>

            {/* 🕒 Hourly Forecast */}
            <div>
                <h2 className='text-xl font-semibold mb-4 text-gray-800'>
                    Hourly Forecast
                </h2>

                <div className='flex gap-4 overflow-x-auto pb-2'>
                    {hour.map((h, index) => (
                        <div
                            key={index}
                            className='min-w-30 bg-white rounded-xl shadow-md p-4 text-center'
                        >
                            <p className='text-sm text-gray-500'>
                                {h.time.split(' ')[1]}
                            </p>

                            <img
                                src={`https:${h.condition.icon}`}
                                alt='icon'
                                className='mx-auto w-10 h-10'
                            />

                            <p className='font-semibold text-gray-800'>
                                {h.temp_c}°C
                            </p>

                            <p className='text-xs text-gray-500'>
                                💧 {h.humidity}%
                            </p>

                            <p className='text-xs text-gray-500'>
                                🌬️ {h.wind_kph} km/h
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Forecast;
