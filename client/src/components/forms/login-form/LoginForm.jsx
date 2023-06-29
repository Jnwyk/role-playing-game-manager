import "./LoginForm.css";
import LoginTextInput from "../../UI/inputs/login-text-input/LoginTextInput";
import Button from "../../UI/button/Button";
import { useState } from "react";
import RedirectText from "../../UI/redirect-text/RedirectText";
import GoogleButton from "react-google-button";
import FormCard from "../../UI/form-card/FormCard";

const LoginForm = ({ loginUser }) => {
  const [userForm, setUserForm] = useState({
    username: "",
    password: "",
  });
  const [signIn, setSignIn] = useState("traditional");

  const handleSetSignIn = () => {
    if (signIn === "traditional") setSignIn("google");
    else setSignIn("traditional");
  };

  const handleSetRegisterForm = (name, value) => {
    setUserForm({ ...userForm, [name]: value });
  };

  const submitForm = () => {
    loginUser(userForm);
  };

  if (signIn === "google")
    return (
      <FormCard>
        <GoogleButton
          className="login-form__google-button"
          onClick={() =>
            window.open("http://localhost:3080/api/auth/login/google", "_self")
          }
        />
        <RedirectText loginType={signIn} onClick={handleSetSignIn} />
      </FormCard>
    );
  else
    return (
      <FormCard>
        <LoginTextInput
          placeholder="Username"
          id="username"
          onChange={(value) => handleSetRegisterForm("username", value)}
        />
        <LoginTextInput
          placeholder="Password"
          id="password"
          onChange={(value) => handleSetRegisterForm("password", value)}
        />
        <Button
          type="submit"
          className="login-form__button"
          onClick={submitForm}
        >
          Login
        </Button>
        <RedirectText loginType={signIn} onClick={handleSetSignIn} />
      </FormCard>
    );
};

export default LoginForm;
