import React, { useState } from "react";
import moment from "moment";
import angleLeft from "../images/angle-left.svg";
import angleRight from "../images/angle-right.svg";

const Calendar = () => {
  const [month, setMonth] = useState(moment().month());
  const [year, setYear] = useState(moment().format("YYYY"));
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

  const daysInMonth = (monthNumber) => {
    return moment(`${year}-${monthNumber}`, "YYYY-MM").daysInMonth();
  };

  const prevMonth = () => {
    setMonth(month - 1);
  };

  const nextMonth = () => {
    setMonth(month + 1);
  };
  return (
    <div className="calendar">
      <img
        onClick={prevMonth}
        className="selectDate-arrows"
        src={angleLeft}
        alt="angle left"
      />
      <div className="calendar-single">
        <div className="calendar-header">
          <p>
            {moment().month(month).format("MMMM")} {moment().format("YYYY")}
          </p>
        </div>
        <div className="calendar-weekdays">
          {weekDays.map((weekDay) => {
            return <p>{weekDay}</p>;
          })}
        </div>
        <div className="calendar-days">
          {[...Array(daysInMonth(month + 1)).keys()].map((x) => (
            <p>{x + 1}</p>
          ))}
        </div>
      </div>
      <div className="calendar-single">
        <div className="calendar-header">
          <p>
            {moment()
              .month(month + 1)
              .format("MMMM")}{" "}
            {moment().format("YYYY")}
          </p>
        </div>
        <div className="calendar-weekdays">
          {weekDays.map((weekDay) => {
            return <p>{weekDay}</p>;
          })}
        </div>
        <div className="calendar-days">
          {[...Array(daysInMonth(month + 2)).keys()].map((x) => (
            <p>{x + 1}</p>
          ))}
        </div>
      </div>
      <img
        onClick={nextMonth}
        className="selectDate-arrows"
        src={angleRight}
        alt="angle right"
      />
    </div>
  );
};

export default Calendar;
