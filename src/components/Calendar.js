import React, { useState } from "react";
import moment from "moment";
import angleLeft from "../images/angle-left.svg";
import angleRight from "../images/angle-right.svg";

const Calendar = () => {
  const [month, setMonth] = useState(moment().month());
  const [year, setYear] = useState(moment().format("YYYY"));
  const [isActive, setIsActive] = useState(null);
  const [flightDate, setFlightDate] = useState({
    count: 0,
    departureDate: null,
    arrivalDate: null,
  });

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
    if (flightDate.count % 2 === 0) {
      setFlightDate({
        ...flightDate,
        departureDate: e,
        count: flightDate.count + 1,
      });
    } else {
      setFlightDate({
        ...flightDate,
        arrivalDate: e,
        count: flightDate.count + 1,
      });
    }
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

      {[...Array(12).keys()].map((x) => (
        <div className="calendar-single">
          <div className="calendar-header">
            <div>
              {moment()
                .month(currentMonth + x)
                .format("MMMM")}
            </div>
          </div>
          <div className="calendar-weekdays">
            <p>S</p>
            <p>M</p>
            <p>T</p>
            <p>W</p>
            <p>T</p>
            <p>F</p>
            <p>S</p>
          </div>
          <div>
            <ul className="calendar-days">
              {[
                ...Array(
                  moment(
                    `${moment()
                      .month(currentMonth + x)
                      .format("MMMM")}`,
                    "MMMM"
                  ).daysInMonth()
                ).keys(),
              ].map((day) => (
                <li
                  onClick={(e) => active(`${year}-${month + 1}-${x + 1}`, e)}
                  value={`${year}-${month + 1}-${x + 1}`}
                  className={
                    isActive === `${year}-${month + 1}-${x + 1}`
                      ? "calendar-day active"
                      : "calendar-day"
                  }
                >
                  {day + 1}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

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
