import "./ItemModal.css";

function ItemModal({
  activeModal,
  handleCloseClick,
  handleEscPress,
  handleMouseDown,
  card,
}) {
  document.addEventListener("keydown", handleEscPress);

  return (
    <div
      onMouseDown={handleMouseDown}
      className={`modal ${activeModal === "view-card" && "modal_opened"}`}
    >
      <div className="modal__content">
        <button
          type="button"
          onClick={handleCloseClick}
          className="modal__close modal__close_type_item-modal"
        ></button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <p className="modal__item-name">{card.name}</p>
        <p className="modal__item-weather">{`Weather: ${card.weather}`}</p>
      </div>
    </div>
  );
}

export default ItemModal;
