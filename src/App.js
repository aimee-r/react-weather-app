import clouds from './images/clouds.png';
import './App.css';
import Loader from 'react-loader-spinner';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
    <div class="layer">
        
        <div class="app-bg">
          <div className="header">
            <form id="city-form">
                <input type="text" id="search-city" placeholder="Search your city" />
                <button type="submit" id="go-button">GO</button>
            </form>
            
            <h1>
                Cape Town
            </h1>
            
            <p class="date-time">
                <span id="current-time">15:30</span>
                <span id="current-day">Wednesday | 13 January</span>
            </p>
            </div>
         

            <div class="main-temp">
                
                <div class="first-temp">
                  <Container className="d-flex justify-content-left">
                  <Row>
                    <Col> <div id="temp">26</div></Col>
                    <Col><div id="temp-change">
                        <span id="celsius">°C</span> |
                        <span id="fahrenheit">°F </span> </div></Col>
                        

                        <Col><img id="main-icon" src={clouds} alt="Clouds" /></Col>
                    </Row>
                    </Container>
                    
                    <div id="description">Cloudy</div>
                
                <div class="first-temp-subtitles">
                    Wind Speed <span id="wind">18</span>km/h | Humidity <span id="humidity">30</span>%
                </div>
            </div>
            
            
            <Container className="d-flex justify-content-center">
              <Row>
                
                <Col className="forecast-block">
                <div className="sub-time">13:00</div>
                  
                <div className="sub-icon"></div>
                    <div className="sub-temp">
                        26°C | 14°C
                    </div>
                </Col>

                  <Col className="forecast-block">
                <div className="sub-time">13:00</div>
                  
                <div className="sub-icon"></div>
                    <div className="sub-temp">
                        26°C | 14°C
                    </div>
                </Col>

                  <Col className="forecast-block">
                <div className="sub-time">13:00</div>
                  
                <div className="sub-icon"></div>
                    <div className="sub-temp">
                        26°C | 14°C
                    </div>
                </Col>

                  <Col className="forecast-block">
                <div className="sub-time">13:00</div>
                  
                <div className="sub-icon"></div>
                    <div className="sub-temp">
                        26°C | 14°C
                    </div>
                </Col>
                
              </Row>
                
            </Container>
        </div>
    
</div>
   
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
  </div> 
        <p class="footer"><a href="https://github.com/aimee-r/" target="_blank">Open-source code</a> by Aimee Rawlings
        </p> 
  </div>
  );
}

export default App;
