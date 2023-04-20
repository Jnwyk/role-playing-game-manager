import "./styles.css";
import { useState, useEffect } from "react";
import Page from "../components/page/Page.jsx";
import GameList from "../components/game-list/GameList";
import SortInput from "../components/sort-input/SortInput";

const Games = () => {
  const searchOptions = ["creation date", "name", "players", "sessions played"];

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const games = await fetch("/api/games").then((res) => res.json());
    setGames(games.games);
  };

  const sortGames = (option) => {
    switch (option) {
      case searchOptions[0]:
        return sortByCreationDate();
      case searchOptions[1]:
        return sortByName();
      case searchOptions[2]:
        return sortByPlayers();
      case searchOptions[3]:
        return sortBySessionsPlayed();
      default:
        return sortByCreationDate();
    }
  };

  const sortByCreationDate = () => {
    setGames([
      ...games.sort(
        (gameA, gameB) => new Date(gameA.createdAt) - new Date(gameB.createdAt)
      ),
    ]);
  };

  const sortByName = () => {
    setGames([
      ...games.sort((gameA, gameB) => gameA.name.localeCompare(gameB.name)),
    ]);
  };

  const sortByPlayers = () => {
    setGames([
      ...games.sort(
        (gameA, gameB) => gameA.players.length - gameB.players.length
      ),
    ]);
  };

  const sortBySessionsPlayed = () => {
    setGames([
      ...games.sort(
        (gameA, gameB) => gameA.sessions_played - gameB.sessions_played
      ),
    ]);
  };

  return (
    <Page>
      <SortInput
        searchOptions={searchOptions}
        onChange={(option) => sortGames(option)}
      />
      <GameList games={games} />
    </Page>
  );
};

export default Games;
