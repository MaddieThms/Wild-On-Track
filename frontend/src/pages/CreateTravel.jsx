import React from "react";
import SearchTrip from "../components/SearchTrip";
import "./CreateTravel.css";

function CreateTravel() {
  return (
    <div className="travelSearch">
      <h1 className="title">Crée ton voyage </h1>
      <SearchTrip />
    </div>
  );
}

export default CreateTravel;
