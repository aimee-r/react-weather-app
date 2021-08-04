import React, { useState } from "react";
import DateFormat from "./DateFormat";
import Icon from "./Icon";
import Temperature from "./Temperature";
import clouds from './images/clouds.png';
import './Weather.css'
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "0c6df086789bb0b0e54f6b2beff1fb0f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

if (weatherData.ready) {
    return (
        <div className="container d-flex justify-content-center">
        
        <div class="app-bg">
          <div className="header">
            <form id="city-form" onSubmit={handleSubmit}>
                <input type="text" id="search-city" onChange={handleCityChange} placeholder="Search your city" />
                <button type="submit" id="go-button">Search</button>
            </form>
            
            <div className="city">
                {weatherData.city}
            </div>
            
            <p class="date-time">
                 <DateFormat date={weatherData.date} />
            </p>
            </div>

            <div class="main-temp">
                
                <div class="first-temp">
                  <div className="d-flex justify-content-left">
                  
                    <div className="col-3">
                    <Temperature celsius={weatherData.temperature} />
                    </div>
 
                    <Icon defaultDescription="clear sky" description={weatherData.description} />
                    
                    </div>
                    
                    <div id="description" className="text-capitalize">{weatherData.description}</div>
                
                <div class="first-temp-subtitles">
                    Wind Speed <span id="wind">{weatherData.wind}</span>km/h | Humidity <span id="humidity">{weatherData.humidity}</span>%
                </div>
            </div>
            
            
            <div className="d-flex justify-content-center">
              <div className="row">
                
              <div className="col-3 forecast-block">
                <div className="sub-time">13:00</div>
                    <div className="sub-temp">
                        26°C | 14°C
                    </div>
                    <img className="sub-icon" src={clouds} alt="Clouds" />
                </div>

                   <div className="col-3 forecast-block">
                <div className="sub-time">13:00</div>
                    <div className="sub-temp">
                        26°C | 14°C
                    </div>
                    <img className="sub-icon" src={clouds} alt="Clouds" />
                </div>

                  <div className="col-3 forecast-block">
                <div className="sub-time">13:00</div>
                    <div className="sub-temp">
                        26°C | 14°C
                    </div>
                    <img className="sub-icon" src={clouds} alt="Clouds" />
                </div>

                 <div className="col-3 forecast-block">
                <div className="sub-time">13:00</div>
                    <div className="sub-temp">
                        26°C | 14°C
                    </div>
                    <img className="sub-icon" src={clouds} alt="Clouds" />
                </div>

              
                
              </div>
                
            </div>
        </div>
    
</div>
  
  </div> )
} else {
    search();
    return "Loading..."
}
}