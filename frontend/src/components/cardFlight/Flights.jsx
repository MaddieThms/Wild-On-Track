/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import Loader from "@components/loader/Loader";
import React, { useEffect, useState } from "react";
import Flight from "./Flight";
import "./flight.css";

function Flights({ dataFlights }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className="cardflights">
      {dataFlights.map((flight) => (
        <Flight key={flight.id} flight={flight} />
      ))}
    </div>
  );
}

export default Flights;
