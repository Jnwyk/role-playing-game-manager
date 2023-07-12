import "./styles.css";
import axios from "axios";
import Page from "../components/page/Page";
import ColourDashboard from "../components/lights/colour-dashboard/ColourDashboard";

const Lights = () => {
  const setLightsOnOff = async (on) => {
    console.log(on);
    await axios.put("/api/light/state", { on: on });
  };

  const setLightColour = async (lightNumber, colour, isBind) => {
    if (isBind) {
      await axios.put(`/api/light/color/1`, colour);
      await axios.put(`/api/light/color/2`, colour);
      await axios.put(`/api/light/color/3`, colour);
    } else {
      await axios.put(`/api/light/color/${lightNumber}`, colour);
    }
  };

  return (
    <Page>
      <ColourDashboard
        handleChangeLightColors={(lightNumber, colour, isBind) =>
          setLightColour(lightNumber, colour, isBind)
        }
        handleTurnLightOnOff={(on) => setLightsOnOff(on)}
      />
    </Page>
  );
};

export default Lights;
