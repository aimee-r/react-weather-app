import React from 'react';
import clouds from './images/clouds.png';
import sun from './images/sun.png';
import rain from './images/rain.png';
import './Weather.css'

export default function Icon(props) {

    if (props.description === "clear sky") {
        return (
            <img className="main-icon" src={sun} alt="Sun" />
        )
    } 
    if (props.description === "rain") {
        return (
            <img className="main-icon" src={rain} alt="Rain" size={props.size} />
        )
    }
       if (props.description === "broken clouds") {
        return (
            <img className="main-icon" src={clouds} alt="Clouds" />
        )
    }
    
    else {
        return (
            <img className="main-icon" src={clouds} alt="Clouds" />
        )
    }
  }