import Button from "../components/button/Button";
import RegisterForm from "../components/register-form/RegisterForm";
import LoginFooter from "../components/login-footer/LoginFooter";
import { Link } from "react-router-dom";
import "./styles.css";

const Register = () => {
  return (
    <>
      <div className="background" />
      <Link to={"/"}>
        <Button className="button-top-right">Login</Button>
      </Link>
      <div className="central-container">
        <RegisterForm />
      </div>

      <LoginFooter />
    </>
  );
};

export default Register;
