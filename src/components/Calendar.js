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
    departureDateClassName: null,
    arrivalDate: null,
    arrivalDateClassName: null,
  });

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

  const active = (e) => {
    if (
      convertDateToSeconds(e) > convertDateToSeconds(flightDate.arrivalDate)
    ) {
      setFlightDate({
        ...flightDate,
        departureDate: e,
        arrivalDate: null,
        departureDateClassName: "departureDate-active",
        count: flightDate.count - 1,
      });
    } else if (
      flightDate.count % 2 == 0 ||
      convertDateToSeconds(e) < convertDateToSeconds(flightDate.departureDate)
    ) {
      setFlightDate({
        ...flightDate,
        departureDate: e,
        departureDateClassName: "departureDate-active",
        count: flightDate.count + 1,
      });
    } else {
      setFlightDate({
        ...flightDate,
        arrivalDate: e,
        arrivalDateClassName: "arrivalDate-active",
        count: flightDate.count + 1,
      });
    }
  };

  return (
    <div className="calendar">
      {console.log(flightDate)}
      {console.log(
        convertDateToSeconds(flightDate.departureDate) >
          convertDateToSeconds(flightDate.arrivalDate)
      )}

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
              {[
                ...Array(
                  moment(`${createMonthString(x)}`, "MMMM")
                    .startOf("month")
                    .weekday()
                ).keys(),
              ].map(() => (
                <div></div>
              ))}

              {[
                ...Array(
                  moment(`${createMonthString(x)}`, "MMMM").daysInMonth()
                ).keys(),
              ].map((day) =>
                day < currentDayOfMonth - 1 &&
                createMonthString(0) === createMonthString(x) ? (
                  <li className="calendar-day_unactive">{day + 1}</li>
                ) : (
                  <li
                    onClick={(e) =>
                      active(`${year}-${currentMonth + x + 1}-${day + 1}`, e)
                    }
                    value={`${year}-${currentMonth + x + 1}-${day + 1}`}
                    className={
                      convertDateToSeconds(flightDate.departureDate) <
                        convertDateToSeconds(
                          `${year}-${currentMonth + x + 1}-${day + 1}`
                        ) &&
                      convertDateToSeconds(
                        `${year}-${currentMonth + x + 1}-${day + 1}`
                      ) < convertDateToSeconds(flightDate.arrivalDate)
                        ? "calendar-day inbetweenDate"
                        : flightDate.departureDate ===
                          `${year}-${currentMonth + x + 1}-${day + 1}`
                        ? `calendar-day ${flightDate.departureDateClassName}`
                        : flightDate.arrivalDate ===
                          `${year}-${currentMonth + x + 1}-${day + 1}`
                        ? `calendar-day ${flightDate.arrivalDateClassName}`
                        : "calendar-day"
                    }
                  >
                    {day + 1}
                  </li>
                )
              )}
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

/*
  const [month, setMonth] = useState(moment().month());
  const [year, setYear] = useState(moment().format("YYYY"));
  const [isActive, setIsActive] = useState(null);
  const [flightDate, setFlightDate] = useState({
    count: 0,
    departureDate: null,
    arrivalDate: null,
  });

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
      {console.log(flightDate)}
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

              {[...Array(daysInMonth(currentMonth + x)).keys()].map((day) => (
                <p>{day}</p>
              ))}
   
*/
