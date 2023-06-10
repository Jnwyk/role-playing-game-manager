import "./TextInput.css";

const TextInput = ({ label, placeholder, id, changeInput }) => {
  return (
    <label className="text-input">
      {label}
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        name={id}
        onChange={(e) => changeInput(e.target.value)}
      />
    </label>
  );
};

export default TextInput;
