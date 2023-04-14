import NavItem from "../nav-item/NavItem";
import "./GameCard.css";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img
        src="https://www.cdprojekt.com/en/wp-content/uploads-en/2022/03/16-9-en-1024x576.png"
        alt="Game picture"
        className="game-card__picture"
      />
      <div className="game-card__info">
        <h2 className="game-card__title">Title of the game</h2>
        <div>
          <NavItem name="The Witcher" logo="genre"/>
          <NavItem name="Jnwyk" logo="master"/>
          <NavItem name="4" logo="players"/>
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
