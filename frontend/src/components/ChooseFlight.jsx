import React from "react";
import OptionsFilter from "./OptionsFilter";
import PageTitle from "./PageTitle";
import Flights from "./Flights";

function ChooseFlight() {
  return (
    <div>
      <PageTitle />
      <OptionsFilter />
      <br />
      <Flights />
    </div>
  );
}

export default ChooseFlight;
