import "./SortInput.css";

const SortInput = ({ onChange, searchOptions }) => {
  const options = () =>
    searchOptions.map((option) => (
      <option key={option} className="sort-input__option">
        {option}
      </option>
    ));

  return (
    <div className="sort-input">
      <label htmlFor="sort">Sort by: </label>
      <select
        name="sort"
        id="sort"
        className="sort-input__select"
        onChange={(e) => onChange(e.target.value)}
      >
        {options()}
      </select>
    </div>
  );
};

export default SortInput;
