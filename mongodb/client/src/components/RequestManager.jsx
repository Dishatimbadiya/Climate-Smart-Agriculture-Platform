import React, { useEffect, useState } from 'react';
import './RequestManager.css'; // Import a CSS file for styling
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

const RequestManager = () => {
  const { user } = useAuth(); // Access the user from AuthContext
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/requests/owner/${user.email}`);
        if (!response.ok) {
          throw new Error('Failed to fetch requests');
        }
        const data = await response.json();
        console.log('Fetched Requests:', data); // Log the fetched requests
        setRequests(data);
      } catch (err) {
        console.error('Error fetching requests:', err);
        setError(err.message);
      }
    };

    fetchRequests();
  }, [user.email]); // Only depend on user.email

  const handleUpdate = async (requestId, status) => {
    try {
      const response = await fetch(`http://localhost:3000/api/requests/update/${requestId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update request');
      }

      const data = await response.json();
      console.log('Update Response:', data);
      // Optionally refresh the request list after the update
      // fetchRequests(); // Uncomment if you want to refresh the requests after an update
    } catch (error) {
      console.error('Error updating request:', error);
      setError(error.message); // Set error state if update fails
    }
  };

  return (
    <div className="request-manager-container">
      <h2 className="header">Manage Requests</h2>
      {error && <p className="error">{error}</p>}
      {requests.length === 0 && <p>No requests found for your seeds.</p>}

      <h3>Requests</h3>
      {requests.length === 0 ? (
        <p>No Requests found.</p>
      ) : (
        <ul className="request-list">
          {requests.map((request) => (
            <li className="request-item" key={request._id}>
              <p><strong>Request ID:</strong> {request.requestId}</p>
              <p><strong>Requester ID:</strong> {request.requesterId}</p>
              <p><strong>Requester Email:</strong> {request.requesterEmail}</p>
              <p><strong>Status:</strong> {request.status}</p>
              <div className="button-group">
                <button className="grant-button" onClick={() => handleUpdate(request._id, 'Granted')}>Grant</button>
                <button className="decline-button" onClick={() => handleUpdate(request._id, 'Declined')}>Decline</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequestManager;
