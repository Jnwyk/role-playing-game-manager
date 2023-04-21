import "./styles.css";
import { useState, useEffect } from "react";
import Page from "../components/page/Page.jsx";
import GameList from "../components/game-list/GameList";
import SortInput from "../components/sort-input/SortInput";

const Games = () => {
  const searchOptions = ["creation date", "name", "players", "sessions played"];

  const [games, setGames] = useState([]);
  const [animation, setAnimation] = useState("fade-in");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const games = await fetch("/api/games").then((res) => res.json());
    setGames(games.games);
  };

  const sortGames = (option) => {
    setAnimation("fade-out");
    setTimeout(() => {
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
    }, 240);
  };

  const sortByCreationDate = () => {
    setGames([
      ...games.sort(
        (gameA, gameB) => new Date(gameA.createdAt) - new Date(gameB.createdAt)
      ),
    ]);
    setAnimation("fade-in");
  };

  const sortByName = () => {
    setGames([
      ...games.sort((gameA, gameB) => gameA.name.localeCompare(gameB.name)),
    ]);
    setAnimation("fade-in");
  };

  const sortByPlayers = () => {
    setGames([
      ...games.sort(
        (gameA, gameB) => gameA.players.length - gameB.players.length
      ),
    ]);
    setAnimation("fade-in");
  };

  const sortBySessionsPlayed = () => {
    setGames([
      ...games.sort(
        (gameA, gameB) => gameA.sessions_played - gameB.sessions_played
      ),
    ]);
    setAnimation("fade-in");
  };

  return (
    <Page>
      <SortInput
        searchOptions={searchOptions}
        onChange={(option) => sortGames(option)}
      />
      <GameList games={games} animation={animation} />
    </Page>
  );
};

export default Games;
