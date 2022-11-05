/* eslint-disable react/prop-types */
import React from "react";
import Flight from "./Flight";

function Flights({ dataFlight }) {
  return (
    <div>
      {dataFlight.map((flight) => (
        <Flight key={flight.id} flight={flight} />
      ))}
    </div>
  );
}

export default Flights;
