import "./DeleteConfirmationModal.css";

function DeleteConfirmationModal({
  isOpen,
  handleCardDelete,
  handleCloseClick,
  handleMouseDown,
}) {
  return (
    <div
      onMouseDown={handleMouseDown}
      className={`modal ${isOpen && "modal_opened"}`}
    >
      <div className="modal__content modal__content_delete ">
        <button
          type="button"
          onClick={handleCloseClick}
          className="modal__close modal__close_type_item"
        ></button>
        <h2 className="modal__delete-title">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </h2>
        <button
          onClick={handleCardDelete}
          className="modal__delete-confirm-btn"
          type="button"
        >
          Yes, delete item
        </button>
        <button
          onClick={handleCloseClick}
          className="modal__delete-cancel-btn"
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
export default DeleteConfirmationModal;
