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
      <CardTrip showCardTrip={showCardTrip} key={showCardTrip.id} />
    </div>
  ) : null;
}
