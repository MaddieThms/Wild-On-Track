/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import TravelDate from "./TravelDate";
import NumberTravelers from "./NumberTravelers";
import "./SearchTrip.css";
import TravelDestination from "./TravelDestination";

function SearchTripActivites({
  setDataAttractions,
  cityId,
  setCityId,
  cityName,
  setCityName,
}) {
  const [numberTraveler, setNumberTraveler] = useState("");
  const [dateFrom, setDateFrom] = useState("");

  const optionsAttractions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5fe208d44dmsh69bf3aada22853ep1e4a3bjsn70ba3b445000",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };
  const findApiAttractions = () => {
    fetch(
      `https://travel-advisor.p.rapidapi.com/attractions/list?location_id=${cityId}&currency=USD&lang=en_US&lunit=km&sort=recommended`,
      optionsAttractions
    )
      .then((response) => response.json())
      .then((result) => {
        setDataAttractions(result.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack id="formStructure" spacing={1}>
        <TravelDestination
          setCityId={setCityId}
          cityId={cityId}
          cityName={cityName}
          setCityName={setCityName}
        />
        <TravelDate dateFrom={dateFrom} setDateFrom={setDateFrom} />
        <NumberTravelers
          numberTraveler={numberTraveler}
          setNumberTraveler={setNumberTraveler}
        />
        <Stack id="formButtons">
          {/* call the API on click */}
          <Button
            onClick={() => {
              findApiAttractions();
            }}
            sx={{ bgcolor: "#eaa226", color: "#fff" }}
            variant="contained"
          >
            <Link to="attractions">Attractions</Link>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default SearchTripActivites;
