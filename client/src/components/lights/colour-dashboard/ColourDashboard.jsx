import "./ColourDashboard.css";
import { useState } from "react";
import ColourCard from "../colour-card/ColourCard";
import ToggleLightsCard from "../toggle-lights-card/ToggleLightsCard";

const ColourDashboard = ({
  lights,
  handleTurnLightOnOff,
  handleChangeLightColors,
}) => {
  const [isBind, setIsBind] = useState(false);
  const [colours, setColours] = useState([
    {
      red: lights[1].r,
      green: lights[1].g,
      blue: lights[1].b,
    },
    {
      red: lights[1].r,
      green: lights[2].g,
      blue: lights[2].b,
    },
    {
      red: lights[1].r,
      green: lights[3].g,
      blue: lights[3].b,
    },
  ]);

  const turnLightsOnOff = (value) => {
    handleTurnLightOnOff(value);
  };

  const bindLights = (value) => {
    setIsBind(value);
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
      <ToggleLightsCard
        turnLightsOnOff={(value) => turnLightsOnOff(value)}
        bindLights={(value) => bindLights(value)}
      />
      <div className="colour-card-container">
        <ColourCard
          colour={colours[0]}
          changeColour={(name, value) => handleChangeColour(name, value, 0)}
          setColour={() => handleChangeLightColors(1, colours[0], isBind)}
        />
        <ColourCard
          colour={colours[1]}
          changeColour={(name, value) => handleChangeColour(name, value, 1)}
          setColour={() => handleChangeLightColors(2, colours[1], isBind)}
        />
        <ColourCard
          colour={colours[2]}
          changeColour={(name, value) => handleChangeColour(name, value, 2)}
          setColour={() => handleChangeLightColors(3, colours[2], isBind)}
        />
      </div>
    </div>
  );
};

export default ColourDashboard;
