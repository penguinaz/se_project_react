import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";
import "./ToggleSwitch.css";
import { useContext } from "react";

function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTempUnit } = useContext(
    CurrentTempUnitContext
  );
  return (
    <label className="toggle-btn">
      <input
        onChange={handleToggleSwitchChange}
        value={currentTempUnit}
        type="checkbox"
        className="toggle-btn__checkbox"
      />
      <div className="toggle-btn__thumb"></div>
      <div className="toggle-btn__text-container">
        <span className="toggle-btn__f">F</span>
        <span className="toggle-btn__c">C</span>
      </div>
    </label>
  );
}

export default ToggleSwitch;
