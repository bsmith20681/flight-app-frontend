import React, { useState } from "react";
import AirportCodes from "../airports.json";
import Select, { createFilter } from "react-select";

const SelectAirport = (props) => {
  const options = AirportCodes;

  return (
    <div className="">
      <Select
        name={props.name}
        onChange={props.onChange}
        options={options}
        placeholder={props.placeholder}
        filterOption={createFilter({ ignoreAccents: false })}
      />
    </div>
  );
};

export default SelectAirport;
