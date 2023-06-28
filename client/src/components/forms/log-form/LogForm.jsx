import Card from "../../UI/card/Card";
import Button from "../../UI/button/Button";
import "./LogForm.css";
import { useState } from "react";

const LogForm = ({ addLog }) => {
  const [text, setText] = useState("");

  const handleAddLog = () => {
    addLog(text);
    setText("");
  };

  return (
    <Card>
      <div
        className="log-form__header-container"
        onClick={() => handleAddLog()}
      >
        <Button>Add log</Button>
      </div>
      <textarea
        className="log-form__text"
        placeholder="Type log text..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </Card>
  );
};

export default LogForm;
