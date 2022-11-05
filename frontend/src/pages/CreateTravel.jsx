/* eslint-disable react/prop-types */
import React from "react";
import SearchTrip from "../components/SearchTrip";
import "./CreateTravel.css";

function CreateTravel({
  dataFlights,
  setDataFlights,
  departure,
  setDeparture,
  landing,
  setLanding,
}) {
  return (
    <div className="travelSearch">
      <h1 className="title">Crée ton voyage </h1>
      <SearchTrip
        dataFlights={dataFlights}
        setDataFlights={setDataFlights}
        departure={departure}
        setDeparture={setDeparture}
        landing={landing}
        setLanding={setLanding}
      />
    </div>
  );
}

export default CreateTravel;
