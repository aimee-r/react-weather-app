import logo from './logo.svg';
import './App.css';
import Loader from 'react-loader-spinner';

function App() {
  return (
    <div className="App">
    <div class="layer">
        
        <div class="app-bg">
            <form id="city-form">
                <input type="text" id="search-city" placeholder="Search your city" />
                <button type="submit" id="go-button">GO</button>
                <button type="submit" id="current-button"><i class="fas fa-map-marker-alt"></i></button>
            </form>
            
            <h1>
                Cape Town
            </h1>
            
            <p class="date-time">
                <span id="current-time">15:30</span>
                <span id="current-day">Wednesday | 13 January</span>
            </p>
            
            <div class="main-temp">
                
                <div class="first-temp">
                    <div id="temp">26</div>
                    <div id="temp-change">
                        <span id="celsius">°C</span> |
                        <span id="fahrenheit">°F </span>
                        <img id="main-icon" src="images/clouds.png" />
                    </div>
                    
                    <div id="description">Cloudy</div>
                
                <p class="first-temp-subtitles">
                    Wind Speed <span id="wind">18</span>km/h | Humidity <span id="humidity">30</span>%
                </p>
            </div>
            
            
            <ul id="weather-forecast">
                
                <li class="forecast-block">
                <div id="sub-time">13:00</div>
                    
                <div id="sub-icon">

                </div>
                    
                    <div id="sub-temp">
                        26°C | 14°C
                    </div>
                </li>
                
                    <li class="forecast-block">
                        <div id="sub-time">13:00</div>
                    
                        <div id="sub-icon">
                    
                        </div>
                    
                        <div id="sub-temp">
                            26°C | 14°C
                        </div>
                    </li>

                        <li class="forecast-block">
                            <div id="sub-time">13:00</div>
                        
                            <div id="sub-icon">
                        
                            </div>
                        
                            <div id="sub-temp">
                                26°C | 14°C
                            </div>
                        </li>

                            <li class="forecast-block">
                                <div id="sub-time">13:00</div>
                            
                                <div id="sub-icon">
                            
                                </div>
                            
                                <div id="sub-temp">
                                    26°C | 14°C
                                </div>
                            </li>
            </ul>
        </div>
        
        <p class="colour-picker">
            Customise
            <button class="blue"></button>
            <button class="yellow"></button>
            <button class="orange"></button>
        </p>
        <p class="footer"><a href="https://github.com/aimee-r/" target="_blank">Open-source code</a> by Aimee Rawlings
        </p> 
    
</div>
   
              <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
  </div>
  </div>
  );
}

export default App;
