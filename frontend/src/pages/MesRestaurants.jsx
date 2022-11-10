/* eslint-disable react/prop-types */
import React from "react";
import PageTitle from "../components/pagetitle/PageTitle";
import OptionsFilter from "../components/OptionsFilter";
import Footer from "../components/Footer";
import Restaurants from "../components/restaurant/restaurants";

function MesRestaurants({
  departure,
  landing,
  dataRestaurants,
  setDataRestaurants,
}) {
  return (
    <div>
      <PageTitle departure={departure} landing={landing} />
      <OptionsFilter />
      <br />
      <Restaurants
        dataRestaurants={dataRestaurants}
        setDataRestaurants={setDataRestaurants}
      />
      <Footer />
    </div>
  );
}

export default MesRestaurants;
