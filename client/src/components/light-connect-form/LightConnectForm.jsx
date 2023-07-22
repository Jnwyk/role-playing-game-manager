import { useState } from "react";
import FormCard from "../UI/form-card/FormCard";
import TextInput from "../UI/inputs/text-input/TextInput";
import Button from "../UI/button/Button";
import "./LightConnectForm.css";

const LightConnectForm = ({ submitLightConnection }) => {
  const [connectData, setConnectData] = useState({ ip: "", username: "" });

  const handleSubmitLightConnection = (event) => {
    event.preventDefault();
    submitLightConnection(connectData);
  };

  return (
    <FormCard>
      <TextInput
        id="ipAddress"
        label="IP address"
        placeholder="Enter ip..."
        changeInput={(value) => setConnectData({ ...connectData, ip: value })}
        value={connectData.ip}
      />
      <TextInput
        id="LightUsername"
        label="Username"
        placeholder="Enter username..."
        changeInput={(value) =>
          setConnectData({ ...connectData, username: value })
        }
        value={connectData.username}
      />
      <Button onClick={(event) => handleSubmitLightConnection(event)}>
        Connect
      </Button>
    </FormCard>
  );
};

export default LightConnectForm;
