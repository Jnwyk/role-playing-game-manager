import { useState } from "react";
import Card from "../UI/card/Card";
import TextInput from "../UI/inputs/text-input/TextInput";
import "./AddGameForm.css";
import TextareaInput from "../UI/inputs/textarea-input/TextareaInput";
import Button from "../UI/button/Button";

const AddGameForm = ({ addGame }) => {
  const [game, setGame] = useState({
    name: "",
    genre: "",
    picture: "",
    description: "",
    mechanics_description: "",
    sessions: "",
    dice_type: "",
    players: [],
  });

  const handleInputChange = (name, input) => {
    if (name === "players") {
      input = input.split(" ");
    }
    setGame({ ...game, [name]: input });
  };

  const handleAddGame = (e) => {
    e.preventDefault();
    addGame(game);
    setGame({
      name: "",
      genre: "",
      picture: "",
      description: "",
      mechanics_description: "",
      sessions: "",
      dice_type: "",
      players: [],
    });
  };

  const isButtonDisabled = () => {
    const { players, sessions, dice_type, ...data } = game;
    console.log(sessions);
    if (players.length < 2) return true;
    if (isNaN(sessions) || sessions === "") return true;
    if (isNaN(dice_type) || dice_type === "") return true;
    return Object.values(data).some((element) => element === "");
  };

  return (
    <Card className="add-game-form">
      <TextInput
        label="Game name"
        placeholder="Game name..."
        id="name"
        changeInput={(input) => handleInputChange("name", input)}
        value={game.name}
      />
      <TextInput
        label="Genre"
        placeholder="Genre..."
        id="genre"
        changeInput={(input) => handleInputChange("genre", input)}
        value={game.genre}
      />
      <TextInput
        label="Picture"
        placeholder="Picture..."
        id="picture"
        changeInput={(input) => handleInputChange("picture", input)}
        value={game.picture}
      />
      <TextInput
        label="Dice type"
        placeholder="Dice..."
        id="dice_type"
        changeInput={(input) => handleInputChange("dice_type", input)}
        value={game.dice_type}
      />
      <TextInput
        label="Players"
        placeholder="Player1 Player2 Player3..."
        id="sessions"
        changeInput={(input) => handleInputChange("players", input)}
        value={game.players.toString().replaceAll(",", " ")}
      />
      <TextInput
        label="Number of sessions"
        placeholder="Sessions..."
        id="sessions"
        changeInput={(input) => handleInputChange("sessions", input)}
        value={game.sessions}
      />
      <TextareaInput
        label="Game description"
        placeholder="Description..."
        id="description"
        changeInput={(input) => handleInputChange("description", input)}
      />
      <TextareaInput
        label="Mechanics description"
        placeholder="Description..."
        id="mechanics_description"
        changeInput={(input) =>
          handleInputChange("mechanics_description", input)
        }
      />
      <Button
        className="add-game-form__button"
        disabled={isButtonDisabled()}
        onClick={(e) => handleAddGame(e)}
      >
        Submit
      </Button>
    </Card>
  );
};

export default AddGameForm;
