/* eslint-disable react/prop-types */
import React from "react";

function PageTitle({ dataFlight }) {
  return (
    <div style={{ marginTop: "130px", marginBottom: "5px" }}>
      <h1 style={{ textAlign: "center", color: "#40A798" }}>
        Vols pour{" "}
        <span style={{ color: "#eaa226" }}>{dataFlight[1].cityTo}</span>
      </h1>
    </div>
  );
}

export default PageTitle;
