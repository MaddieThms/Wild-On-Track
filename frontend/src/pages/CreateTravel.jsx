import React from "react";
import CreateTravelPageTitle from "../components/CreateTravelPageTitle";
import SearchTrip from "../components/SearchTrip";
import "./CreateTravel.css";

function CreateTravel() {
  return (
    <div className="travelSearch">
      <CreateTravelPageTitle />
      <SearchTrip />
    </div>
  );
}

export default CreateTravel;
