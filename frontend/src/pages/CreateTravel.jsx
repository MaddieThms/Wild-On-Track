/* eslint-disable react/prop-types */
import React from "react";
import SearchTrip from "../components/SearchTrip";
import "./CreateTravel.css";

function CreateTravel(props) {
  const { dataFlight, setDataFlight } = props;
  return (
    <div className="travelSearch">
      <h1 className="title">Crée ton voyage </h1>
      <SearchTrip dataFlight={dataFlight} setDataFlight={setDataFlight} />
    </div>
  );
}

export default CreateTravel;
