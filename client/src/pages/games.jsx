import "./styles.css";
import { useState, useEffect } from "react";
import Page from "../components/page/Page.jsx";
import GameList from "../components/game-list/GameList";
import SortInput from "../components/sort-input/SortInput";
import { useSearchParams } from "react-router-dom";

const Games = () => {
  const searchOptions = ["creation date", "name", "players", "sessions played"];

  const [games, setGames] = useState([]);
  const [animation, setAnimation] = useState("fade-in");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchData();
    setSearchParams({
      sort: searchOptions[0],
    });
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
          sortByCreationDate();
          break;
        case searchOptions[1]:
          sortByName();
          break;
        case searchOptions[2]:
          sortByPlayers();
          break;
        case searchOptions[3]:
          sortBySessionsPlayed();
          break;
        default:
          sortByCreationDate();
          break;
      }
      setAnimation("fade-in");
    }, 240);
    setSearchParams({ sort: option });
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
    <Page currentPage="games">
      <SortInput
        searchOptions={searchOptions}
        onChange={(option) => sortGames(option)}
      />
      <GameList games={games} animation={animation} />
    </Page>
  );
};

export default Games;
