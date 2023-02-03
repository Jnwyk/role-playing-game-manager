import "./TextInput.css";

const TextInput = ({ placeholder, id }) => {
  return (
    <input
      className="text-input"
      type="text"
      id={id}
      name={id}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
};

export default TextInput;
