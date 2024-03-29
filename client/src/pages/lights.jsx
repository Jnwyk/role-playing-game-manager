import "./styles.css";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import Page from "../components/page/Page";
import ColourDashboard from "../components/lights/colour-dashboard/ColourDashboard";
import Spinner from "../components/UI/spinner/Spinner";

const Lights = () => {
  const [lights, loading, error] = useFetch(
    "/api/light",
    undefined,
    JSON.parse(sessionStorage.getItem("lights"))
  );
  const setLightsOnOff = async (on) => {
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
  if (!lights)
    return (
      <Page>
        <Spinner />
      </Page>
    );
  return (
    <Page>
      <ColourDashboard
        lights={lights.lights}
        handleChangeLightColors={(lightNumber, colour, isBind) =>
          setLightColour(lightNumber, colour, isBind)
        }
        handleTurnLightOnOff={(on) => setLightsOnOff(on)}
      />
    </Page>
  );
};

export default Lights;
