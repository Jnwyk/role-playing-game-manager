import { useEffect, useState } from "react";
import Button from "../button/Button";
import "./StatisticsForm.css";
import TextInput from "../text-input/TextInput";

const StatisticsForm = ({ addStatistic, statistics }) => {
  const [name, setName] = useState();
  const [value, setValue] = useState();

  const isButtonDisabled = () => {
    if (name !== "" && value !== "") return true;
    return false;
  };

  const handleAddStatistic = (e) => {
    e.preventDefault();
    console.log("Name: ", typeof name, name, " Value: ", typeof value, value);
    addStatistic(name, value);
    setName("");
    setValue("");
  };

  return (
    <div className="statistics-form">
      {Object.keys(statistics).map((stat) => {
        return (
          <div className="statistics-form__statistic" key={stat}>
            <div className="statistics-form__info_constainer">
              <p className="statistics-form__label">Name</p>
              <p className="statistics-form__value">{stat}</p>
            </div>
            <div className="statistics-form__info_constainer">
              <p className="statistics-form__label">Value</p>
              <p className="statistics-form__value">{statistics[stat]}</p>
            </div>
          </div>
        );
      })}
      <div className="statistics-form__statistic">
        <TextInput
          className="statistics-form__input"
          id="stat_name"
          placeholder="Statistics..."
          label="Name"
          changeInput={(input) => setName(input)}
          value={name}
        />
        <TextInput
          className="statistics-form__input"
          id="stat_value"
          placeholder="Value..."
          label="Value"
          changeInput={(input) => setValue(input)}
          value={value}
        />
        <Button
          disabled={!isButtonDisabled()}
          className="statistics-form__button"
          onClick={(e) => handleAddStatistic(e)}
        >
          Add
        </Button>
      </div>
      <Button
        className="statistics-form__button"
        onClick={(e) => handleAddStatistic(e)}
      >
        Add new stat
      </Button>
    </div>
  );
};

export default StatisticsForm;
