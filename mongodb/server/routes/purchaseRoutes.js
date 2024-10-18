// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\server\routes\purchaseRoutes.js
const express = require('express');
const Purchase = require('../models/Purchase');

const router = express.Router();

// Route to purchase seeds
router.post('/purchase', async (req, res) => {
    const { seedName, quantity, buyerName } = req.body;

    try {
        const newPurchase = new Purchase({
            seedName,
            quantity,
            buyerName,
        });

        await newPurchase.save();
        res.status(201).json({ message: 'Seed purchased successfully', purchase: newPurchase });
    } catch (error) {
        console.error('Error purchasing seed:', error);
        res.status(500).json({ error: 'Failed to purchase seed' });
    }
});

module.exports = router;
