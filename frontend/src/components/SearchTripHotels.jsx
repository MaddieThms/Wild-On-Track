/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TravelDate from "./TravelDate";
import NumberTravelers from "./NumberTravelers";
import NumberNightsHotel from "./NumberNightsHotel";
import "./SearchTrip.css";
import TravelDestination from "./TravelDestination";

function SearchTripHotels({
  setDataHotels,
  cityId,
  setCityId,
  cityName,
  setCityName,
}) {
  const [numberTraveler, setNumberTraveler] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [numberNightsHotel, SetNumberNightsHotel] = useState("");

  const optionsHôtels = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "62a6e40615msh22f16898c2ba9cep1a5d8djsn6c6ec76ac11f",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  const findApiHotels = () => {
    fetch(
      `https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${cityId}&checkin=${dateFrom}&adults=${numberTraveler}&currency=EUR&nights=${numberNightsHotel}`,
      optionsHôtels
    )
      .then((response) => response.json())
      .then((result) => {
        console.warn(result);
        setDataHotels(result.data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Typography sx={{ textAlign: "center", marginBottom: 3, fontSize: 20 }}>
        Recherche ton hotel <br /> pour la destination de ton choix
      </Typography>
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
        <NumberNightsHotel
          numberNightsHotel={numberNightsHotel}
          SetNumberNightsHotel={SetNumberNightsHotel}
        />
        <Stack id="formButtons">
          {/* call the API on click */}
          <Button
            onClick={() => {
              findApiHotels();
            }}
            sx={{ bgcolor: "#eaa226", color: "#fff" }}
            variant="contained"
          >
            <Link to="hotels">Hotels</Link>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default SearchTripHotels;
