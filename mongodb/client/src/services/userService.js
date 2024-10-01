// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\client\src\services\userService.js

import axios from 'axios';

export const registerUser = async (userData) => {
    try {
        console.log("userService..");
        const response = await axios.post('http://localhost:3000/api/users/signup', userData);
        // alert('User registered successfully');
        return response.data; // Return user data
    } catch (error) {
        console.error('Error registering user', error);
        throw new Error('Registration failed. Please try again.'); // Throw error for handling in component
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:3000/api/users/login', userData);
        // alert('User logged in successfully');
        return response.data.user; // Return user data
    } catch (error) {
        console.error('Error logging in user', error);
        throw new Error('Login failed. Please check your credentials.'); // Throw error for handling in component
    }
};



// Function to get user data by ID
export const getUserData = async (userId) => {
    const response = await axios.get(`/api/users/${userId}`); // Update with the correct endpoint
    return response.data;
};

// Function to update user data
export const updateUserData = async (userId, userData) => {
    const response = await axios.put(`/api/users/${userId}`, userData); // Update with the correct endpoint
    return response.data;
};
