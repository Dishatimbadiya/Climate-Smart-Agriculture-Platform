// // C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\client\src\components\Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext'; // Import Auth context
// import './Navbar.css';

// function Navbar() {
//   const { user } = useAuth(); // Access the logged-in user state

//   return (
//     <nav className="navbar">
//       <h2 className="crop-prediction-heading">Crop Prediction System</h2>
//       <ul>
//         {user ? (
//           // If user is logged in, show these links
//           <>
//             <li><Link to="/profile">Profile</Link></li>
//             <li><Link to="/predict">Predict Crop</Link></li>
//             <li><Link to="/weather">Weather Data</Link></li>
//           </>
//         ) : (
//           // If user is not logged in, show these links
//           <>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/register">Register</Link></li>
//             <li><Link to="/login">Login</Link></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import Auth context
import './Navbar.css';

function Navbar() {
  const { user, logout } = useAuth(); // Access the logged-in user state and logout function

  const handleLogout = () => {
    logout(); // Call the logout function
  };

  return (
    <nav className="navbar">
      <h2 className="nav-bar-heading">Crop Prediction System</h2>
      <ul>
        {user ? (
          // If user is logged in, show these links along with Logout
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/predict">Predict Crop</Link></li>
            <li><Link to="/weather">Weather Data</Link></li>
            <li><Link to="/farmDetails">Farm Details</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/registerSeed">Register Seed</Link></li>
            <li><Link to="/seedList">Seed List</Link></li>
            <li><Link to="/requestManager">Requests</Link></li>
            <li><Link to="/plantingCal">Planting Calender</Link></li>
            <li>
              {/* Logout button */}
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </li>
          </>
        ) : (
          // If user is not logged in, show these links
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
