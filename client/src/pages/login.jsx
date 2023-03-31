import Button from "../components/button/Button";
import LoginForm from "../components/login-form/LoginForm";
import LoginFooter from "../components/login-footer/LoginFooter";
import "./styles.css";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/images/background.png")`,
        height: "100vh",
      }}
    >
      <Button className="button-top-right">Register</Button>
      <div className="central-container">
        <LoginForm />
      </div>

      <LoginFooter />
    </div>
  );
};

export default Login;
