/* eslint-disable react/prop-types */
import React from "react";
import OptionsFilter from "../components/OptionsFilter";
import Hotels from "../components/cardHotel/Hotels";
import "../App.css";

function MesHotels({ dataHotels }) {
  return (
    <div>
      <h1 className="title-cards">Hotels</h1>
      <OptionsFilter />
      <br />
      <Hotels dataHotels={dataHotels} />
    </div>
  );
}

export default MesHotels;
