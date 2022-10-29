import React from "react";
import Flight from "./Flight";
import Hotel from "./Hotel";

export default function Budget() {
  return (
    <div>
      <h4 style={{ margin: "5vw" }}>Mon Budget</h4>
      <h4 style={{ margin: "5vw" }}>Mes vols</h4>
      <Flight /> <br />
      <Flight />
      <h4 style={{ margin: "5vw" }}>Mes hôtels</h4>
      <div
        style={{
          display: "flex",
          width: "40vh",
          margin: "3vh",
          justifyContent: "space-around",
        }}
      >
        <div style={{ margin: "5vw" }}>
          <Hotel />
        </div>
        <div style={{ margin: "5vw" }}>
          <Hotel />
        </div>
      </div>
    </div>
  );
}
