const express = require('express');
const multer = require('multer');
const Seed = require('../models/Seed');

const router = express.Router();

// Setup storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });

// Route to register seeds
router.post('/register', upload.single('image'), async (req, res) => {
    const { seedName, seedType, description, createdBy, createdByEmail } = req.body; // Destructure createdBy and createdByEmail
    const image = req.file ? req.file.path : ''; // Get image path

    try {
        console.log('Request body:', req.body);
        console.log('Uploaded file:', req.file);

        // Create a new seed instance with createdBy and createdByEmail fields
        const newSeed = new Seed({
            seedName,
            seedType,
            image,
            description,
            createdBy, // Add createdBy field (should be the user's ObjectId)
            createdByEmail, // Add createdByEmail field
        });

        await newSeed.save();

        res.status(201).json({ message: 'Seed registered successfully', seed: newSeed });
    } catch (error) {
        console.error('Error registering seed:', error);
        res.status(500).json({ error: 'Failed to register seed' });
    }
});

router.get('/owner/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const seeds = await Seed.find({ createdBy: id }); // Assuming createdBy is the user ID
        res.status(200).json(seeds);
    } catch (error) {
        console.error('Error fetching seeds:', error);
        res.status(500).json({ error: 'Failed to fetch seeds' });
    }
});

// Route to get all seeds
router.get('/all', async (req, res) => {
    try {
        const seeds = await Seed.find({});
        res.status(200).json(seeds);
    } catch (error) {
        console.error('Error fetching seeds:', error);
        res.status(500).json({ error: 'Failed to fetch seeds' });
    }
});


module.exports = router;
