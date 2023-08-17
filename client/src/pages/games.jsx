import "./styles.css";
import Page from "../components/page/Page.jsx";
import GameList from "../components/games/game-list/GameList";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/UI/spinner/Spinner";
import AddGameCard from "../components/add-game-card/AddGameCard";
import axios from "axios";
import { useContext } from "react";
import { LoggedUserContext } from "..";

const Games = () => {
  const [games, loading, error] = useFetch("/api/games");
  const userInfo = useContext(LoggedUserContext);

  const addNewGame = async (game) => {
    await axios.post("/api/games", {
      ...game,
      master: userInfo.user.username,
    });
  };

  if (!games)
    return (
      <Page>
        <Spinner />
      </Page>
    );
  else {
    return (
      <Page>
        <AddGameCard addGame={(game) => addNewGame(game)} />
        <GameList games={games.games} />
      </Page>
    );
  }
};

export default Games;
