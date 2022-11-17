/* eslint-disable no-restricted-syntax */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import TravelDate from "./TravelDate";
import TravelDestination from "./TravelDestination";

function SearchTripRestaurants({
  setDataRestaurants,
  cityId,
  setCityId,
  cityName,
  setCityName,
}) {
  const [dateFrom, setDateFrom] = useState("");

  const optionsRestaurant = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5fe208d44dmsh69bf3aada22853ep1e4a3bjsn70ba3b445000",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  const findApiRestaurants = () => {
    fetch(
      `https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=${cityId}&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=30&open_now=false&lang=en_US`,
      optionsRestaurant
    )
      .then((response) => response.json())
      .then((result) => {
        setDataRestaurants(result.data);
        console.warn(cityId);
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
        <Stack id="formButtons">
          {/* call the API on click */}
          <Button
            onClick={() => {
              findApiRestaurants();
            }}
            sx={{ bgcolor: "#eaa226", color: "#fff" }}
            variant="contained"
          >
            <Link to="restaurants">Recherche</Link>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default SearchTripRestaurants;
