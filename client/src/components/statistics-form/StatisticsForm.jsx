import { useEffect, useState } from "react";
import Button from "../button/Button";
import "./StatisticsForm.css";
import TextInput from "../text-input/TextInput";

const StatisticsForm = ({ addStatistic, statistics }) => {
  const [name, setName] = useState();
  const [value, setValue] = useState();

  return (
    <div className="statistics-form">
      {Object.keys(statistics).map((stat) => {
        if (stat != "empty")
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
        return (
          <div className="statistics-form__statistic" key={stat}>
            <TextInput
              className="statistics-form__input"
              id="stat_name"
              placeholder="Statistics..."
              label="Name"
              changeInput={(input) => setName(input)}
            />
            <TextInput
              className="statistics-form__input"
              id="stat_value"
              placeholder="Value..."
              label="Value"
              changeInput={(input) => setValue(input)}
            />
            <Button
              className="statistics-form__button"
              onClick={(e) => addStatistic(e, name, value)}
            >
              Add
            </Button>
          </div>
        );
      })}
      <Button
        className="statistics-form__button"
        onClick={(e) => addStatistic(e, "empty", "")}
      >
        Add new stat
      </Button>
    </div>
  );
};

export default StatisticsForm;
