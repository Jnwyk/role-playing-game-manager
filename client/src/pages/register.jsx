import Button from "../components/UI/button/Button";
import RegisterForm from "../components/forms/register-form/RegisterForm";
import LoginFooter from "../components/footers/login-footer/LoginFooter";
import { Link } from "react-router-dom";
import "./styles.css";
import axios from "axios";

const Register = () => {
  const handleSetRegisterUser = async (user) => {
    await axios.post("/api/auth/signup/traditional", { ...user });
    window.location.href = "http://localhost:3000/";
  };

  return (
    <>
      <div className="background" />
      <Link to={"/"}>
        <Button className="register__button-top-right">Login</Button>
      </Link>
      <div className="central-container">
        <RegisterForm registerUser={(user) => handleSetRegisterUser(user)} />
      </div>
      <LoginFooter />
    </>
  );
};

export default Register;
