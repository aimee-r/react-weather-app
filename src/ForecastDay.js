import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="forecast-block">
      <div className="sub-day">{day()}</div>
      <div className="sub-temp">
        <strong>{maxTemperature()}C </strong> | {minTemperature()}C
        </div>
        <Icon description={props.data.weather[0].description} />
    </div>
  );
}