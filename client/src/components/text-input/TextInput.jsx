import "./TextInput.css";

const TextInput = ({ placeholder, id, isRight }) => {
  return (
    <input
      className={`text-input${isRight === "wrong" ? " wrong" : ""}`}
      type="text"
      id={id}
      name={id}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
};

export default TextInput;
