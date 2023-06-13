import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Page from "../components/page/Page.jsx";
import CharacterForm from "../components/character-form/CharacterForm";
import CharacterCard from "../components/character-card/CharacterCard";
import GameCard from "../components/game-card/GameCard";
import { useParams } from "react-router-dom";

const Game = () => {
  const [game, setGame] = useState();
  const [newCharacter, setNewCharacter] = useState(false);
  const { gameId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`/api/games/${gameId}`)
        .then((res) => setGame({ ...res.data }));
    };
    fetchData();
  }, [newCharacter]);

  const addNewCharacter = async (character) => {
    setNewCharacter(!newCharacter);
    await axios.post("/api/character", { ...character, game: gameId });
  };

  if (!game) return <Page></Page>;
  else
    return (
      <Page>
        {console.log(game)}
        <div className="game__second-row">
          <div className="game__characters">
            {game.characters.map((character) => (
              <CharacterCard
                key={character._id}
                picture={character.picture}
                name={character.name}
                player={character.player}
                description={character.description}
                statistics={character.statistics}
              />
            ))}
            <CharacterForm
              players={game.game.players}
              addNewCharacter={(character) => addNewCharacter(character)}
            />
          </div>
        </div>
      </Page>
    );
};

export default Game;
