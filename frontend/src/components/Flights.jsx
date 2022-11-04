/* eslint-disable react/prop-types */
import React from "react";
import Flight from "./Flight";

function Flights(props) {
  const { dataFlight, setDataFlight } = props;
  return (
    <div>
      {dataFlight.map(() => (
        <Flight dataFlight={dataFlight} setDataFlight={setDataFlight} />
      ))}
    </div>
  );
}

export default Flights;
