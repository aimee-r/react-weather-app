import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Weather from './Weather';

function App() {
  return (
    <div className="App">
         <Weather defaultCity="Tel Aviv" />
        <p class="footer"><a href="https://github.com/aimee-r/" rel="noopener noreferrer" target="_blank">Open-source code</a> by <a href="https://aimeerawlings.com" rel="noopener noreferrer" target="_blank">Aimée Rawlings</a>
        </p> 
  </div>
  );
}

export default App;
