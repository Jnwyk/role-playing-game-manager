import "./DropdownInput.css";

const DropdownInput = ({
  players = [],
  label,
  placeholder,
  id,
  changeInput,
}) => {
  return (
    <label className="dropdown-input">
      {label}
      <select
        className="dropdown-input__input"
        placeholder={placeholder}
        id={id}
        name={id}
        onChange={(e) => changeInput(e.target.value)}
      >
        <option defaultValue hidden>
          Pick a player
        </option>
        {players.map((player) => (
          <option key={player} value={player}>
            {player}
          </option>
        ))}
      </select>
    </label>
  );
};

export default DropdownInput;
