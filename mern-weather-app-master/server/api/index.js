// const express = require('express');
// const router = express.Router();
// const Weather = require("./weather");

// router.post("/weather", async (req, res) => {
//     const { zipCode, tempMetric } = req.body;

//     if (!zipCode || !tempMetric) {
//         return res.status(400).json({ error: "ZipCode and tempMetric are required" });
//     }

//     let weather = new Weather();

//     try {
//         let weatherData = await weather.getWeatherData(zipCode, tempMetric);
//         res.json(weatherData);
//     } catch (error) {
//         console.error("Error fetching weather data:", error); // Log the entire error object
//         res.status(500).json({ error: error.message || "Internal server error while fetching weather data" });
//     }
// });



// router.post("/weatherMongo", async (req, res) => {
//     const { zipCode, tempMetric } = req.body;

//     if (!zipCode || !tempMetric) {
//         return res.status(400).json({ error: "ZipCode and tempMetric are required" });
//     }

//     let weather = new Weather();

//     try {
//         let weatherData = await weather.getWeatherData(zipCode, tempMetric);
//         await weather.saveWeatherDataToMongo(zipCode, weatherData);
//         res.json(weatherData);
//     } catch (error) {
//         console.error("Error saving weather data:", error.message);
//         res.status(500).json({ error: "Internal server error while saving weather data" });
//     }
// });

// module.exports = router;
