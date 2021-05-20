import React, { useState } from "react";
import moment from "moment";

const Day = (props) => {
  const currentDayOfMonth = moment().date();
  const currentMonth = moment().month();
  const year = moment().format("YYYY");

  const createMonthString = (num) =>
    moment()
      .month(currentMonth + num)
      .format("MMMM");
  return (
    <li>
      {props.flightDate}
      {[
        ...Array(
          moment(`${props.createMonthString}`, "MMMM").daysInMonth()
        ).keys(),
      ].map((day, i) =>
        day < currentDayOfMonth - 1 &&
        createMonthString(0) === props.createMonthString ? (
          <li key={i} className="calendar-day_unactive">
            {day + 1}
          </li>
        ) : (
          <li
            key={i}
            onClick={props.active}
            value={`${year}-${moment()
              .month(props.createMonthString)
              .format("MM")}-${day + 1}`}
          >
            {day + 1}
          </li>
        )
      )}
    </li>
  );
};

export default Day;
