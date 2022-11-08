/* eslint-disable react/prop-types */
import React from "react";
import ChooseFlight from "../components/ChooseFlight";
import Footer from "../components/Footer";

function FlightPage({ dataFlights, departure, landing }) {
  return (
    <>
      <ChooseFlight
        dataFlights={dataFlights}
        departure={departure}
        landing={landing}
      />

      <Footer />
    </>
  );
}

export default FlightPage;
