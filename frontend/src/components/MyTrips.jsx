import * as React from "react";
import { useState } from "react";
import CardTrip from "./Cardtrip";
import "./MyTrips.css";

export default function BasicGrid() {
  const [showCardTrip, setShowCardTrip] = useState();

  React.useEffect(() => {
    const flight = localStorage.getItem("flightsave");
    if (flight !== null) setShowCardTrip(JSON.parse(flight));
  }, []);

  return (
    <div className="centerCardTrip">
      {showCardTrip ? <CardTrip showCardTrip={showCardTrip} /> : null}
    </div>
  );
}
