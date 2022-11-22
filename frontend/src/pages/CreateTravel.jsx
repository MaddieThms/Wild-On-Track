/* eslint-disable react/prop-types */
// eslint-disable-next-line import/no-duplicates
import React from "react";
// eslint-disable-next-line import/no-duplicates
import { useEffect, useState } from "react";

// eslint-disable-next-line import/order
import SearchBar from "../components/SearchBar";
import "./CreateTravel.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function CreateTravel({
  dataHotels,
  setDataHotels,
  dataFlights,
  setDataFlights,
  departure,
  setDeparture,
  landing,
  setLanding,
  dataAttractions,
  setDataAttractions,
  setDataRestaurants,
  dataRestaurants,
}) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <div className="travelSearch">
        <FormGroup>
          <FormControlLabel
            type="button"
            onClick={toggleTheme}
            control={<Switch defaultChecked />}
            sx={{ marginLeft: "85vw", marginTop: "20vw" }}
          />
        </FormGroup>
        <h1 className="title-created">Crée ton voyage </h1>
        <SearchBar
          dataHotels={dataHotels}
          setDataHotels={setDataHotels}
          dataFlights={dataFlights}
          setDataFlights={setDataFlights}
          setDataRestaurants={setDataRestaurants}
          dataRestaurants={dataRestaurants}
          departure={departure}
          setDeparture={setDeparture}
          landing={landing}
          setLanding={setLanding}
          dataAttractions={dataAttractions}
          setDataAttractions={setDataAttractions}
        />
      </div>
    </div>
  );
}

export default CreateTravel;
