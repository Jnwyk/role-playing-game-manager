import { useParams } from "react-router-dom";
import Card from "../components/UI/card/Card";
import Spinner from "../components/UI/spinner/Spinner";
import useFetch from "../hooks/useFetch";

const Character = ({ player }) => {
  const { characterId } = useParams();

  const [character, loading, error] = useFetch(`/api/character/${characterId}`);

  if (!character) {
    return <Spinner />;
  }
  return (
    <Card className>
      <h2 className="character-card__text">{`${character.character.profession} ${character.character.name}`}</h2>
      <img
        className="character-card__image"
        src={character.character.picture}
        alt={character.character.name}
      />
      <p className="character-card__text">{character.character.description}</p>
      <div className="character-card__statistics-container">
        {Object.keys(character.character.statistics).map((stat) => {
          return (
            <div key={stat} className="character-card__statistics">
              <div className="character-card__statistics-text name">{stat}</div>
              <div className="character-card__statistics-text">
                {character.character.statistics[stat]}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default Character;
