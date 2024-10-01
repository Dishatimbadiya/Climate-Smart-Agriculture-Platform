const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route to get weather data
app.post('/api/weather', async (req, res) => {
    const { zipCode, tempMetric } = req.body;

    try {
        // Check if the zip code is provided
        if (!zipCode) {
            return res.status(400).json({ error: 'Zip code is required' });
        }

        const coordinates = await getCoordinatesFromPincode(zipCode);
        const weatherData = await getWeatherData(coordinates, tempMetric);
        res.json(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

// Function to get coordinates from pincode using OpenCage API
const getCoordinatesFromPincode = async (pincode) => {
    const openCageBaseUrl = "https://api.opencagedata.com/geocode/v1/json";
    const openCageKey = process.env.OPENCAGE_API_KEY;  // OpenCage API key from .env
    const url = `${openCageBaseUrl}?q=${pincode}&key=${openCageKey}`;

    try {
        const response = await axios.get(url);
        const { lat, lng } = response.data.results[0].geometry;
        return { latitude: lat, longitude: lng };
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        throw new Error('Unable to retrieve coordinates. Please try again.');
    }
};

// Function to get weather data
const getWeatherData = async ({ latitude, longitude }, tempMetric) => {
    const weatherApiKey = process.env.WEATHER_KEY;
    const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';

    const url = `${weatherBaseUrl}?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&units=${tempMetric}`;

    const response = await axios.get(url);
    return response.data;
};

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
