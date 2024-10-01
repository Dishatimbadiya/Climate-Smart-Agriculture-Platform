// const axios = require("axios");
// const WEATHER = require("../models/Weather");

// // Configuring the path to read the environment variable file, .env, to get the weather api key
// require('dotenv').config({ path: "./../../../.env" });

// const openCageBaseUrl = "https://api.opencagedata.com/geocode/v1/json";
// const weatherBaseUrl = "http://api.openweathermap.org/data/2.5/weather";

// class Weather {

//     /**
//      * Gets the coordinates (latitude and longitude) from the OpenCage API using the provided pincode.
//      * 
//      * @param {string} pincode The pincode used to get the coordinates from the geocoding API.
//      * @return {JSON} The lat/lon coordinates from the OpenCage API.
//      */
//     getCoordinatesFromPincode = async (pincode) => {
//         const openCageKey = process.env.OPENCAGE_API_KEY;  // OpenCage API key from .env
//         const url = `${openCageBaseUrl}?q=${pincode}&key=${openCageKey}`;

//         try {
//             const response = await axios.get(url);
//             const { lat, lng } = response.data.results[0].geometry;
//             return { latitude: lat, longitude: lng };
//         } catch (error) {
//             console.error('Error fetching coordinates:', error.message);
//             throw new Error('Unable to retrieve coordinates. Please try again.');
//         }
//     };

//     /**
//      * Gets the weather data based on the coordinates (lat/lon) and temperature unit (imperial/metric).
//      * 
//      * @param {string} pincode The pincode used to get the coordinates.
//      * @param {string} tempMetric This is either "imperial" (Fahrenheit) or "metric" (Celsius).
//      * @return {JSON} The data response from the weather API call.
//      */
//     getWeatherData = async (pincode, tempMetric) => {
//         try {
//             // Step 1: Get coordinates using OpenCage API
//             const { latitude, longitude } = await this.getCoordinatesFromPincode(pincode);

//             // Step 2: Use the coordinates (lat/lon) to get weather data from OpenWeatherMap API
//             const weatherApiKey = process.env.WEATHER_KEY;  // OpenWeatherMap API key from .env
//             console.log("inside weather.js" + latitude + " " + longitude);
//             let url = `${weatherBaseUrl}?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&units=${tempMetric}`;

//             // Step 3: Fetch weather data
//             const weatherResponse = await axios.get(url);
//             return weatherResponse.data;
//         } catch (error) {
//             console.error('Error fetching weather data:', error.message);
//             throw new Error('Unable to retrieve weather data. Please try again.');
//         }
//     };

//     /**
//      * Saves the weather data using the pincode as the unique identifier.
//      * If it already exists, replace it; if not, then add it.
//      *
//      * @param {number} pincode The pincode used to identify the document to upsert.
//      * @param {object} data Weather data to save/update.
//      */
//     saveWeatherDataToMongo = async (pincode, data) => {
//         const filter = { zip: pincode };
//         const replace = { ...filter, ...data, date: Date.now() };
//         await this.findOneReplace(filter, replace);
//     };

//     /**
//      * Gets the weather data from MongoDB using the pincode.
//      *
//      * @param {number} pincode The pincode used as the unique identifier to find the document in MongoDB.
//      * @return {JSON} The data response from MongoDB.
//      */
//     getWeatherDataFromMongo = async (pincode) => {
//         return WEATHER.findOne({ zip: pincode });
//     };

//     /**
//      * If a document already exists with the filter, then replace; if not, add it.
//      *
//      * @param {object} filter The filter (based on pincode) to identify the document in MongoDB.
//      * @param {object} replace The new data to upsert in MongoDB.
//      */
//     async findOneReplace(filter, replace) {
//         await WEATHER.findOneAndReplace(filter, replace, { new: true, upsert: true });
//     }
// }

// module.exports = Weather;
