import Button from "../components/button/Button";
import LoginForm from "../components/login-form/LoginForm";
import LoginFooter from "../components/login-footer/LoginFooter";
import { Link } from "react-router-dom";
import "./styles.css";

const Login = () => {
  return (
    <>
      <div className="background" />
      <Link to={"/register"}>
        <Button className="button-top-right">Register</Button>
      </Link>
      <div className="central-container">
        <LoginForm />
      </div>

      <LoginFooter />
    </>
  );
};

export default Login;
