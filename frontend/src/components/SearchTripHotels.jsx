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

function SearchTripHotels({ landing, setLanding, setDataHotels }) {
  const [numberTraveler, setNumberTraveler] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [returnFrom, setReturnFrom] = useState("");
  const [cityId, setCityId] = useState("");

  const optionsHôtels = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "18a90f29c7msh739768fbdc10db4p12a1c0jsn66ced0f61bca",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  const findApiHotels = () => {
    fetch(
      `https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${cityId}&checkin=${dateFrom}&adults=${numberTraveler}&currency=EUR&nights=2`,
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
