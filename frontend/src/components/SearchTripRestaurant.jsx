/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import TravelDate from "./TravelDate";
import NumberTravelers from "./NumberTravelers";
import "./SearchTrip.css";
import BasicDatePickerRoundTrip from "./TravelRoundtrip";
import TravelDestination from "./TravelDestination";

function SearchTripRestaurants({ landing, setLanding, setDataRestaurant }) {
  const [numberTraveler, setNumberTraveler] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [returnFrom, setReturnFrom] = useState("");
  const [cityId, setCityId] = useState("");

  const optionsRestaurant = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/restaurants/get-details",
    params: { location_id: "9782025", currency: "USD", lang: "en_US" },
    headers: {
      "X-RapidAPI-Key": "f906c38963msh20f7115f29f65a0p1eade9jsn22c7fcfa3563",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  const findApiRestaurants = () => {
    fetch(
      `https://travel-advisor.p.rapidapi.com/restaurants/get-details?location_id=${cityId}&checkin=${dateFrom}&adults=${numberTraveler}`,
      optionsRestaurant
    )
      .then((response) => response.json())
      .then((result) => {
        console.warn(result);
        setDataRestaurant(result.data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stack id="formStructure">
        <TravelDestination
          landing={landing}
          setLanding={setLanding}
          setCityId={setCityId}
          cityId={cityId}
        />
        <TravelDate dateFrom={dateFrom} setDateFrom={setDateFrom} />
        <BasicDatePickerRoundTrip
          returnFrom={returnFrom}
          setReturnFrom={setReturnFrom}
        />
        <NumberTravelers
          numberTraveler={numberTraveler}
          setNumberTraveler={setNumberTraveler}
        />
        <Stack id="formButtons">
          {/* call the API on click */}
          <Button
            onClick={() => {
              findApiRestaurants();
            }}
            className="searchButton"
            variant="contained"
          >
            <Link to="hotels">Hotels</Link>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default SearchTripRestaurants;
