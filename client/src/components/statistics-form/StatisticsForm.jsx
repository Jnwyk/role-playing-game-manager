import { useEffect, useState } from "react";
import Button from "../button/Button";
import "./StatisticsForm.css";
import TextInput from "../text-input/TextInput";

const StatisticsForm = ({ addStatistic, statistics }) => {
  const [name, setName] = useState();
  const [value, setValue] = useState();

  return (
    <div className="statistics-form__container">
      {Object.keys(statistics).map((stat) => {
        if (stat != "empty")
          return (
            <div className="statistics-form__statistic" key={stat}>
              <h4>{stat}</h4>: <p>{statistics[stat]}</p>
            </div>
          );
        return (
          <div className="statistics-form__statistic" key={stat}>
            <TextInput
              id="stat_name"
              placeholder="type stat"
              label="Name"
              changeInput={(input) => setName(input)}
            />
            <TextInput
              id="stat_value"
              placeholder="type value"
              label="Value"
              changeInput={(input) => setValue(input)}
            />
            <Button onClick={(e) => addStatistic(e, name, value)}>Add</Button>
          </div>
        );
      })}
      <Button onClick={(e) => addStatistic(e, "empty", "")}>
        Add new stat
      </Button>
    </div>
  );
};

export default StatisticsForm;
