/* eslint-disable import/no-named-as-default */
import React from "react";
import MyTrips from "../components/dashboard/MyTrips";
import "./MesCarnets.css";

function MesCarnets() {
  return (
    <div>
      <div className="differentstitles">
        <h2 className="titlemescarnets">Mes carnets de voyage</h2>
      </div>
      <MyTrips />
    </div>
  );
}

export default MesCarnets;
