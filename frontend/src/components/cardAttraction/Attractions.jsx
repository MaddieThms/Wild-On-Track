/* eslint-disable react/prop-types */
import React from "react";
import Attraction from "./Attraction";

function Attractions({ dataAttractions }) {
  return (
    <div
      className="cardattractions"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "center",
      }}
    >
      {dataAttractions.map((attraction) => (
        <Attraction key={attraction.id} attraction={attraction} />
      ))}
    </div>
  );
}

export default Attractions;
