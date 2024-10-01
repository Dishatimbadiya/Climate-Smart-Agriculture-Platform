// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\server\controllers\cropController.js

const axios = require('axios');

exports.predictCrop = async (req, res) => {
    const { N, P, K, temperature, humidity, ph, rainfall } = req.body;

    try {
        const response = await axios.post('http://127.0.0.1:4000/predict', {
            N: parseFloat(N),
            P: parseFloat(P),
            K: parseFloat(K),
            temperature: parseFloat(temperature),
            humidity: parseFloat(humidity),
            ph: parseFloat(ph),
            rainfall: parseFloat(rainfall),
        });

        const crop = response.data.predicted_crop;
        res.json({ predictedCrop: crop });
    } catch (error) {
        res.status(500).json({ message: 'Crop prediction failed.' });
    }
};
