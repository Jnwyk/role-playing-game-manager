import Button from "../components/UI/button/Button";
import LoginForm from "../components/forms/login-form/LoginForm";
import LoginFooter from "../components/footers/login-footer/LoginFooter";
import { Link } from "react-router-dom";
import "./styles.css";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [loginUser, setLoginUser] = useState(null);

  const handleSetLoginUser = async (user) => {
    // const [{ data, loading, error }, fetchData] = useFetch(
    //   "http://localhost:3080/api/auth/login/traditional",
    //   "post",
    //   loginUser,
    //   "http://localhost:3000/#/games"
    // );
    const data = await axios({
      method: "post",
      url: "/api/auth/login/traditional",
      data: user,
    });
  };

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
