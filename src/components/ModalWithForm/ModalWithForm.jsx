import "./ModalWithForm.css";

function ModalWithForm({
  title,
  name,
  buttonText,
  handleCloseClick,
  handleEscPress,
  handleMouseDown,
  handleSubmit,
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
        <form
          noValidate
          onSubmit={handleSubmit}
          className={`modal__form modal__form_type_${name}`}
        >
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
