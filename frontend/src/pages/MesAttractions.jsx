/* eslint-disable react/prop-types */
import React from "react";
import PageTitle from "../components/pagetitle/PageTitle";
import OptionsFilter from "../components/OptionsFilter";
import Footer from "../components/Footer";
import Attractions from "../components/cardAttraction/Attractions";

function MesAttractions({ departure, landing, dataAttractions }) {
  return (
    <div>
      <PageTitle departure={departure} landing={landing} />
      <OptionsFilter />
      <br />
      <Attractions dataAttractions={dataAttractions} />
      <Footer />
    </div>
  );
}

export default MesAttractions;
