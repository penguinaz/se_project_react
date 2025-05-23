import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

function AddItemModal({
  isOpen,
  handleCloseClick,
  handleEscPress,
  handleMouseDown,
  handleAddItemSubmit,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weatherType, setWeatherType] = useState("");

  useEffect(() => {
    setName("");
    setImageUrl("");
    setWeatherType("");
  }, [isOpen]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherTypeChange = (e) => {
    setWeatherType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseClick();
    handleAddItemSubmit(name, weatherType, imageUrl);
  };

  return (
    <ModalWithForm
      title="New garment"
      name="add-garment"
      buttonText="Add garment"
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
      handleEscPress={handleEscPress}
      handleMouseDown={handleMouseDown}
      handleSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          required
          type="text"
          id="name"
          placeholder="Name"
          className="modal__input"
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          required
          type="url"
          id="imageUrl"
          placeholder="Image URL"
          className="modal__input"
          onChange={handleImageUrlChange}
          value={imageUrl}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Set the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            name="radio"
            id="hot"
            className="modal__input modal__input_type_radio"
            onChange={handleWeatherTypeChange}
            value="hot"
            checked={weatherType === "hot"}
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            name="radio"
            id="warm"
            className="modal__input modal__input_type_radio"
            onChange={handleWeatherTypeChange}
            value="warm"
            checked={weatherType === "warm"}
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            name="radio"
            id="cold"
            className="modal__input modal__input_type_radio"
            onChange={handleWeatherTypeChange}
            value="cold"
            checked={weatherType === "cold"}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
