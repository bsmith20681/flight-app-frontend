import React, { useState } from "react";
import calendar from "../images/calendar-alt.svg";

const SelectDate = () => {
  const [openPopup, setopenPopup] = useState(false);
  const openCalendar = () => {
    setopenPopup(!openPopup);
  };

  return (
    <div className="selectDate" onClick={openCalendar}>
      <img className="selectDate-calendar" src={calendar} alt="calendar" />
      <div className={`selectDate-popup ${openPopup ? "visible" : "hidden"}`}>
        <p>April</p>
      </div>
    </div>
  );
};

export default SelectDate;
