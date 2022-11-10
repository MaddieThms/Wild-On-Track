/* eslint-disable import/no-named-as-default */
import React from "react";
import MyTrips from "../components/MyTrips";
import Footer from "../components/Footer";
import "./MesCarnets.css";

function MesCarnets() {
  return (
    <div>
      <div className="differentstitles">
        <h2 className="titlemescarnets">Mes carnets de voyage</h2>
        <p className="filter">Filtres</p>
        <h3>2023</h3>
      </div>
      <MyTrips />
      <Footer />
    </div>
  );
}

export default MesCarnets;
