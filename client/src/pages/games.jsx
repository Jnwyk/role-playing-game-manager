import "./styles.css";
import { useState, useEffect } from "react";
import Page from "../components/page/Page.jsx";
import GameList from "../components/games/game-list/GameList";

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const games = await fetch("/api/games").then((res) => res.json());
    setGames(games.games);
  };

  return (
    <Page>
      <GameList games={games} />
    </Page>
  );
};

export default Games;
