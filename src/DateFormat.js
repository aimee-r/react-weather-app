import React from "react";

export default function DateFormat(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let dateToday = props.date.getDate();
  let monthToday = months[props.date.getMonth()];

  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
    <span id="current-time">{hours}:{minutes}</span> 
    <span id="current-day">{day} | {dateToday} {monthToday} </span>
    </div>
  );
}