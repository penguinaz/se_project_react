import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";
import {
  getWeather,
  getWeatherType,
  assessWeatherCode,
} from "../../utils/weatherApi";
import {
  defaultClothingItems,
  weatherApiReqStrings,
} from "../../utils/constants";
import AddItemModal from "../AddItemModal/AddItemModal";

function App() {
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [weatherData, setWeatherData] = useState({
    temp: { F: "", C: "" },
    type: "",
    weatherState: "",
    location: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  // for testing item modal

  const handleToggleSwitchChange = () => {
    setCurrentTempUnit(currentTempUnit === "F" ? "C" : "F");
  };

  const handleAddBtnClick = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("view-card");
  };

  const handleMenuClick = () => {
    setActiveModal("mobile-menu");
  };

  const handleCloseClick = () => {
    setActiveModal("");
  };

  const handleEscPress = (e) => {
    if (e.key == "Escape") {
      setActiveModal("");
    }
  };

  const handleMouseDown = (e) => {
    if (
      e.target.classList.contains("modal_opened") ||
      e.target.classList.contains("modal__close")
    ) {
      setActiveModal("");
    }
  };

  const handleAddItemSubmit = (name, weatherType, imageUrl) => {
    setClothingItems([
      ...clothingItems,
      {
        _id: clothingItems.length,
        name: name,
        weather: weatherType,
        link: imageUrl,
      },
    ]);
  };

  useEffect(() => {
    getWeather(weatherApiReqStrings)
      .then((data) => {
        setWeatherData({
          temp: {
            F: Math.floor(data.main.temp),
            C: Math.round(((data.main.temp - 32) * 5) / 9),
          },
          type: getWeatherType(data.main.temp),
          weatherState: assessWeatherCode(data.weather[0].id),
          location: data.name,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <CurrentTempUnitContext.Provider
        value={{ currentTempUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <div className="page__content">
            <Header
              location={weatherData.location}
              handleAddBtnClick={handleAddBtnClick}
              handleMenuClick={handleMenuClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    clothingItems={clothingItems}
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    clothingItems={clothingItems}
                    handleCardClick={handleCardClick}
                    handleAddBtnClick={handleAddBtnClick}
                  />
                }
              />
            </Routes>
            <Footer />
          </div>
          <ItemModal
            activeModal={activeModal}
            handleCloseClick={handleCloseClick}
            handleEscPress={handleEscPress}
            handleMouseDown={handleMouseDown}
            card={selectedCard}
          />

          <AddItemModal
            isOpen={activeModal === "add-garment"}
            handleCloseClick={handleCloseClick}
            handleEscPress={handleEscPress}
            handleMouseDown={handleMouseDown}
            handleAddItemSubmit={handleAddItemSubmit}
          />
        </div>
      </CurrentTempUnitContext.Provider>
    </>
  );
}

export default App;
