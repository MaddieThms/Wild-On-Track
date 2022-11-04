/* eslint-disable react/prop-types */
import React from "react";
import ChooseFlight from "../components/ChooseFlight";
import Footer from "../components/Footer";

function FlightPage(props) {
  const { dataFlight, setDataFlight } = props;
  return (
    <>
      <ChooseFlight dataFlight={dataFlight} setDataFlight={setDataFlight} />
      <Footer />
    </>
  );
}

export default FlightPage;
