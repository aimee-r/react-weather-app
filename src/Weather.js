import React from 'react';
import clouds from './images/clouds.png';
import './Weather.css'

export default function Weather() {
    return (
            <div className="container d-flex justify-content-center">
        
        <div class="app-bg">
          <div className="header">
            <form id="city-form">
                <input type="text" id="search-city" placeholder="Search your city" />
                <button type="submit" id="go-button">Search</button>
            </form>
            
            <div className="city">
                Cape Town
            </div>
            
            <p class="date-time">
                <span id="current-time">15:30</span>
                <span id="current-day">Wednesday | 13 January</span>
            </p>
            </div>
         

            <div class="main-temp">
                
                <div class="first-temp">
                  <div className="d-flex justify-content-left">
                  
                    <div className="col-3">
                    <span id="temp">26</span>
                    <span id="temp-change">
                        <span id="celsius">°C</span> |
                        <span id="fahrenheit">°F </span> </span>
                        </div>
                        

                        <img className="col-3" id="main-icon" src={clouds} alt="Clouds" />
                    
                    </div>
                    
                    <div id="description">Cloudy</div>
                
                <div class="first-temp-subtitles">
                    Wind Speed <span id="wind">18</span>km/h | Humidity <span id="humidity">30</span>%
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
}