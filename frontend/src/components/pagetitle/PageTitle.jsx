/* eslint-disable react/prop-types */
import React from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import "./pageTitle.css";

function PageTitle() {
  return (
    <div className="container-pageTitle">
      <h2 className="city">
        <span className="departure"> </span>
        <TrendingFlatIcon />
        <span className="landing"> </span>
      </h2>
      <p>Aller - Retour</p>
    </div>
  );
}

export default PageTitle;
