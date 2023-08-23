import "./RegisterForm.css";
import LoginTextInput from "../../UI/inputs/login-text-input/LoginTextInput";
import Button from "../../UI/button/Button";
import { useState } from "react";
import RedirectText from "../../UI/redirect-text/RedirectText";
import GoogleButton from "react-google-button";
import FormCard from "../../UI/form-card/FormCard.jsx";

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

  const submitForm = (e) => {
    e.preventDefault();
    registerUser(userForm);
  };

  const isButtonDisabled = () => {
    if (
      userForm.email === "" ||
      userForm.username === "" ||
      userForm.password === ""
    )
      return true;
    const passwordRegex = new RegExp("^(?=.*[0-9])");
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!passwordRegex.test(userForm.password)) {
      return true;
    }
    if (!emailRegex.test(userForm.email)) {
      return true;
    }
    return false;
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
          placeholder="Email"
          id="email"
          onChange={(value) => handleSetRegisterForm("email", value)}
        />
        <LoginTextInput
          placeholder="Password"
          id="password"
          onChange={(value) => handleSetRegisterForm("password", value)}
        />
        <Button
          type="submit"
          className="register-form__button"
          onClick={(e) => submitForm(e)}
          disabled={isButtonDisabled()}
        >
          Register
        </Button>
        <RedirectText loginType={signIn} onClick={handleSetSignIn} />
      </FormCard>
    );
};

export default RegisterForm;
