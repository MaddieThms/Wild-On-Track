/* eslint-disable react/prop-types */
import React from "react";
import DataFlight from "./DataFlight";
import "./flight.css";

function Flight({ flight }) {
  return (
    <div className="cardflight">
      <DataFlight flight={flight} />
    </div>
  );
}

export default Flight;
