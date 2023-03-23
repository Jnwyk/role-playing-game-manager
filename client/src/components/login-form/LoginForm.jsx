import "./LoginForm.css";
import TextInput from "../text-input/TextInput";
import Button from "../button/Button";
import { useState } from "react";
import validateRegister from "../../helpers/validateRegister";

const LoginForm = () => {
  const [userForm, setUserForm] = useState({
    username: "",
    password: "",
  });

  const handleSetUserForm = (e) => {
    e.preventDefault();
    setUserForm({
      username: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    });
  };

  return (
    <div className="login-form__container">
      <form onSubmit={handleSetUserForm} className="login-form__form">
        <TextInput placeholder="Username" id="username" />
        <TextInput placeholder="Password" id="password" />
        <Button type="submit ">Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
