/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-useless-path-segments */
import * as React from "react";
import { useState } from "react";
import CardTrip from "./Cardtrip";
import "./MyTrips.css";

export default function BasicGrid() {
  const [showCardTrip, setShowCardTrip] = useState();

  React.useEffect(() => {
    const cardData = localStorage.getItem("flightssave");
    if (cardData !== null) setShowCardTrip(JSON.parse(cardData));
  }, []);

  return showCardTrip ? (
    <div className="centerCardTrip">
      <CardTrip showCardTrip={showCardTrip} key={showCardTrip.id} />
    </div>
  ) : null;
}
