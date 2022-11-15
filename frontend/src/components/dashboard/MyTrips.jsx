/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-useless-path-segments */

import * as React from "react";
import { useState } from "react";
import CardTrip from "./Cardtrip";
import "./MyTrips.css";

export default function BasicGrid() {
  const [showCardTrip, setShowCardTrip] = useState();

  React.useEffect(() => {
    const flight = localStorage.getItem("flightssave");
    if (flight !== null) setShowCardTrip(JSON.parse(flight));
  }, []);

  return showCardTrip ? (
    <div className="centerCardTrip">
      {showCardTrip.map((city) => (
        <CardTrip city={city} key={city.id} />
      ))}
    </div>
  ) : null;
}
