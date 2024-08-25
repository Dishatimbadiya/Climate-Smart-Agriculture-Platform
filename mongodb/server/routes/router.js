const express = require('express');
const route = express.Router();
const userController = require('../controllers/userController');  // Import userController
const predictCrop = require('../controllers/predictCropController'); // Import predictCrop from predictCropController

// Define routes
route.get('/', (req, res) => {
    res.render('index');
});

route.get('/registerUser', (req, res) =>
    res.render('registerUser')
);
route.post('/registerUser', userController.signup);

route.get('/loginUser', (req, res) => {
    res.render('loginUser');
});

route.post('/loginUser', userController.login);


// Handle crop prediction
route.get('/predictCrop', (req, res) =>
    res.render('predictCrop')
);
route.post('/predictCrop', predictCrop.predictCrop);

module.exports = route;
