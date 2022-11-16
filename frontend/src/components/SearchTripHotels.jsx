/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import TravelDate from "./TravelDate";
import NumberTravelers from "./NumberTravelers";
import NumberNightsHotel from "./NumberNightsHotel";
import "./SearchTrip.css";
import TravelDestinationHotel from "./TravelDestinationHotel";

function SearchTripHotels({ setDataHotels }) {
  const [numberTraveler, setNumberTraveler] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [numberNightsHotel, SetNumberNightsHotel] = useState("");
  const [cityId, setCityId] = useState("");

  const optionsHôtels = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "05405b3854mshd5944f4020e59b0p126d9fjsn1f22ffcff455",
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
      <Stack id="formStructure" spacing={1}>
        <TravelDestinationHotel setCityId={setCityId} cityId={cityId} />
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
