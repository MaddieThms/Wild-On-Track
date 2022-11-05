/* eslint-disable react/prop-types */
import React from "react";

function DataFlight({ flight }) {
  return (
    <div>
      <p style={{ textAlign: "right", color: "black", fontSize: "0.9em" }}>
        {/* Vol {dataFlight[0].cityTo} pour le {dataFlight[0].local_arrival} */}
        Vol {flight.cityFrom} direction {flight.cityTo}
      </p>
      <p style={{ margin: "6px" }} />
      <p style={{ textAlign: "right", color: "black", fontSize: "0.9em" }}>
        Date de départ : {flight.local_departure}
      </p>
      <p style={{ textAlign: "right", color: "black", fontSize: "0.9em" }}>
        Date d'arrivée : {flight.local_arrival}
      </p>
      <p style={{ textAlign: "right", color: "black", fontSize: "0.9em" }}>
        Numéros de vol : xxx
      </p>
      <p style={{ textAlign: "right", color: "black", fontSize: "0.9em" }}>
        Prix : {flight.price}
      </p>
    </div>
  );
}

export default DataFlight;
