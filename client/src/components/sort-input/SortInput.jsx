import "./SortInput.css";

const SortInput = ({ onChange, value }) => {
  const searchOptions = [
    "by creation date",
    "by name",
    "by genre",
    "by num of players",
    "by sessions played",
  ];

  const options = () =>
    searchOptions.map((option) => (
      <option key={option} className="sort-input__option" value={option}>
        {option}
      </option>
    ));

  return (
    <div className="sort-input">
      <label htmlFor="sort">Sort: </label>
      <select
        name="sort"
        id="sort"
        className="sort-input__select"
        onChange={onChange}
        value={value}
      >
        {options()}
      </select>
    </div>
  );
};

export default SortInput;
