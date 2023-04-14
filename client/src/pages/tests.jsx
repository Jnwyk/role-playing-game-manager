import Button from "../components/button/Button";
import RegisterForm from "../components/register-form/RegisterForm";
import LoginForm from "../components/login-form/LoginForm";
import TextInput from "../components/text-input/TextInput";
import LoginFooter from "../components/login-footer/LoginFooter";
import UserCard from "../components/user-card/UserCard";
import Navbar from "../components/navbar/Navbar";
import GameCard from "../components/game-card/GameCard";

const Tests = () => {
  return (
    <main>
      <h2>&lt;TextInput /&gt;</h2>
      <TextInput placeholder="Username" id="username" />
      <br />
      <h2>&lt;Button /&gt;</h2>
      <Button>Register</Button>
      <br />
      <h2>&lt;Login Form /&gt;</h2>
      <LoginForm />
      <br />
      <h2>&lt;UserCard /&gt;</h2>
      <UserCard
        username="Jnwyk"
        photo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Calico_tabby_cat_-_Savannah.jpg/1200px-Calico_tabby_cat_-_Savannah.jpg"
      />
      <br />
      <h2>&lt;Test /&gt;</h2>
      <Navbar />
      <br />
      <h2>&lt;Login Footer /&gt;</h2>
      <LoginFooter />
      <br />
      <h2>&lt;GameCard /&gt;</h2>
      <GameCard />
    </main>
  );
};

export default Tests;
