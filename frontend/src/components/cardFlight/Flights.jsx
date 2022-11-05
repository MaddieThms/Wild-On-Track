/* eslint-disable react/prop-types */
import React from "react";
import Flight from "./Flight";
import "./flight.css";

function Flights({ dataFlights }) {
  return (
    <div className="cardflights">
      {dataFlights.map((flight) => (
        <Flight key={flight.id} flight={flight} />
      ))}
    </div>
  );
}

export default Flights;
