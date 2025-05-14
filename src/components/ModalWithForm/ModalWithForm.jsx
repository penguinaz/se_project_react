import "./ModalWithForm.css";

function ModalWithForm({
  title,
  name,
  buttonText,
  handleCloseClick,
  handleEscPress,
  handleMouseDown,
  isOpen,
  children,
}) {
  document.addEventListener("keydown", handleEscPress);

  return (
    <div
      onMouseDown={handleMouseDown}
      className={`modal ${isOpen && "modal_opened"}`}
    >
      <div className="modal__content">
        <button
          type="button"
          onClick={handleCloseClick}
          className="modal__close"
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form className={`modal__form modal__form_type_${name}`}>
          {children}
          <button className="modal__submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
