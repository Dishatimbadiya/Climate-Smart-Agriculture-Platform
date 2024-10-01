// WeatherForm.jsx
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
            const response = await axios.post('http://localhost:5000/api/weather', {
                zipCode,
                tempMetric,
            });
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error saving weather data:', error);
            setError('Failed to fetch weather data. Please try again.');
        }
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
            {weatherData && (
                <div>
                    <h2>Weather Data:</h2>
                    <pre>{JSON.stringify(weatherData, null, 2)}</pre>
                </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default WeatherForm;
