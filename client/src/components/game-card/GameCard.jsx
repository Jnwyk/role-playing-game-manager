import LogoAndText from "../logo-and-text/LogoAndText";
import "./GameCard.css";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
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
          <LogoAndText iconName="BiWorld" text={game.genre} />
          <LogoAndText
            iconName="FaCrown"
            text={game.master ? game.master.username : "No master"}
          />
          <LogoAndText iconName="BsPeopleFill" text={game.players.length} />
        </div>
        <p className="game-card__description">
          {game.description ? game.description : "No description provided"}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
