import "./styles.css";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import Page from "../components/page/Page.jsx";
import CharacterForm from "../components/forms/character-form/CharacterForm";
import CharacterCard from "../components/game/character-card/CharacterCard";
import { useParams } from "react-router-dom";
import LogCard from "../components/log-card/LogCard";
import LogForm from "../components/forms/log-form/LogForm";
import Spinner from "../components/UI/spinner/Spinner";

const Game = () => {
  const { gameId } = useParams();
  const [updateData, setUpdateData] = useState(false);
  const [game, loading, error] = useFetch(`/api/games/${gameId}`, updateData);

  const addNewCharacter = async (character) => {
    setUpdateData(!updateData);
    await axios.post("/api/character", { ...character, game: gameId });
  };

  const updateLog = async (text, logId) => {
    await axios.put(`/api/log/${logId}`, { text: text });
    setUpdateData(!updateData);
  };

  const addNewLog = async (text) => {
    await axios.post("/api/log", { text: text, game: gameId });
    setUpdateData(!updateData);
  };

  if (!game)
    return (
      <Page>
        <Spinner />
      </Page>
    );
  else
    return (
      <Page>
        <div className="game__second-row">
          <div className="game__card">
            {game.characters.map((character) => (
              <CharacterCard
                key={character._id}
                picture={character.picture}
                name={character.name}
                player={character.player}
                profession={character.profession}
                description={character.description}
                statistics={character.statistics}
              />
            ))}
            <CharacterForm
              players={game.game.players}
              addNewCharacter={(character) => addNewCharacter(character)}
            />
          </div>
          <div className="game__card">
            <LogForm addLog={(text) => addNewLog(text)} />
            {game.logs
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((log) => (
                <LogCard
                  key={log.id}
                  log={log}
                  changeText={(text) => updateLog(text, log._id)}
                />
              ))}
          </div>
        </div>
      </Page>
    );
};

export default Game;
