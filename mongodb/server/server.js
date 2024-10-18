// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\server\server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
const path = require('path');
const farmRoutes = require('./routes/farmRoutes');
require('dotenv').config();
const purchaseRoutes = require('./routes/purchaseRoutes');
const userRoutes = require('./routes/userRoutes');
const cropRoutes = require('./routes/cropRoutes');
const seedRoutes = require('./routes/seedRoutes');
const requestRoutes = require('./routes/requestRoutes');
const apis = require("./api");

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5000' }));

const mongoURI = process.env.mongodbLink;
mongoose.connect(mongoURI)
   .then(() => console.log('MongoDB connected successfully'))
   .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/disha', async (req, res) => {
   res.json({ message: "url got" })
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Route to get weather data
app.post('/api/weather', async (req, res) => {
   const { zipCode, tempMetric } = req.body;
   console.log(zipCode + " " + tempMetric);
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

app.use('/api/users', userRoutes);
app.use('/api/crops', cropRoutes);
app.use('/api/farms', farmRoutes);
app.use('/api/purchases', purchaseRoutes);
app.use('/api/seeds', seedRoutes);
app.use('/api/requests', requestRoutes);


if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, '../client/build')));
   app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
   });
}

// 404 Error Handler
app.use((req, res) => {
   res.status(404).json({ message: 'Route not found.' });
});

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
