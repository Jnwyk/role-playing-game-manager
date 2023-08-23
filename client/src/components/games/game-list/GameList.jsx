import GameListCard from "../game-card/GameListCard";
import "./GameList.css";

const GameList = ({ games = [] }) => {
  return (
    <div className="game-list">
      {games.map((game) => (
        <GameListCard key={game._id} game={game} />
      ))}
    </div>
  );
};

export default GameList;
