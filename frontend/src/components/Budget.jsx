import React from "react";
import Flight from "./Flight";
import Hotel from "./Hotel";

export default function Budget() {
  return (
    <div>
      <h4 style={{ margin: "12vw" }}>Mon Budget</h4>
      <h4 style={{ margin: "12vw" }}>Mes vols</h4>
      <Flight /> <br />
      <Flight />
      <h4 style={{ margin: "12vw" }}>Mes hôtels</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40vh",
          margin: "3vh",
          justifyContent: "center",
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
