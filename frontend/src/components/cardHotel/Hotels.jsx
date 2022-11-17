/* eslint-disable react/prop-types */
import React from "react";
import Hotel from "./Hotel";
import "./Hotels.css";

function Hotels({ dataHotels }) {
  return (
    <div className="cardHotels">
      {dataHotels.map((hotel) => (
        <Hotel key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default Hotels;
