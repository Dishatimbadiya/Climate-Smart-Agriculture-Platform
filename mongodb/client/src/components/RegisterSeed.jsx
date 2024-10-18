import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook to access user data

const RegisterSeed = () => {
  const { user } = useAuth(); // Access the user from the AuthContext
  const userId = user ? user._id : null; // Get the user ID
  const userEmail = user ? user.email : 'default@example.com'; // Get the user email
  const [seedName, setSeedName] = useState('');
  const [seedType, setSeedType] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const formData = new FormData();
    formData.append('image', image);
    formData.append('seedName', seedName);
    formData.append('seedType', seedType);
    formData.append('description', description);
    formData.append('createdBy', userId); // Append user ID to form data
    formData.append('createdByEmail', userEmail); // Append user email to form data

    try {
      const response = await fetch('http://localhost:3000/api/seeds/register', {
        method: 'POST',
        body: formData,
      });

      // Log the raw response text
      const text = await response.text(); // Get response as text
      console.log('Raw Response:', text); // Log the raw response

      // Try parsing the response if it's JSON
      let data;
      try {
        data = JSON.parse(text);
      } catch (jsonError) {
        console.error('Failed to parse JSON:', jsonError);
        setErrorMessage('Failed to register seed. Invalid server response.');
        return;
      }

      console.log('Registration Response:', data);

      if (response.ok) {
        setSuccessMessage('Seed registered successfully!');
        // Reset form fields
        setSeedName('');
        setSeedType('');
        setDescription('');
        setImage(null);
      } else {
        setErrorMessage(data.error || 'Failed to register seed.');
      }
    } catch (error) {
      console.error('Error registering seed:', error);
      setErrorMessage('An error occurred while registering the seed.');
    }
  };

  return (
    <div>
      <h2 style={{ color: "black" }}>Register Seed</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seed Name"
          value={seedName}
          onChange={(e) => setSeedName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Seed Type"
          value={seedType}
          onChange={(e) => setSeedType(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit">Register Seed</button>
      </form>
    </div>
  );
};

export default RegisterSeed;
