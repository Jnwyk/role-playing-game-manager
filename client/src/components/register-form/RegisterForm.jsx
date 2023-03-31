import "./RegisterForm.css";
import TextInput from "../text-input/TextInput";
import Button from "../button/Button";
import { useState } from "react";
import RedirectText from "../redirect-text/RedirectText";
import GoogleButton from "react-google-button";
import FormCard from "../form-card/FormCard.jsx";

const RegisterForm = () => {
  const [userForm, setUserForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signIn, setSignIn] = useState("traditional");

  const handleSetUserForm = (e) => {
    e.preventDefault();
    setUserForm({
      username: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    });
  };

  const handleSetSignIn = () => {
    if (signIn === "traditional") setSignIn("google");
    else setSignIn("traditional");
  };

  if (signIn === "google")
    return (
      <FormCard>
        <GoogleButton
          className="login-form__google-button"
          onClick={() => console.log("Logged in with Google")}
        />
        <RedirectText loginType={signIn} onClick={handleSetSignIn} />
      </FormCard>
    );
  else
    return (
      <FormCard>
        <TextInput placeholder="Username" id="username" />
        <TextInput placeholder="Email" id="email" />
        <TextInput placeholder="Password" id="password" />
        <Button type="submit ">Register</Button>
        <RedirectText loginType={signIn} onClick={handleSetSignIn} />
      </FormCard>
    );
};

export default RegisterForm;
