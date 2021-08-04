import clouds from './images/clouds.png';
import './App.css';
// import Loader from 'react-loader-spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
        <Weather />
        <p class="footer"><a href="https://github.com/aimee-r/">Open-source code</a> by <a href="https://aimeerawlings.com">Aimee Rawlings</a>
        </p> 
  </div>
  );
}

export default App;
