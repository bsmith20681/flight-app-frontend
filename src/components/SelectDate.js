import React, { useEffect, useState, useRef } from "react";
import calendar from "../images/calendar-alt.svg";
import angleLeft from "../images/angle-left.svg";
import angleRight from "../images/angle-right.svg";

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
    <div ref={detectOutsideClick} className="selectDate">
      <div onClick={toggleCalendar}>
        <img className="selectDate-calendar" src={calendar} alt="calendar" />
      </div>
      <div
        className={`selectDate-popup ${isCalendarOpen ? "visible" : "hidden"}`}
      >
        <p>April</p>
      </div>
    </div>
  );
};

export default SelectDate;
