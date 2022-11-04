/* eslint-disable react/prop-types */
import React from "react";

function DataFlight(props) {
  // eslint-disable-next-line no-unused-vars
  const { dataFlight, setDataFlight } = props;
  return (
    <div>
      {dataFlight.map((data) => (
        <p style={{ textAlign: "right", color: "black", fontSize: "0.9em" }}>
          {/* Vol {dataFlight[0].cityTo} pour le {dataFlight[0].local_arrival} */}
          Vol {data.cityTo}
        </p>
      ))}
      <p style={{ margin: "6px" }} />
      <p style={{ textAlign: "right", color: "black", fontSize: "0.9em" }}>
        Heure de départ : xxxh
      </p>
      <p style={{ textAlign: "right", color: "black", fontSize: "0.9em" }}>
        Heure d'arrivée : xxxh
      </p>
      <p style={{ textAlign: "right", color: "black", fontSize: "0.9em" }}>
        Numéros de vol : xxx
      </p>
      <p style={{ textAlign: "right", color: "black", fontSize: "0.9em" }}>
        Prix : xxx€
      </p>
    </div>
  );
}

export default DataFlight;
