/* eslint-disable react/prop-types */
import React from "react";
import Restaurant from "./restaurant";
import "./restaurant.css";

function Restaurants({ dataRestaurants, setDataRestaurants }) {
  return (
    <div className="cardRestaurants">
      {dataRestaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          setDataRestaurants={setDataRestaurants}
        />
      ))}
    </div>
  );
}

export default Restaurants;
