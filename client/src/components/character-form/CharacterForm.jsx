import TextInput from "../text-input/TextInput";
import Button from "../button/Button";
import "./CharacterForm.css";
import { useState } from "react";
import TextArea from "../text-area/TextArea";
import DropdownInput from "../dropdown-input/DropdownInput";
import StatisticsForm from "../statistics-form/StatisticsForm";

const CharacterForm = ({ players }) => {
  const [active, setActive] = useState(false);
  const [character, setCharacter] = useState({
    name: "",
    picture: "",
    description: "",
    player: "",
    statistics: {},
  });

  const handleCharacterInputChange = (key, input) => {
    setCharacter({ ...character, [key]: input });
  };

  const handleAddStatistic = (e, key, value) => {
    e.preventDefault();
    const { empty, ...newStatistics } = character.statistics;
    setCharacter({
      ...character,
      statistics: { ...newStatistics, [key]: value },
    });
  };

  const createCharacter = (e) => {
    e.preventDefault();
    console.log(character);
  };

  if (active) {
    return (
      <div className="character-form__container">
        <form>
          <TextInput
            label="Character Name"
            placeholder="Input Name"
            id="name"
            changeInput={(input) => handleCharacterInputChange("name", input)}
          />
          <TextArea
            label="Character description"
            placeholder="type..."
            id="description"
            changeInput={(input) =>
              handleCharacterInputChange("description", input)
            }
          />
          <DropdownInput
            players={players}
            changeInput={(input) => handleCharacterInputChange("player", input)}
          />
          <StatisticsForm
            addStatistic={(e, key, value) => handleAddStatistic(e, key, value)}
            statistics={character.statistics}
          />
          <Button type="submit" onClick={(e) => createCharacter(e)}>
            Submit
          </Button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="character-form__container">
        <Button onClick={() => setActive(true)}>Add character</Button>
      </div>
    );
  }
};

export default CharacterForm;
