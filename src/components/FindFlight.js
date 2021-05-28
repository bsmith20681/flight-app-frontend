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

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${formData.flyingFrom}-sky/${formData.flyingTo}-sky/${flightDate.departureDate}`,
      params: { inboundpartialdate: `anytime` },
      headers: {
        "x-rapidapi-key": "6548d07ae3msh59978a08b6317aep162abajsnf71503eccb2d",
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("handling the form");
  };

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
      <div className="findFlight">
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
              data,
            },
          }}
        >
          Find Flights
        </Link>
      </div>
    </div>
  );
};

export default FindFlight;
