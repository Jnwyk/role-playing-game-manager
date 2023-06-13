import TextInput from "../text-input/TextInput";
import Button from "../button/Button";
import "./CharacterForm.css";
import { useState } from "react";
import TextArea from "../text-area/TextArea";
import DropdownInput from "../dropdown-input/DropdownInput";
import StatisticsForm from "../statistics-form/StatisticsForm";

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

  const handleAddStatistic = (e, key, value) => {
    if (!key) return;
    e.preventDefault();
    const { empty, ...newStatistics } = character.statistics;
    setCharacter({
      ...character,
      statistics: { ...newStatistics, [key]: value },
    });
  };

  const createCharacter = (e) => {
    e.preventDefault();
    setActive(!active);
    addNewCharacter(character);
  };

  if (active) {
    return (
      <form className="character-form">
        <TextInput
          label="Character Name"
          placeholder="Name..."
          id="name"
          changeInput={(input) => handleCharacterInputChange("name", input)}
        />
        <TextInput
          label="Character Picture"
          placeholder="Picture URL..."
          id="picture"
          changeInput={(input) => handleCharacterInputChange("picture", input)}
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
        />
        <TextArea
          label="Character description"
          placeholder="Description..."
          id="description"
          changeInput={(input) =>
            handleCharacterInputChange("description", input)
          }
        />
        <StatisticsForm
          addStatistic={(e, key, value) => handleAddStatistic(e, key, value)}
          statistics={character.statistics}
        />
        <Button
          type="submit"
          className="character-form__button"
          onClick={(e) => createCharacter(e)}
        >
          Submit
        </Button>
      </form>
    );
  } else {
    return (
      <div className="character-form">
        <Button
          className="character-form__button"
          onClick={() => setActive(true)}
        >
          Add character
        </Button>
      </div>
    );
  }
};

export default CharacterForm;
