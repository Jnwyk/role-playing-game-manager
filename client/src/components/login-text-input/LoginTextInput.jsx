import "./LoginTextInput.css";

const LoginTextInput = ({ placeholder, id, onChange }) => {
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

export default LoginTextInput;
