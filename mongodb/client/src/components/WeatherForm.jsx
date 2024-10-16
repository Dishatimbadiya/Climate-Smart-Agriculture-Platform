// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\client\src\components\WeatherForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

const WeatherForm = () => {
    const [zipCode, setZipCode] = useState('');
    const [tempMetric, setTempMetric] = useState('imperial');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const saveFormData = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:3000/api/weather', {
                zipCode,
                tempMetric,
            });
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error saving weather data:', error);
            setError('Failed to fetch weather data. Please try again.');
        }
    };

    const renderCurrentWeather = () => {
        if (!weatherData) return null;

        const { coord, weather, main, wind, clouds, sys, name, timezone } = weatherData;

        return (
            <div>
                <h2 style={{ color: "black" }}>Current Weather Data for {name}</h2>
                <p><strong>Coordinates:</strong> {`Lon: ${coord.lon}, Lat: ${coord.lat}`}</p>
                <p><strong>Condition:</strong> {`${weather[0].main} - ${weather[0].description}`}</p>
                <p><strong>Temperature:</strong> {`${main.temp}° ${tempMetric === 'imperial' ? 'F' : 'C'}`}</p>
                <p><strong>Feels Like:</strong> {`${main.feels_like}° ${tempMetric === 'imperial' ? 'F' : 'C'}`}</p>
                <p><strong>Min Temperature:</strong> {`${main.temp_min}° ${tempMetric === 'imperial' ? 'F' : 'C'}`}</p>
                <p><strong>Max Temperature:</strong> {`${main.temp_max}° ${tempMetric === 'imperial' ? 'F' : 'C'}`}</p>
                <p><strong>Pressure:</strong> {`${main.pressure} hPa`}</p>
                <p><strong>Humidity:</strong> {`${main.humidity}%`}</p>
                <p><strong>Wind Speed:</strong> {`${wind.speed} m/s at ${wind.deg}°`}</p>
                <p><strong>Cloudiness:</strong> {`${clouds.all}%`}</p>
                <p><strong>Sunrise:</strong> {new Date(sys.sunrise * 1000).toLocaleTimeString()} (UTC+{timezone / 3600})</p>
                <p><strong>Sunset:</strong> {new Date(sys.sunset * 1000).toLocaleTimeString()} (UTC+{timezone / 3600})</p>
            </div>
        );
    };

    return (
        <div>
            <h1>Weather Form</h1>
            <form onSubmit={saveFormData}>
                <label>
                    Zip Code:
                    <input
                        type="text"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Temperature Unit:
                    <select value={tempMetric} onChange={(e) => setTempMetric(e.target.value)}>
                        <option value="imperial">Fahrenheit</option>
                        <option value="metric">Celsius</option>
                    </select>
                </label>
                <button type="submit">Get Weather</button>
            </form>
            {renderCurrentWeather()}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default WeatherForm;
