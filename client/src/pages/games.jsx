import "./styles.css";
import Page from "../components/page/Page.jsx";
import GameList from "../components/games/game-list/GameList";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/UI/spinner/Spinner";

const Games = () => {
  const [games, loading, error] = useFetch("/api/games");

  if (!games)
    return (
      <Page>
        <Spinner />
      </Page>
    );
  else {
    return (
      <Page>
        <GameList games={games.games} />
      </Page>
    );
  }
};

export default Games;
