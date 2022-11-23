/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Restaurant from "./restaurant";
import Loader from "@components/loader/Loader";
import "./restaurant.css";

function Restaurants({ dataRestaurants, setDataRestaurants }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
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
