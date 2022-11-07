/* eslint-disable react/prop-types */
import React from "react";
import PageTitle from "../components/pagetitle/PageTitle";
import OptionsFilter from "../components/OptionsFilter";
import Hotels from "../components/cardHotel/Hotels";
import Footer from "../components/Footer";

function MesHotels({ departure, landing, dataHotels }) {
  return (
    <div>
      <PageTitle departure={departure} landing={landing} />
      <OptionsFilter />
      <br />
      <Hotels dataHotels={dataHotels} />
      <Footer />
    </div>
  );
}

export default MesHotels;
