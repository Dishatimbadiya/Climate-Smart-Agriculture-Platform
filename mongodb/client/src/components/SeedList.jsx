// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\client\src\components\SeedList.js
import React, { useEffect, useState } from 'react';
import './SeedList.css'; 
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

const SeedList = () => {
  const { user } = useAuth(); // Access the user from the AuthContext
  const user_id = user ? user._id : null; // Get user ID directly from AuthContext
  const user_email = user ? user.email : 'default@example.com'; // Get user email directly from AuthContext
  const [seeds, setSeeds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/seeds/all')
      .then((res) => res.json())
      .then((data) => setSeeds(data))
      .catch((error) => console.error('Error fetching seeds:', error));
  }, []);

  const handleRequest = async (seed) => {
    if (!user_id || !user_email) {
      console.error('User not logged in');
      return;
    }

    try {

      console.log(user_email+"  "+user_id+"  "+seed._id);
      const response = await fetch('http://localhost:3000/api/requests/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          requesterId: user_id,
          requesterEmail: user_email, // Use actual user email from AuthContext
          seedId: seed._id,
          seedOwnerEmail: "seed.",
        }),
      });

      const data = await response.json();
      console.log('Request Response:', data);
      if (response.ok) {
        alert('Request created successfully!');
      } else {
        alert('Failed to create request: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };

  return (
    <div className="seed-list-container">
      <h2 style={{ color: "black" }}>Available Seeds</h2>
      <div className="seed-list">
        {seeds.map((seed) => (
          <div className="seed-card" key={seed._id}>
            <h3>{seed.seedName}</h3>
            <p><strong>Type:</strong> {seed.seedType}</p>
            <p><strong>Description:</strong> {seed.description}</p>
            <button className="request-button" onClick={() => handleRequest(seed)}>Request Seed</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeedList;
