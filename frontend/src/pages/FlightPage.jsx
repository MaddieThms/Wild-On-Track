/* eslint-disable react/prop-types */
import React from "react";
import ChooseFlight from "../components/ChooseFlight";

function FlightPage({ dataFlights, departure, landing }) {
  return (
    <div>
      <ChooseFlight
        dataFlights={dataFlights}
        departure={departure}
        landing={landing}
      />
    </div>
  );
}

export default FlightPage;
