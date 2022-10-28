import React, { useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import DataFlight from "./DataFlight";

function Flight() {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div
      style={{
        width: "300px",
        marginInline: "auto",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "10px",
        border: "solid #BF9767 2px",
        padding: "10px",
        backgroundColor: "white",
      }}
    >
      <DataFlight />
      <StarRateIcon
        onClick={() => handleFavorite()}
        sx={isFavorite ? { color: "#eaa226" } : { color: "#d1d1d1" }}
      />
    </div>
  );
}

export default Flight;
