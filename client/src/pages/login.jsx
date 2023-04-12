import Button from "../components/button/Button";
import LoginForm from "../components/login-form/LoginForm";
import LoginFooter from "../components/login-footer/LoginFooter";
import { Link } from "react-router-dom";
import "./styles.css";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

const Login = () => {
  const [loginUser, setLoginUser] = useState(null);

  const [{ data, loading, error }, fetchData] = useFetch(
    "http://localhost:3000/api/auth/login/traditional",
    "post",
    loginUser,
    "http://localhost:3001/#/games"
  );

  const handleSetLoginUser = (user) => setLoginUser(user);

  return (
    <>
      <div className="background" />
      <Link to={"/register"}>
        <Button className="button-top-right">Register</Button>
      </Link>
      <div className="central-container">
        <LoginForm loginUser={(user) => handleSetLoginUser(user)} />
      </div>

      <LoginFooter />
    </>
  );
};

export default Login;
