import "./DropdownInput.css";

const DropdownInput = ({
  players = [],
  label,
  placeholder,
  id,
  changeInput,
}) => {
  return (
    <label className="text-input">
      {label}
      <select
        placeholder={placeholder}
        id={id}
        name={id}
        onChange={(e) => changeInput(e.target.value)}
      >
        <option defaultValue hidden>
          Pick a player
        </option>
        {players.map((player) => (
          <option key={player.username} value={player.username}>
            {player.username}
          </option>
        ))}
      </select>
    </label>
  );
};

export default DropdownInput;
