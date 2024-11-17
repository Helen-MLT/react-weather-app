import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "clear sky": "CLEAR_DAY",
    "thunderstorm-day": "RAIN",
    "snow-day": "SNOW",
    "few clouds": "PARTLY_CLOUDY_DAY",
    "scattered clouds": "PARTLY_CLOUDY_DAY",
    "overcast clouds": "CLOUDY",
    "broken clouds": "CLOUDY",
    "shower rain": "RAIN",
    "light rain": "RAIN",
    mist: "FOG",
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
