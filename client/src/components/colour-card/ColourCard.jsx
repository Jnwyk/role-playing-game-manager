import "./ColourCard.css";
import Card from "../UI/card/Card.jsx";
import TextInput from "../UI/inputs/text-input/TextInput";

const ColourCard = ({ colour }) => {
  return (
    <Card>
      <div className="colour-card__preview" />
      <div className="colour-card__colour-input-container">
        <TextInput
          className="colour-card__input"
          id="red"
          label="Red"
          placeholder={colour.red}
          value={colour.red}
        />
        <TextInput
          className="colour-card__input"
          id="green"
          label="Green"
          placeholder={colour.green}
          value={colour.green}
        />
        <TextInput
          className="colour-card__input"
          id="blue"
          label="Blue"
          placeholder={colour.blue}
          value={colour.blue}
        />
      </div>
    </Card>
  );
};

export default ColourCard;
