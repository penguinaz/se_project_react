import userPicture from "../../images/terrence_pfp.svg";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <img
          className="sidebar__userpic"
          src={userPicture}
          alt="User's profile picture"
        />
        <p className="sidebar__username">Nazars Naumovs</p>
      </div>
    </div>
  );
}

export default SideBar;
