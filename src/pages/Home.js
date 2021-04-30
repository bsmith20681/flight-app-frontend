import React, { useState, useEffect } from "react";
import axios from "axios";

import SelectAirport from "../components/SelectAirport";
import SelectDate from "../components/SelectDate";

const Home = () => {
  const [data, setData] = useState("");
  const options = {
    method: "GET",
    url:
      "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/LAS-sky/MCI-sky/anytime",
    params: { inboundpartialdate: "anytime" },
    headers: {
      "x-rapidapi-key": "6548d07ae3msh59978a08b6317aep162abajsnf71503eccb2d",
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>This is the home page</h1>
      <SelectAirport />
      <SelectDate />
    </div>
  );
};

export default Home;
