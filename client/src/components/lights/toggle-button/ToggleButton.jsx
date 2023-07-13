import "./ToggleButton.css";

const ToggleButton = ({ toggleButton }) => {
  return (
    <div className="toggle-light-type__container">
      <label className="toggle-light-type">
        <input
          type="checkbox"
          className="toggle-light-type__button"
          id="checkbox"
          onChange={(e) => toggleButton(e.target.checked)}
        />
        <div className="toggle-light-type__button round"></div>
      </label>
    </div>
  );
};

export default ToggleButton;
