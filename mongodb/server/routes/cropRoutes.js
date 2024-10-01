// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\server\routes\cropRoutes.js

const express = require('express');
const cropController = require('../controllers/cropController');
const router = express.Router();

router.post('/predict', cropController.predictCrop);

module.exports = router;
