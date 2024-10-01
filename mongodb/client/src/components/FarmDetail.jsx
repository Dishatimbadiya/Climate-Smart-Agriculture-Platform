import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './FarmDetail.css';

const FarmDetail = () => {
    const { id } = useParams();
    const [farm, setFarm] = useState(null);

    useEffect(() => {
        const fetchFarm = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/farms/${id}`);
                setFarm(response.data);
            } catch (error) {
                console.error('Error fetching farm details', error);
            }
        };
        fetchFarm();
    }, [id]);

    if (!farm) return <div>Loading...</div>;

    return (
        <div className="farm-detail-container">
            <h1>Farm Details</h1>
            <p><strong>Location:</strong> {farm.location}</p>
            <p><strong>Crop Type:</strong> {farm.crop_type}</p>
            <p><strong>Planting Schedule:</strong> {new Date(farm.planting_schedule).toLocaleDateString()}</p>
            <p><strong>Soil Type:</strong> {farm.soil_type}</p>
            <p><strong>Irrigation System:</strong> {farm.irrigation_system}</p>
            <p><strong>Size:</strong> {farm.size} acres</p>
            <p><strong>Created At:</strong> {new Date(farm.createdAt).toLocaleDateString()}</p>
        </div>
    );
};

export default FarmDetail;
