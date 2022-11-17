/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import Loader from "@components/loader/Loader";
import React, { useEffect, useState } from "react";
import Hotel from "./Hotel";
import "./Hotels.css";

function Hotels({ dataHotels }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div
      className="cardhotels"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "center",
      }}
    >
      {dataHotels.map((hotel) => (
        <Hotel key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default Hotels;
