import React, { useEffect, useState, useRef } from "react";
import Calendar from "../components/Calendar";
import calendarIcon from "../images/calendar-alt.svg";

const SelectDate = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

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

  return (
    <>
      <div ref={detectOutsideClick} className="selectDate">
        <div onClick={toggleCalendar}>
          <img
            className="selectDate-calendar"
            src={calendarIcon}
            alt="calendar"
          />
        </div>
        <div
          className={`selectDate-popup ${
            isCalendarOpen ? "visible" : "hidden"
          }`}
        >
          <div className="selectDate-month_container">
            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectDate;
