import Button from "../components/UI/button/Button";
import LoginForm from "../components/forms/login-form/LoginForm";
import LoginFooter from "../components/footers/login-footer/LoginFooter";
import { Link } from "react-router-dom";
import "./styles.css";
import axios from "axios";

const Login = () => {
  const handleSetLoginUser = async (user) => {
    await axios.post("/api/auth/login/traditional", { ...user });
    console.log("test");
    window.location.href = "http://localhost:3000/games";
  };

  return (
    <>
      <div className="background" />
      <Link to={"/register"}>
        <Button className="login__button-top-right">Register</Button>
      </Link>
      <div className="central-container">
        <LoginForm loginUser={(user) => handleSetLoginUser(user)} />
      </div>

      <LoginFooter />
    </>
  );
};

export default Login;
