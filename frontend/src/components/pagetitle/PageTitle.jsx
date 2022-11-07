/* eslint-disable react/prop-types */
import React from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import "./pageTitle.css";

function PageTitle({ dataFlights }) {
  return (
    <div className="container-pageTitle">
      <h2 className="city">
        <span className="departure">{dataFlights[0].cityFrom} </span>
        <TrendingFlatIcon />
        <span className="landing"> {dataFlights[0].cityTo}</span>
      </h2>
      <p>Aller - Retour</p>
    </div>
  );
}

export default PageTitle;
