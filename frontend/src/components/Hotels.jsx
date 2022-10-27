import React from "react";
import Hotel from "./Hotel";

function Hotels() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "center",
      }}
    >
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
    </div>
  );
}

export default Hotels;
