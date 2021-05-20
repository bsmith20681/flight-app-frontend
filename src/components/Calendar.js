import React, { useState } from "react";
import BlankSpaces from "../components/BlankSpaces";
import Day from "../components/Day";
import moment from "moment";
import angleLeft from "../images/angle-left.svg";
import angleRight from "../images/angle-right.svg";
import nextId from "react-id-generator";

const Calendar = (props) => {
  const { active, flightDate } = props;
  const [month, setMonth] = useState(moment().month());
  const [year, setYear] = useState(moment().format("YYYY"));
  const [isActive, setIsActive] = useState(null);

  const currentDayOfMonth = moment().date();
  const currentMonth = moment().month();
  const createMonthString = (num) =>
    moment()
      .month(currentMonth + num)
      .format("MMMM");

  const convertDateToSeconds = (date) => {
    return moment(date, "YYYY/MM/DD").valueOf();
  };

  const firstWeekDayOfMonth = (monthNumber) => {
    return moment(`May`, "MMMM").startOf("month").weekday();
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
      {[...Array(12).keys()].map((x, i) => (
        <div key={nextId()} className="calendar-single">
          <div className="calendar-header">
            <div>{createMonthString(x)}</div>
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
              <BlankSpaces
                numberOfSpaces={moment(`${createMonthString(x)}`, "MMMM")
                  .startOf("month")
                  .weekday()}
              />
              {console.log(flightDate)}

              {flightDate
                ? [
                    ...Array(
                      moment(`${createMonthString(x)}`, "MMMM").daysInMonth()
                    ).keys(),
                  ].map((day, i) =>
                    day < currentDayOfMonth - 1 &&
                    createMonthString(0) === createMonthString(x) ? (
                      <li key={nextId()} className="calendar-day_unactive">
                        {day + 1}
                      </li>
                    ) : (
                      <li
                        key={i}
                        onClick={props.active}
                        value={`${year}-${moment()
                          .month(createMonthString(x))
                          .format("MM")}-${day + 1}`}
                        className={
                          convertDateToSeconds(flightDate.departureDate) <
                            convertDateToSeconds(
                              `${year}-${moment()
                                .month(createMonthString(x))
                                .format("MM")}-${day + 1}`
                            ) &&
                          convertDateToSeconds(
                            `${year}-${moment()
                              .month(createMonthString(x))
                              .format("MM")}-${day + 1}`
                          ) < convertDateToSeconds(flightDate.arrivalDate)
                            ? "calendar-day inbetweenDate"
                            : flightDate.departureDate ===
                              `${year}-${moment()
                                .month(createMonthString(x))
                                .format("MM")}-${day + 1}`
                            ? `calendar-day ${flightDate.departureDateClassName}`
                            : flightDate.arrivalDate ===
                              `${year}-${moment()
                                .month(createMonthString(x))
                                .format("MM")}-${day + 1}`
                            ? `calendar-day ${flightDate.arrivalDateClassName}`
                            : "calendar-day"
                        }
                      >
                        {day + 1}
                      </li>
                    )
                  )
                : null}
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
