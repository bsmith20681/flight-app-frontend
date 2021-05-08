import React, { useState } from "react";
import moment from "moment";
import angleLeft from "../images/angle-left.svg";
import angleRight from "../images/angle-right.svg";

import Day from "./Day";

const Calendar = () => {
  const [month, setMonth] = useState(moment().month());
  const [year, setYear] = useState(moment().format("YYYY"));
  const [isActive, setIsActive] = useState(null);

  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

  const currentDayOfMonth = moment().date();
  const currentMonth = moment().month();

  const firstWeekDayOfMonth = (monthNumber) => {
    return moment(`${monthNumber + 1}-${year}`, "MM-YYYY")
      .startOf("month")
      .weekday();
  };

  const daysInMonth = (monthNumber) => {
    return moment(`${year}-${monthNumber}`, "YYYY-MM").daysInMonth();
  };

  const prevMonth = () => {
    setMonth(month - 1);
  };

  const nextMonth = () => {
    setMonth(month + 1);
  };

  const active = (e) => {
    setIsActive(e);
  };

  return (
    <div className="calendar">
      {month < moment().month() + 1 ? (
        <img className="calendar-arrows" src={angleLeft} alt="angle left" />
      ) : (
        <img
          onClick={prevMonth}
          className="calendar-arrows"
          src={angleLeft}
          alt="angle left"
        />
      )}

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
        <div>
          <ul className="calendar-days">
            {[...Array(firstWeekDayOfMonth(month)).keys()].map((x) =>
              x < firstWeekDayOfMonth(month) ? <div></div> : null
            )}
            {[...Array(daysInMonth(month + 1)).keys()].map((x, i) =>
              x < currentDayOfMonth - 1 && month === currentMonth ? (
                <li className="calendar-day_unactive">{x + 1}</li>
              ) : (
                <li
                  onClick={(e) => active(`${year}-${month + 1}-${x + 1}`, e)}
                  value={`${year}-${month + 1}-${x + 1}`}
                  className={
                    isActive === `${year}-${month + 1}-${x + 1}`
                      ? "calendar-day active"
                      : "calendar-day"
                  }
                >
                  {x + 1}
                </li>
              )
            )}
          </ul>
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
        <div>
          <ul className="calendar-days">
            {[...Array(firstWeekDayOfMonth(month + 1)).keys()].map((x) =>
              x < firstWeekDayOfMonth(month + 1) ? <div></div> : null
            )}
            {[...Array(daysInMonth(month + 2)).keys()].map((x) => (
              <li
                value={`${year}-${month + 2}-${x + 1}`}
                className="calendar-day"
              >
                {x + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {month >= 10 ? (
        <img className="calendar-arrows" src={angleRight} alt="angle right" />
      ) : (
        <img
          onClick={nextMonth}
          className="calendar-arrows"
          src={angleRight}
          alt="angle right"
        />
      )}
    </div>
  );
};

export default Calendar;
