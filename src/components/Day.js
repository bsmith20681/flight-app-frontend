import React, { useState } from "react";

const Day = (props) => {
  const [isActive, setIsActive] = useState(false);
  const active = () => {
    setIsActive(!isActive);
  };
  return (
    <p
      onClick={active}
      className={isActive ? "active calendar-day" : "calendar-day"}
    >
      {props.day}
    </p>
  );
};

export default Day;
