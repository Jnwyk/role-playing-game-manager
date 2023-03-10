import Button from "../components/button/Button";
import RegisterForm from "../components/register-form/RegisterForm";
import TextInput from "../components/text-input/TextInput";
import LoginFooter from "../components/login-footer/LoginFooter";

const Tests = () => {
  return (
    <main>
      <h2>&lt;TextInput /&gt;</h2>
      <TextInput placeholder="Username" id="username" />
      <br />
      <h2>&lt;Button /&gt;</h2>
      <Button>Register</Button>
      <br />
      <h2>&lt;Register Form /&gt;</h2>
      <RegisterForm />
      <br />
      <div>
        <h2>&lt;Login Footer /&gt;</h2>
        <LoginFooter />
      </div>
    </main>
  );
};

export default Tests;
