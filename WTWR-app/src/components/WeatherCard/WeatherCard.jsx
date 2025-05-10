import { useState } from "react";
import "./WeatherCard.css";
import cloudy from "../../images/weather-card-backdrop-cloudy.svg";
import sunny from "../../images/weather-card-backdrop-sunny.svg";
import foggy from "../../images/weather-card-backdrop-foggy.svg";
import stormy from "../../images/weather-card-backdrop-stormy.svg";
import rainy from "../../images/weather-card-backdrop-rainy.svg";
import snowy from "../../images/weather-card-backdrop-snowy.svg";

function WeatherCard({ weather }) {
  const backdrop = weather.weatherState;

  const backdropToWeather = {
    cloudy,
    sunny,
    foggy,
    stormy,
    rainy,
    snowy,
  };

  return (
    <section className="weather-card">
      <h1 className="weather-card__temp">{Math.floor(weather.temp)}&deg;F</h1>
      <img
        className="weather-card__cloud"
        src={backdropToWeather[backdrop]}
        alt={weather.weatherState}
      />
    </section>
  );
}

export default WeatherCard;
