import Button from "../components/button/Button";
import RegisterForm from "../components/register-form/RegisterForm";
import LoginFooter from "../components/login-footer/LoginFooter";
import { Link } from "react-router-dom";
import "./styles.css";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Register = () => {
  const [registeredUser, setRegisteredUser] = useState(null);

  const [{ data, loading, error }, fetchData] = useFetch(
    "http://localhost:3420/api/auth/signup/traditional",
    "post",
    registeredUser,
    "http://localhost:3000/#/"
  );

  const handleSetRegisterUser = (user) => setRegisteredUser(user);

  return (
    <>
      <div className="background" />
      <Link to={"/"}>
        <Button className="button-top-right">Login</Button>
      </Link>
      <div className="central-container">
        <RegisterForm registerUser={(user) => handleSetRegisterUser(user)} />
      </div>
      <LoginFooter />
      {console.log(registeredUser)}
    </>
  );
};

export default Register;
