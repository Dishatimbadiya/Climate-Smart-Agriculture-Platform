// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\client\src\components\Profile.jsx
// src/components/Profile.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

function Profile() {
    const { user } = useAuth(); // Access the user from the AuthContext
    const navigate = useNavigate();

    // If user is null (not logged in), redirect to the login page
    if (!user) {
        navigate('/login'); // Redirect to login if user is not logged in
        return null; // Do not render anything while redirecting
    }

    // If user is logged in, render the profile page
    return (
        <div>
            <h1>Welcome, {user.name}</h1>
            <p>Email: {user.email}</p>
            {/* Add other profile information here */}
        </div>
    );
}

export default Profile;
