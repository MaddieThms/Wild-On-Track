/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-useless-path-segments */

import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CardTrip from "./Cardtrip";
import "./MyTrips.css";

export default function BasicGrid() {
  const [showCardTrip, setShowCardTrip] = useState([]);

  React.useEffect(() => {
    const flights = localStorage.getItem("favorites");
    if (flights !== null) setShowCardTrip(JSON.parse(flights));
  }, []);

  const { id } = useParams();

  return showCardTrip ? (
    <div className="centerCardTrip">
      {showCardTrip.map((city) => (
        <Link to={`/carnetvoyage/${city.city}`}>
          <CardTrip key={id} city={city} />
        </Link>
      ))}
    </div>
  ) : null;
}
