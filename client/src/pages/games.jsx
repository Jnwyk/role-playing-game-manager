import "./styles.css";
import Page from "../components/page/Page.jsx";
import GameList from "../components/games/game-list/GameList";
import useFetch from "../hooks/useFetch";

const Games = () => {
  const [games, loading, error] = useFetch("/api/games");

  return <Page>{!games ? " " : <GameList games={games.games} />}</Page>;
};

export default Games;
