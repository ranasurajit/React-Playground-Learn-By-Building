import { createContext, useContext, useEffect, useState } from 'react';

const API_KEY = '0d43ff1077dd4bbc83c171842262704';

const WeatherContext = createContext(null);

// Custom Hook
export const useWeather = () => {
    return useContext(WeatherContext);
};

export const WeatherContextProvider = (props) => {
    const [query, setQuery] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async (query) => {
        if (!query) {
            return;
        }
        try {
            const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&aqi=yes`;
            const response = await fetch(URL);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Getting error in fetching the weather!');
        }
    };

    const searchQuery = () => {
        if (!query.trim()) {
            return;
        }
        fetchWeather(query.trim());
    };

    const refreshQuery = () => {
        if (!query.trim()) {
            return;
        }
        fetchWeather(query.trim());
    };

    useEffect(() => {
        if (!navigator.geolocation) {
            console.error('Geo-location is not supported!');
            return;
        }
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            const locationQuery = `${latitude},${longitude}`;
            fetchWeather(locationQuery);
        }, (error) => {
            console.error('Error in fetching the location', error);
            const fallback = 'India';
            fetchWeather(fallback);
        })
    }, []);

    return (
        <WeatherContext.Provider value={
            { query, weatherData, setQuery, searchQuery, refreshQuery }
        }>
            {props.children}
        </WeatherContext.Provider>
    );
};
