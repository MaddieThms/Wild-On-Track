/* eslint-disable react/prop-types */
import React from "react";
import SearchBar from "../components/SearchBar";
import "./CreateTravel.css";

function CreateTravel({
  dataHotels,
  setDataHotels,
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
      <SearchBar
        dataHotels={dataHotels}
        setDataHotels={setDataHotels}
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
