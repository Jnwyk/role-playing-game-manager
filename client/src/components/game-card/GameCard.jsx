import "./GameCard.css";
import Card from "../UI/card/Card";

const GameCard = ({ game }) => {
  return (
    <Card className="game-card__container">
      <h2>{game.name}</h2>
      <h4>{game.genre}</h4>
      <img src={game.picture} alt={game.name} />
      <div className="game-card__information-container">
        <div className="game-card__description-container">
          <h4>Description</h4>
          <p>{game.description}</p>
        </div>
        <div className="game-card__description-container">
          <h4>Mechanics</h4>
          <p>{game.mechanics_description}</p>
        </div>
        <div className="game-card__information-row">
          <div className="game-card__description-container">
            <h4>Dice type</h4>
            <p>{game.dice_type}</p>
          </div>
          <div className="game-card__description-container">
            <h4>Sessions played</h4>
            <p>{game.sessions_played}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GameCard;
