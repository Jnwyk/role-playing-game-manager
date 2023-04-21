import GameCard from "../game-card/GameCard";
import "./GameList.css";

const GameList = ({ games, animation }) => {
  return (
    <div className={`game-list ${animation}`}>
      {games.map((game) => (
        <GameCard key={game._id} game={game} />
      ))}
    </div>
  );
};

export default GameList;
