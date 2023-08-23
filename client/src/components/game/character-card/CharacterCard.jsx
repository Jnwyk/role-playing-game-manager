import "./CharacterCard.css";
import Card from "../../UI/card/Card";
import Button from "../../UI/button/Button";
import ExternalAccessSection from "../../external-access-section/ExternalAccessSection";

const CharacterCard = ({
  editCharacter,
  id,
  picture,
  name,
  player,
  description,
  profession,
  statistics = {},
}) => {
  return (
    <Card className="character-card">
      <Button className="character-card__edit-button" onClick={editCharacter}>
        Edit
      </Button>
      <h2 className="character-card__text">{`${profession} ${name}`}</h2>
      <h3 className="character-card__text">{player.username}</h3>
      <img className="character-card__image" src={picture} alt={name} />
      <p className="character-card__text">{description}</p>
      <div className="character-card__statistics-container">
        {Object.keys(statistics).map((stat) => {
          return (
            <div key={stat} className="character-card__statistics">
              <div className="character-card__statistics-text name">{stat}</div>
              <div className="character-card__statistics-text">
                {statistics[stat]}
              </div>
            </div>
          );
        })}
      </div>
      <ExternalAccessSection id={id} />
    </Card>
  );
};

export default CharacterCard;
