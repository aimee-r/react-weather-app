import React from 'react';
import clouds from './images/clouds.png';
import sun from './images/sun.png';
import rain from './images/rain.png';


export default function Icon(props) {

    if (props.description === "clear sky") {
        return (
            <img id="main-icon" src={sun} alt="Sun" />
        )
    } 
    if (props.description === "rain") {
        return (
            <img id="main-icon" src={rain} alt="Rain" />
        )
    }
       if (props.description === "broken clouds") {
        return (
            <img id="main-icon" src={clouds} alt="Clouds" />
        )
    }
    
    else {
        return (
            <img id="main-icon" src={clouds} alt="Clouds" />
        )
    }
  }