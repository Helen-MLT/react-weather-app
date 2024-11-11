import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Helen-MLT"
            target="_blank"
            rel="noreferrer"
          >
            Hélèna Milletti
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Helen-MLT/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
