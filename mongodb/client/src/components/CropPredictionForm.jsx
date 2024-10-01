// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\client\src\components\CropPredictionForm.jsx

import React, { useState } from 'react';
import { predictCrop } from '../services/cropService';
import './FormStyles.css';

function CropPredictionForm() {
    const [formData, setFormData] = useState({
        N: '',
        P: '',
        K: '',
        temperature: '',
        humidity: '',
        ph: '',
        rainfall: ''
    });

    const [predictedCrop, setPredictedCrop] = useState(null);
    const [error, setError] = useState(null); // State to hold error messages
    const [loading, setLoading] = useState(false); // State to show loading

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Convert value to float before setting it in state
        const floatValue = parseFloat(value);
        console.log(`Input changed: ${name} = ${floatValue}`); // Debug: log input changes
        setFormData({ ...formData, [name]: floatValue });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log("Submitting form with data:", formData); // Debug: log form data before submission
        setLoading(true); // Set loading state
        setError(null); // Reset any existing error

        try {
            const cropPrediction = await predictCrop(formData); // Call the predictCrop function
            console.log("Crop prediction response:", cropPrediction); // Debug: log response
            setPredictedCrop(cropPrediction.predictedCrop); // Set predicted crop from API response
        } catch (error) {
            console.error("Error predicting crop:", error); // Debug: log any errors
            setError('Failed to predict crop. Please try again.'); // Handle error
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="form-container">
            <h2>Predict Crop</h2>
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
            {loading && <p>Loading...</p>} {/* Display loading indicator */}
            <form onSubmit={handleSubmit}>
                <input type="number" name="N" placeholder="Nitrogen (N)" step="any" onChange={handleInputChange} required />
                <input type="number" name="P" placeholder="Phosphorus (P)" step="any" onChange={handleInputChange} required />
                <input type="number" name="K" placeholder="Potassium (K)" step="any" onChange={handleInputChange} required />
                <input type="number" name="temperature" placeholder="Temperature (°C)" step="any" onChange={handleInputChange} required />
                <input type="number" name="humidity" placeholder="Humidity (%)" step="any" onChange={handleInputChange} required />
                <input type="number" name="ph" placeholder="pH" step="any" onChange={handleInputChange} required />
                <input type="number" name="rainfall" placeholder="Rainfall (mm)" step="any" onChange={handleInputChange} required />
                <button type="submit">Predict Crop</button>
            </form>
            {predictedCrop && <h3>Predicted Crop: {predictedCrop}</h3>} {/* Adjusted to render the predicted crop directly */}
        </div>
    );
}

export default CropPredictionForm;
