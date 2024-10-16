import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

const getUserId = () => {
    const storedUser = localStorage.getItem('user'); // Retrieve the user data from localStorage
    if (storedUser) {
        const user = JSON.parse(storedUser); // Parse the JSON string back to an object
        return user._id; // Access the _id (or user_id) property
    } else {
        return null; // Handle the case where there is no user data in localStorage
    }
};

function Profile() {
    const { user } = useAuth(); // Access the user from the AuthContext
    const user_id = getUserId(user);
    const navigate = useNavigate();

    // Declare state hooks
    const [preferences, setPreferences] = useState({
        notificationFrequency: user?.preferences?.notificationFrequency || 'daily',
        preferredUnits: user?.preferences?.preferredUnits || 'metric',
    });

    const [passwords, setPasswords] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    // State for handling success and error messages
    const [message, setMessage] = useState({ type: '', text: '' });

    // If user is null (not logged in), redirect to the login page
    if (!user) {
        navigate('/login'); // Redirect to login if user is not logged in
        return null; // Do not render anything while redirecting
    }

    // Handle preference changes
    const handlePreferenceChange = (e) => {
        setPreferences({
            ...preferences,
            [e.target.name]: e.target.value
        });
    };

    // Handle password change input
    const handlePasswordChange = (e) => {
        setPasswords({
            ...passwords,
            [e.target.name]: e.target.value
        });
    };

    // Submit updated preferences
    const handlePreferenceSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/users/${user_id}/preferences`, preferences);
            console.log("Preferences updated", response.data);
            setMessage({ type: 'success', text: 'Preferences updated successfully!' });
        } catch (error) {
            console.log(user_id);
            console.error("Error updating preferences", error);
            setMessage({ type: 'error', text: 'Error updating preferences. Please try again.' });
        }
    };

    // Submit password change
    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        if (passwords.newPassword !== passwords.confirmPassword) {
            setMessage({ type: 'error', text: 'New passwords do not match' });
            return;
        }
        try {
            const response = await axios.put(`http://localhost:3000/api/users/${user_id}/change-password`, {
                oldPassword: passwords.oldPassword,
                newPassword: passwords.newPassword
            });
            console.log("Password changed", response.data);
            setMessage({ type: 'success', text: 'Password changed successfully!' });
        } catch (error) {
            console.error("Error changing password", error);
            setMessage({
                type: 'error',
                text: error.response?.data?.message || "Error changing password"
            });
        }
    };

    return (
        <div>
<img 
    alt="profile"
    src="https://i.pinimg.com/736x/9e/41/dd/9e41dd56f7a091cf4df76aed668db4fc.jpg" 
    style={{ height: '150px', width: '150px', borderRadius: '50%', border: '2px solid gray' }}
/>
            <h1 style={{ color: "black" }}>Welcome, {user.username}</h1>
            <p>Email: {user.email}</p>

            <h2 style={{ color: "black" }}>Update Preferences</h2>
            <form onSubmit={handlePreferenceSubmit}>
                <label>
                    Notification Frequency:
                    <select
                        name="notificationFrequency"
                        value={preferences.notificationFrequency}
                        onChange={handlePreferenceChange}
                    >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </label>
                <br />
                <label>
                    Preferred Units:
                    <select
                        name="preferredUnits"
                        value={preferences.preferredUnits}
                        onChange={handlePreferenceChange}
                    >
                        <option value="metric">Metric</option>
                        <option value="imperial">Imperial</option>
                    </select>
                </label>
                <br />
                <button type="submit">Update Preferences</button>
            </form>

            {/* Show success or error message */}
            {message.text && (
                <div style={{ 
                    color: message.type === 'success' ? 'green' : 'red', 
                    fontWeight: 'bold' 
                }}>
                    {message.text}
                </div>
            )}

            <h2 style={{ color: "black" }}>Change Password</h2>
            <form onSubmit={handlePasswordSubmit}>
                <label>
                    Old Password:
                    <input
                        type="password"
                        name="oldPassword"
                        value={passwords.oldPassword}
                        onChange={handlePasswordChange}
                        required
                    />
                </label>
                <br />
                <label>
                    New Password:
                    <input
                        type="password"
                        name="newPassword"
                        value={passwords.newPassword}
                        onChange={handlePasswordChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Confirm New Password:
                    <input
                        type="password"
                        name="confirmPassword"
                        value={passwords.confirmPassword}
                        onChange={handlePasswordChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Change Password</button>
            </form>
        </div>
    );
}

export default Profile;
