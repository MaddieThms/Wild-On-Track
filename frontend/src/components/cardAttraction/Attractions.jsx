/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Loader from "@components/loader/Loader";
import Attraction from "./Attraction";

function Attractions({ dataAttractions }) {
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
      {dataAttractions.map((attraction) => (
        <Attraction key={attraction.id} attraction={attraction} />
      ))}
    </div>
  );
}

export default Attractions;
