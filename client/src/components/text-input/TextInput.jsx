import "./TextInput.css";

const TextInput = ({ placeholder, id, onChange }) => {
  return (
    <input
      className={`text-input`}
      type="text"
      id={id}
      name={id}
      placeholder={placeholder}
      autoComplete="off"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextInput;
