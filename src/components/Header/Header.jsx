import { Link } from "react-router-dom";
import "./Header.css";
import headerLogo from "../../images/wtwr°.svg";
import userPicture from "../../images/terrence_pfp.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ location, handleAddBtnClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__group">
        <Link to={"/"}>
          <img className="header__logo" src={headerLogo} alt="WTWR logo" />
        </Link>
        <p className="header__text">
          {currentDate}, {location}
        </p>
      </div>
      <div className="header__group header__group-user-info">
        <ToggleSwitch />
        <button
          onClick={handleAddBtnClick}
          type="button"
          className="header__add-btn"
        >
          + Add clothes
        </button>
        <Link className="header__link" to={"/profile"}>
          <div className="header__user-info">
            <p className="header__text">Nazars Naumovs</p>
            <img
              className="header__userpic"
              src={userPicture}
              alt="User's profile picture"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
