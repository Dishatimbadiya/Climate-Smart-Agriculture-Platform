import React, { useState } from 'react';
import { predictCrop } from '../services/cropService';
import './FormStyles.css';
import { useAuth } from '../context/AuthContext'; 

const getUserId = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        return user._id;
    } else {
        return null;
    }
};

function CropPredictionForm() {
    const { user } = useAuth();
    const user_id = getUserId(user);
    console.log(user_id);
    const [formData, setFormData] = useState({
        N: '',
        P: '',
        K: '',
        temperature: '',
        humidity: '',
        ph: '',
        rainfall: '',
        user_id: user_id // Change this to user_id
    });

    const [predictedCrop, setPredictedCrop] = useState(null);
    const [predictedPrice, setPredictedPrice] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const floatValue = parseFloat(value);
        setFormData({ ...formData, [name]: floatValue });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const cropPrediction = await predictCrop(formData);
            setPredictedCrop(cropPrediction.predictedCrop);
            setPredictedPrice(cropPrediction.predictedPrice);
        } catch (error) {
            setError('Failed to predict crop. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h2>Predict Crop</h2>
            {error && <p className="error-message">{error}</p>}
            {loading && <p>Loading...</p>}
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
            {predictedCrop && <h3>Predicted Crop: {predictedCrop}</h3>}
            {predictedPrice && <h3>Predicted Price: {predictedPrice}</h3>}
        </div>
    );
}

export default CropPredictionForm;
