import TextInput from "../../UI/inputs/text-input/TextInput";
import Button from "../../UI/button/Button";
import "./CharacterForm.css";
import { useState } from "react";
import TextareaInput from "../../UI/inputs/textarea-input/TextareaInput";
import DropdownInput from "../../UI/inputs/dropdown-input/DropdownInput";
import StatisticsForm from "../statistics-form/StatisticsForm";
import Card from "../../UI/card/Card";

const CharacterForm = ({ players, addNewCharacter }) => {
  const [active, setActive] = useState(false);
  const [character, setCharacter] = useState({
    name: "",
    picture: "",
    description: "",
    player: "",
    statistics: {},
  });

  const constructPlayersUsernameArray = () =>
    players.map((player) => player.username);

  const handleCharacterInputChange = (key, input) => {
    setCharacter({ ...character, [key]: input });
  };

  const addStatistics = (key, value) => {
    console.log(key);
    if (!key || key === "" || !value || value === "") return;
    setCharacter({
      ...character,
      statistics: { ...character.statistics, [key]: value },
    });
  };

  const createCharacter = (e) => {
    e.preventDefault();
    setActive(!active);
    addNewCharacter(character);
    setCharacter({
      name: "",
      picture: "",
      description: "",
      player: "",
      statistics: {},
    });
  };

  const isCharacterFormOk = () => {
    if (
      character.name !== "" &&
      character.picture !== "" &&
      character.player !== "" &&
      character.profession !== ""
    ) {
      return true;
    }
    return false;
  };

  if (active) {
    return (
      <Card className="character-form">
        <TextInput
          label="Character Name"
          placeholder="Name..."
          id="name"
          changeInput={(input) => handleCharacterInputChange("name", input)}
          value={character.name}
        />
        <TextInput
          label="Character Picture"
          placeholder="Picture URL..."
          id="picture"
          changeInput={(input) => handleCharacterInputChange("picture", input)}
          value={character.picture}
        />
        <DropdownInput
          label="Player"
          players={constructPlayersUsernameArray()}
          changeInput={(input) => handleCharacterInputChange("player", input)}
        />
        <TextInput
          label="Character Profession"
          placeholder="Profession..."
          id="picture"
          changeInput={(input) =>
            handleCharacterInputChange("profession", input)
          }
          value={character.profession}
        />
        <TextareaInput
          label="Character description"
          placeholder="Description..."
          id="description"
          changeInput={(input) =>
            handleCharacterInputChange("description", input)
          }
        />
        <StatisticsForm
          addStatistic={(key, value) => addStatistics(key, value)}
          statistics={character.statistics}
        />
        <Button
          type="submit"
          disabled={isCharacterFormOk() ? false : true}
          className="character-form__button"
          onClick={(e) => createCharacter(e)}
        >
          Submit
        </Button>
      </Card>
    );
  } else {
    return (
      <Card className="character-form">
        <Button
          className="character-form__button"
          onClick={() => setActive(true)}
        >
          Add character
        </Button>
      </Card>
    );
  }
};

export default CharacterForm;
