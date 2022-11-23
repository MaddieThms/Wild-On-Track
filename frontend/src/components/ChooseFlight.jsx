/* eslint-disable react/prop-types */
import React from "react";
import OptionsFilter from "./OptionsFilter";
import PageTitle from "./pagetitle/PageTitle";
import Flights from "./cardFlight/Flights";

function ChooseFlight({ dataFlights, departure, landing }) {
  return (
    <div className="background">
      <PageTitle
        dataFlights={dataFlights}
        departure={departure}
        landing={landing}
      />
      <OptionsFilter />
      <br />
      <Flights dataFlights={dataFlights} landing={landing} />
    </div>
  );
}

export default ChooseFlight;
