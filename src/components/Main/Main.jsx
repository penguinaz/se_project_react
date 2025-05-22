import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";
import { useContext } from "react";

function Main({ defaultClothingItems, weatherData, handleCardClick }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);

  return (
    <main>
      <WeatherCard weather={weatherData} />
      <section className="cards">
        <p className="cards__text">
          {`Today is ${
            currentTempUnit === "F"
              ? weatherData.temp.F + "\u00B0F"
              : weatherData.temp.C + "\u00B0C"
          }  / You may want to wear:`}
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type; // weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  handleCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
