import Button from "../components/button/Button";
import RegisterForm from "../components/register-form/RegisterForm";
import LoginFooter from "../components/login-footer/LoginFooter";
import "./styles.css";

const Register = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/images/background.png")`,
        height: "100vh",
      }}
    >
      <Button className="button-top-right">Login</Button>
      <div className="central-container">
        <RegisterForm />
      </div>

      <LoginFooter />
    </div>
  );
};

export default Register;
