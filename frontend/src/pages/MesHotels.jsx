import React from "react";
import PageTitle from "@components/PageTitle";
import OptionsFilter from "@components/OptionsFilter";
import Hotels from "@components/Hotels";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MesHotels() {
  return (
    <div>
      <Header />
      <PageTitle />
      <OptionsFilter />
      <br />
      <Hotels />
      <Footer />
    </div>
  );
}

export default MesHotels;
