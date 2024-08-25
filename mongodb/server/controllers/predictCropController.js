const axios = require('axios');

exports.predictCrop = async (req, res) => {
    if (req.method === 'POST') {
        try {
            // Parse and validate inputs
            const { N, P, K, temperature, humidity, ph, rainfall } = req.body;
            const numericInputs = [N, P, K, temperature, humidity, ph, rainfall];

            // Ensure all inputs are valid numbers
            if (numericInputs.some(value => isNaN(parseFloat(value)) || parseFloat(value) <= 0)) {
                return res.status(400).send("Invalid input values.");
            }

            // Make POST request to Flask API
            const response = await axios.post('http://127.0.0.1:5000/predict', {
                N: parseFloat(N),
                P: parseFloat(P),
                K: parseFloat(K),
                temperature: parseFloat(temperature),
                humidity: parseFloat(humidity),
                ph: parseFloat(ph),
                rainfall: parseFloat(rainfall)
            });

            // Extract predicted crop from the response
            const crop = response.data.predicted_crop;

            // Render the result view with the predicted crop
            res.render('predictCrop', { crop });
        } catch (error) {
            console.error("Error making prediction:", error);
            res.status(500).send("Error making prediction.");
        }
    } else {
        // Render the form on GET request
        res.render('predictCrop', { crop: undefined });
    }
};
