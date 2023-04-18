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
          <NavItem name={game.master} logo="master" />
          <NavItem name={game.players.length} logo="players" />
        </div>
        <p className="game-card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default GameCard;
