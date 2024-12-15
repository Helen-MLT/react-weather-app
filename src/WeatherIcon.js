import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "sky is clear": "CLEAR_DAY",
    "clear sky": "CLEAR_DAY",
    "thunderstorm-day": "RAIN",
    snow: "SNOW",
    "light snow": "SNOW",
    "rain and snow": "SNOW",
    "few clouds": "PARTLY_CLOUDY_DAY",
    "scattered clouds": "PARTLY_CLOUDY_DAY",
    "overcast clouds": "CLOUDY",
    "broken clouds": "CLOUDY",
    "shower rain": "RAIN",
    "light rain": "RAIN",
    "heavy intensity rain": "RAIN",
    "light intensity drizzle": "RAIN",
    "moderate rain": "RAIN",
    mist: "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="black"
      size={props.size}
      animate={true}
    />
  );
}
