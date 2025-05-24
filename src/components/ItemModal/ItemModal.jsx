import "./ItemModal.css";

function ItemModal({
  activeModal,
  handleCloseClick,
  handleEscPress,
  handleMouseDown,
  openConfirmationModal,
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
          className="modal__close modal__close_type_item"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__options">
          <div className="modal__caption">
            <p className="modal__item-name">{card.name}</p>
            <p className="modal__item-weather">{`Weather: ${card.weather}`}</p>
          </div>
          <button
            className="modal__delete-btn"
            type="button"
            onClick={openConfirmationModal}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
