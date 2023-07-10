import "./styles.css";
import Page from "../components/page/Page";
import ColourCard from "../components/colour-card/ColourCard";
import { useState } from "react";

const Lights = () => {
  const [isOn, setIsOn] = useState(false);
  const [isBind, setIsBind] = useState(false);

  const colour = {
    red: 255,
    green: 255,
    blue: 255,
  };
  return (
    <Page>
      <ColourCard colour={colour} />
    </Page>
  );
};

export default Lights;
