# Climate-Smart Agriculture Platform

A platform designed to support farmers by providing data-driven insights to improve crop yields and reduce risks from climate variability.

## Technologies
- **Frontend**: React, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **APIs**: 
  - OpenWeatherMap API (for real-time weather data)
  - OpenCage API (for geocoding)
  - Custom Machine Learning Models (for crop and price prediction)

## Features

1. **Real-Time Weather Updates**
   - Fetches and displays real-time weather data (temperature, humidity, wind speed, precipitation) based on the farm's location using the OpenWeatherMap API.

2. **Planting Calendar**
   - Recommends optimal planting dates based on soil data, regional weather patterns, and available resources.
   - Allows users to manage and adjust planting schedules through an interactive calendar interface.

3. **Crop Prediction**
   - Predicts the best crops for current conditions using a machine learning model that takes into account soil nutrient levels (N, P, K), weather conditions, and available resources.

4. **Crop Price Prediction**
   - Provides price forecasts for crops by analyzing historical market data and demand trends using machine learning.

5. **User Registration & Login**
   - Secure user management with registration, login, and authentication.
   - Custom navigation options based on whether the user is logged in or not.

6. **Seed Register & Request System**
   - Users can register seeds for sale, browse available seeds, and send requests to seed owners.
   - Seed owners can approve or decline requests. Upon approval, the system sends automatic email notifications to the requester.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Dishatimbadiya/Climate-Smart-Agriculture-Platform.git


2. Install dependencies for both frontend and backend:
    ```bash
    cd Climate-Smart-Agriculture-Platform
    npm install
    
3. Set up environment variables by creating a .env file in the root directory of the project. Add the following variables:
    ```bash
    MONGODB_LINK=
    WEATHER_API_KEY=
    OPENCAGE_API_KEY=
    DB=
    EMAIL_USER=
    EMAIL_PASS=

4. Start the development server:
    ```bash
    npm run dev
