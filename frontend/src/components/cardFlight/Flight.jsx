/* eslint-disable react/prop-types */
import React from "react";
import DataFlight from "./DataFlight";
import "./flight.css";

function Flight({ landing, flight }) {
  return (
    <div className="cardflight">
      <DataFlight flight={flight} landing={landing} />
    </div>
  );
}

export default Flight;
