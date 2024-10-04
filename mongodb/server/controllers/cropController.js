// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\server\controllers\cropController.js

const axios = require('axios');
const CropPredict = require('../models/CropPredict');

exports.predictCrop = async (req, res) => {
    const { N, P, K, temperature, humidity, ph, rainfall, user_id } = req.body;
    console.log("Received data:", req.body);

    try {
        const response = await axios.post('http://127.0.0.1:4000/predict', {
            N: parseFloat(N),
            P: parseFloat(P),
            K: parseFloat(K),
            temperature: parseFloat(temperature),
            humidity: parseFloat(humidity),
            ph: parseFloat(ph),
            rainfall: parseFloat(rainfall)
        });

        console.log("Prediction service response:", response.data);

        const crop = response.data.predicted_crop;
        const price = response.data.predicted_price;

        // Save prediction in the database
        const newPrediction = new CropPredict({
            user_id, // Ensure user_id is passed here
            N,
            P,
            K,
            temperature,
            humidity,
            ph,
            rainfall,
            predictedCrop: crop,
            predictedPrice: price
        });

        await newPrediction.save();
        res.json({ predictedCrop: crop, predictedPrice: price });
    } catch (error) {
        console.error('Error in prediction process:', error.message);
        res.status(500).json({ message: 'Crop prediction failed.', error: error.message });
    }
};