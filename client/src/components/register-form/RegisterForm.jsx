import "./RegisterForm.css";
import TextInput from "../text-input/TextInput";
import Button from "../button/Button";
import { useState } from "react";
import validateRegister from "../../helpers/validateRegister";

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

  return (
    <div className="login-form__container">
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
    </div>
  );
};

export default RegisterForm;
