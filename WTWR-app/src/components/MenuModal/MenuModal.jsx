import "./MenuModal.css";
import userPicture from "../../images/terrence_pfp.svg";

function MenuModal({ activeModal, handleCloseClick }) {
  return (
    <div
      className={`menu-modal ${
        activeModal === "mobile-menu" && "modal_opened"
      }`}
    >
      <button
        type="button"
        onClick={handleCloseClick}
        className="menu-modal__close"
      ></button>
      <div className="menu-modal__content">
        <div className="menu-modal__user-info">
          <p className="menu-modal__username">Nazars Naumovs</p>
          <img
            src={userPicture}
            alt="profile picture"
            className="menu-modal__userpic"
          />
        </div>
        <button type="button" className="menu-modal__add-btn">
          + Add clothes
        </button>
      </div>
    </div>
  );
}

export default MenuModal;
