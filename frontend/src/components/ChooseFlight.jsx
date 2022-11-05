/* eslint-disable react/prop-types */
import React from "react";
import OptionsFilter from "./OptionsFilter";
import PageTitle from "./PageTitle";
import Flights from "./Flights";

function ChooseFlight({ dataFlight }) {
  return (
    <div>
      <PageTitle dataFlight={dataFlight} />
      <OptionsFilter />
      <br />
      <Flights dataFlight={dataFlight} />
    </div>
  );
}

export default ChooseFlight;
