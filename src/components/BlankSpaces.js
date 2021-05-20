import React from "react";

const BlankSpaces = (props) => {
  return (
    <li>
      {[...Array(props.numberOfSpaces).keys()].map((x, i) => (
        <div key={i}></div>
      ))}
    </li>
  );
};

export default BlankSpaces;
