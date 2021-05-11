import React from "react";

import FindFlight from "../components/FindFlight";
import SelectDate from "../components/SelectDate";
import Calendar from "../components/Calendar";

const Home = () => {
  return (
    <div className="container">
      <h1>This is the home page</h1>
      <FindFlight />
      <SelectDate />
      <Calendar />
    </div>
  );
};

export default Home;
