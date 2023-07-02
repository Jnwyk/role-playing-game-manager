import Button from "../components/UI/button/Button";
import LoginForm from "../components/forms/login-form/LoginForm";
import LoginFooter from "../components/footers/login-footer/LoginFooter";
import { Link } from "react-router-dom";
import "./styles.css";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [success, setSuccess] = useState(true);
  const [error, setError] = useState(false);

  const handleSetLoginUser = async (user) => {
    const data = await axios
      .post("/api/auth/login/traditional", { ...user })
      .catch((error) => setError(true));
    if (data.data.username)
      window.location.href = "http://localhost:3000/games";
    else {
      setSuccess(false);
    }
  };

  if (error) {
    return <div>error</div>;
  }
  return (
    <>
      <div className="background" />
      <Link to={"/register"}>
        <Button className="login__button-top-right">Register</Button>
      </Link>
      <div className="central-container">
        <LoginForm
          loginUser={(user) => handleSetLoginUser(user)}
          success={success}
        />
      </div>

      <LoginFooter />
    </>
  );
};

export default Login;
