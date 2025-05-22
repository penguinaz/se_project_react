import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
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
            <Profile
              clothingItems={clothingItems}
              handleCardClick={handleCardClick}
            />
            {/* <Main
              defaultClothingItems={clothingItems}
              weatherData={weatherData}
              handleCardClick={handleCardClick}
            /> */}
            <Footer />
          </div>
          <ItemModal
            activeModal={activeModal}
            handleCloseClick={handleCloseClick}
            handleEscPress={handleEscPress}
            handleMouseDown={handleMouseDown}
            card={selectedCard}
          />
          <ModalWithForm
            title="New garment"
            name="add-garment"
            buttonText="Add garment"
            isOpen={activeModal === "add-garment"}
            handleCloseClick={handleCloseClick}
            handleEscPress={handleEscPress}
            handleMouseDown={handleMouseDown}
          >
            <label htmlFor="name" className="modal__label">
              Name
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="modal__input"
              />
            </label>
            <label htmlFor="imageUrl" className="modal__label">
              Image
              <input
                type="url"
                id="imageUrl"
                placeholder="Image URL"
                className="modal__input"
              />
            </label>
            <fieldset className="modal__radio-buttons">
              <legend className="modal__legend">Set the weather type:</legend>
              <label
                htmlFor="hot"
                className="modal__label modal__label_type_radio"
              >
                <input
                  type="radio"
                  name="radio"
                  id="hot"
                  className="modal__input modal__input_type_radio"
                />{" "}
                Hot
              </label>
              <label
                htmlFor="warm"
                className="modal__label modal__label_type_radio"
              >
                <input
                  type="radio"
                  name="radio"
                  id="warm"
                  className="modal__input modal__input_type_radio"
                />{" "}
                Warm
              </label>
              <label
                htmlFor="cold"
                className="modal__label modal__label_type_radio"
              >
                <input
                  type="radio"
                  name="radio"
                  id="cold"
                  className="modal__input modal__input_type_radio"
                />{" "}
                Cold
              </label>
            </fieldset>
          </ModalWithForm>
        </div>
      </CurrentTempUnitContext.Provider>
    </>
  );
}

export default App;
