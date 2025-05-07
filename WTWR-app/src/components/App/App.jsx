import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

import { defaultClothingItems } from "../../utils/constants";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  // for testing item modal

  const handleAddBtnClick = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("view-card");
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

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header handleAddBtnClick={handleAddBtnClick} />
          <Main weatherData={weatherData} handleCardClick={handleCardClick} />
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
          activeModal={activeModal}
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
                id="cold"
                className="modal__input modal__input_type_radio"
              />{" "}
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
      </div>
    </>
  );
}

export default App;
