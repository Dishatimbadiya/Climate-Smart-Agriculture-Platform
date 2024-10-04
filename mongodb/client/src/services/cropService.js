// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\client\src\services\cropService.js

import axios from 'axios';

export const predictCrop = async (data) => {
    try {
        console.log("got your api...");
        console.log(data);
        const response = await axios.post('http://localhost:3000/api/crops/predict', data);
        console.log("Received prediction response:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error predicting crop', error);
    }
};
