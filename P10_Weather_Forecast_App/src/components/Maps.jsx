import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useWeather } from '../contexts/WeatherContext';

const Maps = () => {
    const { weatherData } = useWeather();
    const coordinate = [weatherData.location.lat, weatherData.location.lon];

    return (
        <>
            <MapContainer center={coordinate} zoom={10} style={{ height: '100vh', width: '100%' }}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                <Marker position={coordinate} />
            </MapContainer>
        </>
    );
};

export default Maps;
