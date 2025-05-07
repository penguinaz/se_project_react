import "./WeatherCard.css";
import backdrop from "../../images/weather-card-backdrop.svg";

function WeatherCard() {
  return (
    <section className="weather-card">
      <h1 className="weather-card__temp">75°F</h1>
      <img className="weather-card__cloud" src={backdrop} alt="Clouds design" />
    </section>
  );
}

export default WeatherCard;
