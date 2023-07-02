import { useState } from "react";
import Button from "../UI/button/Button";
import Card from "../UI/card/Card";
import "./LogCard.css";

const LogCard = ({ log, changeText }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(log.text || "");

  const printDate = () => {
    const created = new Date(log.createdAt);
    if (log.updatedAt) {
      const updated = new Date(log.updatedAt);
      return updated.toLocaleString();
    }
    return created.toLocaleString();
  };

  const printTextOrInput = () => {
    if (!isEdit) {
      return <p className="log-card__text">{text}</p>;
    } else {
      return (
        <textarea
          className="log-card__input"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      );
    }
  };

  const printButtonText = () => (isEdit ? "Update" : "Edit");

  const handleTextChange = () => {
    if (isEdit) {
      changeText(text);
    }
    setIsEdit(!isEdit);
  };

  return (
    <Card className="log-card">
      <div className="log-card__header-container">
        <div className="log-card__info-container">
          <h2 className="log-card__header-text">Last edit</h2>
          <p className="log-card__header-text">{printDate()}</p>
        </div>
        <Button onClick={() => handleTextChange()}>{printButtonText()}</Button>
      </div>
      {printTextOrInput()}
    </Card>
  );
};

export default LogCard;
