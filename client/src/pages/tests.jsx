import Button from "../components/button/Button";
import RegisterForm from "../components/register-form/RegisterForm";
import LoginForm from "../components/login-form/LoginForm";
import LoginTextInput from "../components/login-text-input/LoginTextInput";
import LoginFooter from "../components/login-footer/LoginFooter";
import UserCard from "../components/user-card/UserCard";
import Navbar from "../components/navbar/Navbar";
import GameCard from "../components/game-card/GameCard";
import LogoAndText from "../components/logo-and-text/LogoAndText";
import SpotifyLogin from "../components/spotify-login/SpotifyLogin";
import CharacterForm from "../components/character-form/CharacterForm";
import { useEffect, useState } from "react";
import axios from "axios";

const Tests = () => {
  const [game, setGame] = useState();
  useEffect(() => {
    const fetchData = async () => {
      await axios.get("/api/games").then((res) => setGame(res.data.games[0]));
    };
    fetchData();
  }, []);

  return (
    <main>
      {console.log(game)}
      <br />
      <h2>&lt;Character Form /&gt;</h2>
      <CharacterForm players={game ? game.players : []} />
    </main>
  );
};

export default Tests;
