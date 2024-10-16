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

// Route to get user data
router.get('/:id', userController.getUserData);

// Route to update user data
router.put('/:id/preferences', userController.updateUserData);

// Route to change password
router.put('/:id/change-password', userController.changePassword);

module.exports = router;
