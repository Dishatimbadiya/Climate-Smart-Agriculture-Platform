// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\client\src\components\Container.jsx

import React, {Component} from "react";
import WeatherForm from "./WeatherForm";
import WeatherPanels from "./WeatherPanels";

class Container extends Component {
    state = {
        weatherData: ''
    };

    render() {
        return(
            <section className="weather container">
                <WeatherForm />
                <WeatherPanels weatherData={this.state.weatherData}/>
            </section>
        );
    }
}

export default Container;