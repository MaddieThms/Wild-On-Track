import React from "react";
import { Box, Stack } from "@mui/material";
import TravelDate from "./TravelDate";
import NumberTravelers from "./NumberTravelers";
import SearchButton from "./SearchButton";
import TravelDestination from "./TravelDestination";
import "./SearchTrip.css";

function SearchTrip() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack id="formStructure">
        <TravelDestination />
        <TravelDate />
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
