import ToggleButton from "../toggle-button/ToggleButton";
import Card from "../../UI/card/Card";
import "./ToggleLightsCard.css";

const ToggleLightsCard = ({ turnLightsOnOff, bindLights }) => {
  return (
    <Card className="toggle-lights-card">
      <div className="toggle-lights-card__button-container">
        <h2 className="toggle-lights-card__text">Turn OFF/ON</h2>

        <ToggleButton toggleButton={(value) => turnLightsOnOff(value)} />
      </div>
      <div className="toggle-lights-card__button-container">
        <h2 className="toggle-lights-card__text">Bind lights</h2>

        <ToggleButton toggleButton={(value) => bindLights(value)} />
      </div>
    </Card>
  );
};

export default ToggleLightsCard;
