import React, { useEffect, useState } from "react";
import axios from "axios";
import SelectAirport from "../components/SelectAirport";
import Calendar from "../components/Calendar";
import SelectDate from "../components/SelectDate";
import { Link } from "react-router-dom";

const FindFlight = () => {
  const [data, setData] = useState("");
  const [formData, setFormData] = useState({
    flyingTo: "",
    flyingFrom: "",
  });
  const [flightDate, setFlightDate] = useState({
    count: 0,
    departureDate: null,
    departureDateClassName: null,
    arrivalDate: null,
    arrivalDateClassName: null,
  });

  const active = (e) => {
    if (flightDate.count % 2 == 0) {
      setFlightDate({
        ...flightDate,
        departureDate: e.target.attributes[0].value,
        arrivalDate: null,
        departureDateClassName: "departureDate-active",
        count: flightDate.count + 1,
      });
    } else {
      setFlightDate({
        ...flightDate,
        arrivalDate: e.target.attributes[0].value,
        arrivalDateClassName: "arrivalDate-active",
        count: flightDate.count + 1,
      });
    }
  };

  return (
    <div className="findFlight-wrapper my-7">
      {console.log(flightDate)}
      <form className="findFlight">
        <SelectAirport
          placeholder="From?"
          onChange={(e) => {
            setFormData({ ...formData, flyingFrom: e.value });
          }}
        />
        <SelectAirport
          placeholder="To?"
          onChange={(e) => {
            setFormData({ ...formData, flyingTo: e.value });
          }}
        />
        <div>
          <SelectDate flightDate={flightDate} active={active} />
        </div>

        <Link
          className="btn btn-orange"
          to={{
            pathname: "/results",
            state: {
              flyingTo: formData.flyingTo,
              flyingFrom: formData.flyingFrom,
              departureDate: flightDate.departureDate,
              arrivalDate: flightDate.arrivalDate,
            },
          }}
        >
          Find Flights
        </Link>
      </form>
    </div>
  );
};

export default FindFlight;
