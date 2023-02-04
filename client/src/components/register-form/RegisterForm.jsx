import "./RegisterForm.css";
import TextInput from "../text-input/TextInput";
import Button from "../button/Button";
import { useState } from "react";

const RegisterForm = () => {
  const [userForm, setUserForm] = useState({
    username: "",
    email: "",
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
    <div className="register-form__container">
      <form onSubmit={handleSetUserForm} className="register-form__form">
        <TextInput placeholder="Username" id="username" />
        <TextInput placeholder="Email" id="email" />
        <TextInput placeholder="Password" id="password" />
        <Button type="submit ">Register</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
