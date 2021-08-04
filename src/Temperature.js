import React, { useState} from "react";

export default function Temperature(props) {
  let [unit, setUnit] = useState("celsius")

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

    function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
  return (
    <div>
        <span id="temp">{Math.round(props.celsius)}</span>
        <span id="temp-change">
        <a href="#" onClick={showCelsius} id="celsius">°C</a> 
        <strong>|</strong>
        <a href="#" onClick={showFahrenheit} id="fahrenheit">°F</a> 
        </span>
    </div>
  );
} else {
  return (
      <div>
        <span id="temp">{Math.round((props.celsius)*(9/5) + 32)}</span>
        <span id="temp-change">
        <a href="#" onClick={showCelsius} id="celsius">°C</a> 
        <strong>|</strong>
        <a href="#" onClick={showFahrenheit} id="fahrenheit">°F</a> 
        </span>
    </div>
  )
}
}