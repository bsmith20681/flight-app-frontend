import React, { useEffect, useState } from "react";
import axios from "axios";
import SelectAirport from "../components/SelectAirport";

const FindFlight = () => {
  const [data, setData] = useState("");
  const [formData, setFormData] = useState({
    flyingTo: "",
    flyingFrom: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${formData.flyingFrom}-sky/${formData.flyingTo}-sky/anytime`,
      params: { inboundpartialdate: "anytime" },
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

  return (
    <form onSubmit={handleSubmit} class="findFlight">
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
      <button onSubmit={handleSubmit}>Find Flights</button>
    </form>
  );
};

export default FindFlight;
