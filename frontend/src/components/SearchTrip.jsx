import React from "react";
import { Box, Stack } from "@mui/material";
import TravelDate from "./TravelDate";
import NumberTravelers from "./NumberTravelers";
import SearchButton from "./SearchButton";
import TravelDestination from "./TravelDestination";
import "./SearchTrip.css";
import TravelDeparture from "./TravelDeparture";
import BasicDatePickerRoundTrip from "./TravelRoudtrip";

function SearchTrip() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack id="formStructure">
        <TravelDeparture />
        <TravelDestination />
        <TravelDate />
        <BasicDatePickerRoundTrip />
        <NumberTravelers />
        <Stack id="formButtons">
          <SearchButton />
          <SearchButton />
        </Stack>
      </Stack>
    </Box>
  );
}

export default SearchTrip;
