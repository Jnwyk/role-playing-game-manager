import NavItem from "../nav-item/NavItem";
import "./GameCard.css";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      {console.log(game)}
      <div className="game-card__image-wrap">
        <img
          src={game.picture}
          alt="Game picture"
          className="game-card__image"
        />
      </div>
      <div className="game-card__info">
        <h2 className="game-card__title">{game.name}</h2>
        <div className="game-card__game-info">
          <NavItem name={game.genre} logo="genre" />
          <NavItem
            name={game.master ? game.master.username : "temp"}
            logo="master"
          />
          <NavItem name={game.players.length} logo="players" />
        </div>
        <p className="game-card__description">{game.description}</p>
      </div>
    </div>
  );
};

export default GameCard;
