import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "b6c516da5eaaa3o3f0cb04t9c962c4a1";
  let latitude = props.coordinates.latitude;
  let longitude = props.coordinates.longitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="overcast clouds" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max"></span>19{" "}
            <span className="WeatherForecast-temp-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
