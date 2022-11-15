/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-useless-path-segments */

import * as React from "react";
import CardTrip from "./Cardtrip";
import "./MyTrips.css";

export default function BasicGrid() {
  // eslint-disable-next-line prefer-const
  let key = [];

  for (let i = 0; i < localStorage.length; i++) {
    key.push(localStorage.key(i));
  }

  return (
    <div className="centerCardTrip">
      {key.map((city) => (
        <CardTrip city={city} key={city.id} />
      ))}
    </div>
  );
}
