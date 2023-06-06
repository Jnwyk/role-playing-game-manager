import Button from "../components/button/Button";
import RegisterForm from "../components/register-form/RegisterForm";
import LoginForm from "../components/login-form/LoginForm";
import TextInput from "../components/text-input/TextInput";
import LoginFooter from "../components/login-footer/LoginFooter";
import UserCard from "../components/user-card/UserCard";
import Navbar from "../components/navbar/Navbar";
import GameCard from "../components/game-card/GameCard";
import LogoAndText from "../components/logo-and-text/LogoAndText";
import SpotifyLogin from "../components/spotify-login/SpotifyLogin";

const Tests = () => {
  return (
    <main>
      <br />
      <h2>&lt;LogoAndText /&gt;</h2>
      <LogoAndText iconName="BiWorld" text="The Witcher" />
      <LogoAndText iconName="FaCrown" text="Jnwyk" />
      <LogoAndText iconName="BsPeopleFill" text="4" />
      <LogoAndText iconName="test" text="no icon" />
    </main>
  );
};

export default Tests;
