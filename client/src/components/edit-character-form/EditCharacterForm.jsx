import TextInput from "../UI/inputs/text-input/TextInput";
import Button from "../UI/button/Button";
import TextareaInput from "../UI/inputs/textarea-input/TextareaInput";
import DropdownInput from "../UI/inputs/dropdown-input/DropdownInput";
import Card from "../UI/card/Card";
import { useState } from "react";
import StatisticsForm from "../forms/statistics-form/StatisticsForm";

const EditCharacterForm = ({ character, players, editCharacter }) => {
  const [characterData, setCharacterData] = useState({ ...character });
  const [newStatName, setNewStatName] = useState("");
  const [newStatValue, setNewStatValue] = useState("");

  const handleEditCharacter = (e) => {
    e.preventDefault();
    editCharacter(characterData);
  };

  const constructPlayersUsernameArray = () =>
    players.map((player) => player.username);

  const handleCharacterInputChange = (key, value, isStat) => {
    if (isStat) {
      setCharacterData({
        ...characterData,
        statistics: { ...characterData.statistics, [key]: value },
      });
      setNewStatName("");
      setNewStatValue("");
    } else setCharacterData({ ...characterData, [key]: value });
  };

  const isCharacterFormOk = () => {
    if (
      characterData.name !== "" &&
      characterData.picture !== "" &&
      characterData.player !== "" &&
      characterData.profession !== ""
    ) {
      return true;
    }
    return false;
  };

  return (
    <Card classname="character-form">
      <TextInput
        label="Character Name"
        placeholder="Name..."
        id="name"
        changeInput={(input) => handleCharacterInputChange("name", input)}
        value={characterData.name}
      />
      <TextInput
        label="Character Picture"
        placeholder="Picture URL..."
        id="picture"
        changeInput={(input) => handleCharacterInputChange("picture", input)}
        value={characterData.picture}
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
        changeInput={(input) => handleCharacterInputChange("profession", input)}
        value={characterData.profession}
      />
      <TextareaInput
        label="Character description"
        placeholder="Description..."
        id="description"
        changeInput={(input) =>
          handleCharacterInputChange("description", input)
        }
      />
      {characterData.statistics &&
        Object.keys(characterData.statistics).map((stat) => {
          return (
            <div key={stat} className="statistics-form__statistic">
              <TextInput
                className="statistics-form__input"
                id="stat_value"
                placeholder="Value..."
                label={stat}
                changeInput={(input) =>
                  handleCharacterInputChange(stat, input, true)
                }
                value={characterData.statistics[stat]}
              />
            </div>
          );
        })}
      {
        <div className="statistics-form__statistic">
          <TextInput
            className="statistics-form__input"
            id="stat_name"
            placeholder="Statistics..."
            label="Name"
            changeInput={(input) => setNewStatName(input)}
            value={newStatName}
          />
          <TextInput
            className="statistics-form__input"
            id="stat_value"
            placeholder="Value..."
            label="Value"
            changeInput={(input) => setNewStatValue(input)}
            value={newStatValue}
          />
          <Button
            className="statistics-form__button"
            onClick={(e) =>
              handleCharacterInputChange(newStatName, newStatValue, true)
            }
          >
            Add
          </Button>
        </div>
      }
      <Button
        type="submit"
        disabled={isCharacterFormOk() ? false : true}
        className="character-form__button"
        onClick={(e) => handleEditCharacter(e)}
      >
        Submit
      </Button>
    </Card>
  );
};

export default EditCharacterForm;
