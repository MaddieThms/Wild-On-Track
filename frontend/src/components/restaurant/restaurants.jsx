/* eslint-disable react/prop-types */
import React from "react";
import Restaurant from "./restaurant";

function Restaurants({ dataRestaurants, setDataRestaurants }) {
  return (
    <div
      className="cardhotels"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "center",
      }}
    >
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
