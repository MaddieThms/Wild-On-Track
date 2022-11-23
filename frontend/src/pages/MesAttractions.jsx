/* eslint-disable react/prop-types */
import React from "react";
import OptionsFilter from "../components/OptionsFilter";
import Attractions from "../components/cardAttraction/Attractions";

function MesAttractions({ dataAttractions }) {
  return (
    <div>
      <h1 className="title-cards">Attractions : </h1>
      <OptionsFilter />
      <br />
      <Attractions dataAttractions={dataAttractions} />
    </div>
  );
}

export default MesAttractions;
