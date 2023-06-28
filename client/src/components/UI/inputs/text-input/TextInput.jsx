import "./TextInput.css";

const TextInput = ({
  className,
  label,
  placeholder,
  id,
  changeInput,
  value,
}) => {
  return (
    <label className="text-input">
      {label}
      <input
        className={`text-input__input ${className}`}
        type="text"
        placeholder={placeholder}
        id={id}
        name={id}
        onChange={(e) => changeInput(e.target.value)}
        value={value}
      />
    </label>
  );
};

export default TextInput;
