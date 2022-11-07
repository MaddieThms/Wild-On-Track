/* eslint-disable react/prop-types */
import React from "react";
import Hotel from "./Hotel";

function Hotels({ dataHotels }) {
  return (
    <div
      className="cardhotels"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "center",
      }}
    >
      {dataHotels.map((hotel) => (
        <Hotel key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default Hotels;
