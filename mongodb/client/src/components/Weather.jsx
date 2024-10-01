// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\client\src\components\Weather.jsx

import React, {Component} from "react";
import WeatherForm from "./WeatherForm";

class Weather extends Component {
    state = {
        weatherData: ''
    };

    render() {
        return(
            <section className="weather container">
                <h2>Weather...</h2>
                <WeatherForm />
                {/* <WeatherPanels weatherData={this.state.weatherData}/> */}
            </section>
        );
    }
}

export default Weather;