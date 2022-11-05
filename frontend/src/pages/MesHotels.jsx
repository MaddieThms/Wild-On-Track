import React from "react";
import PageTitle from "@components/pagetitle/PageTitle";
import OptionsFilter from "@components/OptionsFilter";
import Hotels from "@components/Hotels";
import Footer from "../components/Footer";

function MesHotels() {
  return (
    <div>
      <PageTitle />
      <OptionsFilter />
      <br />
      <Hotels />
      <Footer />
    </div>
  );
}

export default MesHotels;
