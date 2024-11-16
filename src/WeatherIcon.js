import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "clear sky": "CLEAR_DAY",
    "clear sky": "CLEAR_NIGHT",
    "thunderstorm-day": "RAIN",
    "snow-day": "SNOW",
    "few clouds": "PARTLY_CLOUDY_DAY",
    "few clouds": "PARTLY_CLOUDY_NIGHT",
    "scattered clouds": "PARTLY_CLOUDY_DAY",
    "overcast clouds": "CLOUDY",
    "scattered clouds": "PARTLY_CLOUDY_NIGHT",
    "broken clouds": "CLOUDY",
    "broken clouds": "CLOUDY",
    "shower rain": "RAIN",
    "shower rain": "RAIN",
    "mist-day": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="black"
      size={64}
      animate={true}
    />
  );
}
