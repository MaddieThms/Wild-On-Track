/* eslint-disable react/prop-types */
import React from "react";
import OptionsFilter from "./OptionsFilter";
import PageTitle from "./PageTitle";
import Flights from "./Flights";

function ChooseFlight(props) {
  const { dataFlight, setDataFlight } = props;
  return (
    <div>
      <PageTitle />
      <OptionsFilter />
      <br />
      <Flights dataFlight={dataFlight} setDataFlight={setDataFlight} />
    </div>
  );
}

export default ChooseFlight;
