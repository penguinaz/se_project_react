import "./Header.css";
import headerLogo from "../../images/wtwr°.svg";
import userPicture from "../../images/terrence_pfp.svg";

function Header({ handleAddBtnClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__group">
        <img className="header__logo" src={headerLogo} alt="WTWR logo" />
        <p className="header__text">{currentDate}, Bel Air</p>
      </div>
      <div className="header__group">
        <button
          onClick={handleAddBtnClick}
          type="button"
          className="header__add-btn"
        >
          + Add clothes
        </button>
        <div className="header__user-info">
          <p className="header__text">Nazars Naumovs</p>
          <img
            className="header__userpic"
            src={userPicture}
            alt="User's profile picture"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
