/* eslint-disable react/prop-types */
import React from "react";
import PageTitle from "../components/pagetitle/PageTitle";
import OptionsFilter from "../components/OptionsFilter";
import Attractions from "../components/cardAttraction/Attractions";
import Footer from "../components/Footer";

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
