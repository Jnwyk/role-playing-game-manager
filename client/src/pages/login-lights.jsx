import { redirect, useNavigate } from "react-router-dom";
import LightConnectForm from "../components/light-connect-form/LightConnectForm";
import Page from "../components/page/Page";
import axios from "axios";

const LoginLights = () => {
  const navigate = useNavigate();

  const connectWithLights = async (data) => {
    const result = await axios
      .get(`/api/light`, { params: data })
      .then((res) => res.data)
      .catch((error) => console.log(error));
    if (result.success === true) {
      sessionStorage.setItem("lights", JSON.stringify(data));
      navigate("/lights");
    }
  };

  return (
    <Page>
      <LightConnectForm
        submitLightConnection={(data) => connectWithLights(data)}
      />
    </Page>
  );
};

export default LoginLights;
