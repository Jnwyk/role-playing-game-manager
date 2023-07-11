import "./ColourCard.css";
import Card from "../../UI/card/Card.jsx";
import TextInput from "../../UI/inputs/text-input/TextInput";

const ColourCard = ({ colour, changeColour }) => {
  const rgbColour = `rgb(${colour.red}, ${colour.green}, ${colour.blue})`;
  return (
    <Card>
      <div
        className="colour-card__preview"
        style={{
          backgroundColor: rgbColour,
        }}
      />
      <div className="colour-card__colour-input-container">
        <TextInput
          className="colour-card__input"
          id="red"
          label="Red"
          placeholder={colour.red}
          value={colour.red}
          changeInput={(value) => changeColour("red", value)}
        />
        <TextInput
          className="colour-card__input"
          id="green"
          label="Green"
          placeholder={colour.green}
          value={colour.green}
          changeInput={(value) => changeColour("green", value)}
        />
        <TextInput
          className="colour-card__input"
          id="blue"
          label="Blue"
          placeholder={colour.blue}
          value={colour.blue}
          changeInput={(value) => changeColour("blue", value)}
        />
      </div>
    </Card>
  );
};

export default ColourCard;
