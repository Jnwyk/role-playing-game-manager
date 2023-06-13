import CharacterForm from "../components/character-form/CharacterForm";
import Page from "../components/page/Page";
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

  const addNewCharacter = async (character) => {
    await axios.post("/api/character", { ...character });
  };

  return (
    <Page>
      <CharacterForm
        players={game ? game.players : []}
        addNewCharacter={(character) => addNewCharacter(character)}
      />
      <CharacterForm
        players={game ? game.players : []}
        addNewCharacter={(character) => addNewCharacter(character)}
      />
    </Page>
  );
};

export default Tests;
