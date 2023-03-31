import "./RegisterForm.css";
import TextInput from "../text-input/TextInput";
import Button from "../button/Button";
import { useState } from "react";
import validateRegister from "../../helpers/validateRegister";
import Card from "../card/Card.jsx";
import RedirectText from "../redirect-text/RedirectText";
import GoogleButton from "react-google-button";

const RegisterForm = () => {
  const [isFormRight, setIsFormRight] = useState({
    username: true,
    email: true,
    password: true,
  });
  const [userForm, setUserForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signIn, setSignIn] = useState("traditional");

  const handleSetUserForm = (e) => {
    e.preventDefault();
    if (
      validateRegister(e.target[0].value, e.target[1].value, e.target[2].value)
    ) {
      setIsFormRight({
        username: true,
        email: true,
        password: true,
      });
      setUserForm({
        username: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
      });
    } else {
      setIsFormRight(false);
      setUserForm({
        username: "",
        email: "",
        password: "",
      });
    }
  };

  const handleSetSignIn = () => {
    if (signIn === "traditional") setSignIn("google");
    else setSignIn("traditional");
  };

  if (signIn === "google")
    return (
      <Card className="register-form__container">
        <form onSubmit={handleSetUserForm} className="login-form__form">
          <GoogleButton
            className="login-form__google-button"
            onClick={() => console.log("Logged in with Google")}
          />
        </form>
        <RedirectText loginType={signIn} onClick={handleSetSignIn} />
      </Card>
    );
  else
    return (
      <Card className="register-form__container">
        <form onSubmit={handleSetUserForm} className="login-form__form">
          <TextInput
            placeholder="Username"
            id="username"
            isRight={isFormRight ? "right" : "wrong"}
          />
          <TextInput
            placeholder="Email"
            id="email"
            isRight={isFormRight ? "right" : "wrong"}
          />
          <TextInput
            placeholder="Password"
            id="password"
            isRight={isFormRight ? "right" : "wrong"}
          />
          <Button type="submit ">Register</Button>
        </form>
        <RedirectText loginType={signIn} onClick={handleSetSignIn} />
      </Card>
    );
};

export default RegisterForm;
