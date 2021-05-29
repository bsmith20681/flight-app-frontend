import React from "react";
import Spinner from "../images/spinner.gif";

const Loading = () => {
  return (
    <React.Fragment>
      <img src={Spinner} alt="loading gif" />
    </React.Fragment>
  );
};

export default Loading;
