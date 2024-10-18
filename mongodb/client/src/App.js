// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\client\src\App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import CropPredictionForm from './components/CropPredictionForm';
import Weather from './components/Weather';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import FarmDetails from './components/FarmForm'
import PlantingCal from './components/PlanttingCale'
import { AuthProvider } from './context/AuthContext';
import RegisterSeed from './components/RegisterSeed';
import SeedList from './components/SeedList';
import RequestManager from './components/RequestManager';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/predict" element={<CropPredictionForm />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/farmDetails" element={<FarmDetails />} />
            <Route path="/plantingCal" element={<PlantingCal />} />
            <Route path="/registerSeed" element={<RegisterSeed />} />
            <Route path="/seedList" element={<SeedList />} />
            <Route path="/requestManager" element={<RequestManager />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
// import React from 'react';
// import TempWeatherForm from './components/TempWeatherForm'; // Adjust path as needed

// function App() {
//   return (
//     <div className="App">
//       <h1>Weather App</h1>
//       <TempWeatherForm />
//     </div>
//   );
// }

// export default App;
