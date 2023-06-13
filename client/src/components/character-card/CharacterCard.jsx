import "./CharacterCard.css";

const CharacterCard = ({
  picture,
  name,
  player,
  description,
  profession = "Wojownik",
  statistics = {},
}) => {
  return (
    <div className="character-card">
      {console.log(player)}
      <h2 className="character-card__text">{`${profession} ${name}`}</h2>
      <h3 className="character-card__text">{player.username}</h3>
      <img className="character-card__image" src={picture} alt={name} />
      <p className="character-card__text">{description}</p>
      <div className="character-card__statistics-container">
        {Object.keys(statistics).map((stat) => {
          return (
            <div className="character-card__statistics">
              <div className="character-card__statistics-text name">{stat}</div>
              <div className="character-card__statistics-text">
                {statistics[stat]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterCard;
