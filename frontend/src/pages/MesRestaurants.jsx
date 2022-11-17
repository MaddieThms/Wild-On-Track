/* eslint-disable react/prop-types */
import React from "react";
import OptionsFilter from "../components/OptionsFilter";
import Restaurants from "../components/restaurant/restaurants";
import "../App.css";

function MesRestaurants({ dataRestaurants, setDataRestaurants }) {
  return (
    <div>
      <h1 className="title-cards">Restaurants</h1>
      <OptionsFilter />
      <br />
      <Restaurants
        dataRestaurants={dataRestaurants}
        setDataRestaurants={setDataRestaurants}
      />{" "}
    </div>
  );
}

export default MesRestaurants;
