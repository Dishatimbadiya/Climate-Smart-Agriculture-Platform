// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\server\routes\userRoutes.js

const express = require('express');
const { check } = require('express-validator');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', [
    check('email').isEmail(),
    check('password').isLength({ min: 6 }),
    check('username').not().isEmpty()
], userController.signup);

router.post('/login', userController.login);

router.get('/:id', userController.getUserData); // Route to get user data
router.put('/:id', userController.updateUserData);

module.exports = router;
