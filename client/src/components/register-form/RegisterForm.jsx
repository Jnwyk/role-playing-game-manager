import "./RegisterForm.css";
import TextInput from "../text-input/TextInput";
import Button from "../button/Button";
import { useState } from "react";
import RedirectText from "../redirect-text/RedirectText";
import GoogleButton from "react-google-button";
import FormCard from "../form-card/FormCard.jsx";

const RegisterForm = ({ registerUser }) => {
  const [userForm, setUserForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signIn, setSignIn] = useState("traditional");

  const handleSetRegisterForm = (name, value) => {
    setUserForm({ ...userForm, [name]: value });
  };

  const handleSetSignIn = () => {
    if (signIn === "traditional") setSignIn("google");
    else setSignIn("traditional");
  };

  const submitForm = () => {
    registerUser(userForm);
  };

  if (signIn === "google")
    return (
      <FormCard>
        <GoogleButton
          className="login-form__google-button"
          onClick={() =>
            window.open("http://localhost:3420/api/auth/login/google", "_self")
          }
        />
        <RedirectText loginType={signIn} onClick={handleSetSignIn} />
      </FormCard>
    );
  else
    return (
      <FormCard>
        <TextInput
          placeholder="Username"
          id="username"
          onChange={(value) => handleSetRegisterForm("username", value)}
        />
        <TextInput
          placeholder="Email"
          id="email"
          onChange={(value) => handleSetRegisterForm("email", value)}
        />
        <TextInput
          placeholder="Password"
          id="password"
          onChange={(value) => handleSetRegisterForm("password", value)}
        />
        <Button type="submit" onClick={submitForm}>
          Register
        </Button>
        <RedirectText loginType={signIn} onClick={handleSetSignIn} />
      </FormCard>
    );
};

export default RegisterForm;
