import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css'; // Reuse your existing styles or create new styles for this form
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

const getUserId = () => {
    const storedUser = localStorage.getItem('user'); // Retrieve the user data from localStorage
    if (storedUser) {
        const user = JSON.parse(storedUser); // Parse the JSON string back to an object
        return user._id; // Access the _id (or user_id) property
    } else {
        return null; // Handle the case where there is no user data in localStorage
    }
};

const FarmForm = () => {
    const { user } = useAuth();
    const user_id = getUserId(user);
    const navigate = useNavigate(); // Move this inside the component

    if (user_id) {
        console.log("User ID:", user_id);
    } else {
        console.log("No user found in localStorage.");
    }

    const [formData, setFormData] = useState({
        location: '',
        crop_type: '',
        planting_schedule: '',
        soil_type: '',
        irrigation_system: '',
        size: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/farms', {
                ...formData,
                user_id
            });
            console.log("Farm data submitted", response.data);
            navigate('/'); // This will redirect after successful submission
        } catch (error) {
            console.error("Error submitting farm data", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="farm-form">
            <label htmlFor="location">Location:</label>
            <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
            />

            <label htmlFor="crop_type">Crop Type:</label>
            <input
                type="text"
                id="crop_type"
                name="crop_type"
                value={formData.crop_type}
                onChange={handleChange}
                required
            />

            <label htmlFor="planting_schedule">Planting Schedule:</label>
            <input
                type="date"
                id="planting_schedule"
                name="planting_schedule"
                value={formData.planting_schedule}
                onChange={handleChange}
                required
            />

            <label htmlFor="soil_type">Soil Type:</label>
            <input
                type="text"
                id="soil_type"
                name="soil_type"
                value={formData.soil_type}
                onChange={handleChange}
                required 
            />

            <label htmlFor="irrigation_system">Irrigation System:</label>
            <input
                type="text"
                id="irrigation_system"
                name="irrigation_system"
                value={formData.irrigation_system}
                onChange={handleChange}
                required
            />

            <label htmlFor="size">Size (in acres):</label>
            <input
                type="number"
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default FarmForm;