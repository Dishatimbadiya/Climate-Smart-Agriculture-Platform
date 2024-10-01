const express = require('express');
const router = express.Router();
const Farm = require('../models/Farm');

// POST route to create a new farm
router.post('/farms', async (req, res) => {
    const { user_id, location, crop_type, planting_schedule, soil_type, irrigation_system, size } = req.body;

    try {
        const newFarm = new Farm({
            user_id,
            location,
            crop_type,
            planting_schedule,
            soil_type,
            irrigation_system,
            size
        });

        await newFarm.save();
        res.status(201).json(newFarm);
    } catch (error) {
        res.status(500).json({ error: 'Error creating farm' });
    }
});

// GET route to retrieve a specific farm by ID
router.get('/farms/:id', async (req, res) => {
    try {
        const farm = await Farm.findById(req.params.id);
        if (!farm) {
            return res.status(404).json({ error: 'Farm not found' });
        }
        res.status(200).json(farm);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching farm details' });
    }
});

module.exports = router;
