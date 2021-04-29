import React from "react";
import AirportCodes from "../airports.json";
import Select from "react-select";

const SelectAirport = () => {
  const options = [];
  AirportCodes.data.forEach((x) => {
    options.push({
      label: `✈${x["City/Airport"]}, ${x.Country} - ${x["IATA code"]}`,
      value: `${x["IATA code"]}`,
    });
  });

  return <Select options={options} />;
};

export default SelectAirport;
