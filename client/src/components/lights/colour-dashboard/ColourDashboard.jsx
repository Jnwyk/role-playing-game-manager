import "./ColourDashboard.css";
import { useState } from "react";
import ColourCard from "../colour-card/ColourCard";
import ToggleLightsCard from "../toggle-lights-card/ToggleLightsCard";

const ColourDashboard = () => {
  const [isOn, setIsOn] = useState(false);
  const [isBind, setIsBind] = useState(false);
  const [colours, setColours] = useState([
    {
      red: 255,
      green: 255,
      blue: 255,
    },
    {
      red: 255,
      green: 255,
      blue: 255,
    },
    {
      red: 255,
      green: 255,
      blue: 255,
    },
  ]);

  const turnLightsOnOff = () => {
    setIsOn(!isOn);
  };

  const bindLights = () => {
    setIsBind(!isBind);
  };

  const handleChangeColour = (name, value, index) => {
    if (value < 0 || value > 255) return;
    if (isBind) {
      setColours([
        { ...colours[index], [name]: Number(value) },
        { ...colours[index], [name]: Number(value) },
        { ...colours[index], [name]: Number(value) },
      ]);
    } else {
      if (index === 0)
        setColours([
          { ...colours[0], [name]: Number(value) },
          colours[1],
          colours[2],
        ]);
      else if (index === 1) {
        setColours([
          colours[0],
          { ...colours[1], [name]: Number(value) },
          colours[2],
        ]);
      } else {
        setColours([
          colours[0],
          colours[1],
          { ...colours[2], [name]: Number(value) },
        ]);
      }
    }
  };

  return (
    <div className="colour-dashboard">
      {console.log(colours)}
      {console.log("Is on: " + isOn)}
      {console.log("Is bind: " + isBind)}
      <ToggleLightsCard
        turnLightsOnOff={() => turnLightsOnOff()}
        bindLights={() => bindLights()}
      />
      <div className="colour-card-container">
        <ColourCard
          colour={colours[0]}
          changeColour={(name, value) => handleChangeColour(name, value, 0)}
        />
        <ColourCard
          colour={colours[1]}
          changeColour={(name, value) => handleChangeColour(name, value, 1)}
        />
        <ColourCard
          colour={colours[2]}
          changeColour={(name, value) => handleChangeColour(name, value, 2)}
        />
      </div>
    </div>
  );
};

export default ColourDashboard;
