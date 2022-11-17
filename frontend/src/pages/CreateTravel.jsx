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
  dataAttractions,
  setDataAttractions,
  setDataRestaurants,
  dataRestaurants,
}) {
  return (
    <div className="travelSearch">
      <h1 className="title-created">Crée ton voyage </h1>
      <SearchBar
        dataHotels={dataHotels}
        setDataHotels={setDataHotels}
        dataFlights={dataFlights}
        setDataFlights={setDataFlights}
        setDataRestaurants={setDataRestaurants}
        dataRestaurants={dataRestaurants}
        departure={departure}
        setDeparture={setDeparture}
        landing={landing}
        setLanding={setLanding}
        dataAttractions={dataAttractions}
        setDataAttractions={setDataAttractions}
      />
    </div>
  );
}

export default CreateTravel;
