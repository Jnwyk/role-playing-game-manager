import "./AddGameCard.css";
import Card from "../UI/card/Card";
import Button from "../UI/button/Button";
import AddGameForm from "./AddGameForm";
import { useState } from "react";

const AddGameCard = ({ addGame }) => {
  const [isAddGameActive, setIsAddGameActive] = useState(false);

  const handleIsActive = () => {
    setIsAddGameActive(!isAddGameActive);
  };

  const handleAddGame = (game) => {
    addGame(game);
    handleIsActive(!isAddGameActive);
  };

  if (!isAddGameActive) {
    return (
      <Card className="add-game-card">
        <Button onClick={() => handleIsActive()}>Add game</Button>
      </Card>
    );
  } else {
    return <AddGameForm addGame={(game) => handleAddGame(game)} />;
  }
};

export default AddGameCard;
