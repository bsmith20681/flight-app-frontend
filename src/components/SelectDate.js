import React, { useEffect, useState, useRef } from "react";
import calendar from "../images/calendar-alt.svg";
import angleLeft from "../images/angle-left.svg";
import angleRight from "../images/angle-right.svg";

const SelectDate = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [month, setMonth] = useState(0);
  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const detectOutsideClick = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!detectOutsideClick.current.contains(event.target)) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const currentMonth = new Date().getMonth() - 1;

  const createMonths = Array.from({ length: 12 }, (item, i) => {
    return new Date(0, currentMonth - i).toLocaleString("en-US", {
      month: "long",
    });
  }).reverse();

  const nextMonth = () => {
    setMonth(month + 1);
  };

  const prevMonth = () => {
    setMonth(month - 1);
  };

  return (
    <>
      <div ref={detectOutsideClick} className="selectDate">
        <div onClick={toggleCalendar}>
          <img className="selectDate-calendar" src={calendar} alt="calendar" />
        </div>
        <div
          className={`selectDate-popup ${
            isCalendarOpen ? "visible" : "hidden"
          }`}
        >
          <div className="selectDate-month_container">
            {month <= 0 ? (
              <img
                className="selectDate-arrows_unactive"
                src={angleLeft}
                alt="angle left"
              />
            ) : (
              <img
                onClick={prevMonth}
                className="selectDate-arrows"
                src={angleLeft}
                alt="angle left"
              />
            )}

            <div className="selectDate-month">
              <p>{createMonths[month]}</p>
              <p>{createMonths[month + 1]}</p>
            </div>
            {month >= 11 ? (
              <img
                className="selectDate-arrows_unactive"
                src={angleRight}
                alt="angle right"
              />
            ) : (
              <img
                onClick={nextMonth}
                className="selectDate-arrows"
                src={angleRight}
                alt="angle right"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectDate;
