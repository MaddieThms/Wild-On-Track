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
  landing,
  setLanding,
  dataRestaurants,
  setDataRestaurants,
}) {
  const [dateFrom, setDateFrom] = useState("");
  const [cityId, setCityId] = useState("");

  const optionsRestaurant = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f906c38963msh20f7115f29f65a0p1eade9jsn22c7fcfa3563",
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
        console.warn(dataRestaurants);
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
        <Stack id="formButtons">
          {/* call the API on click */}
          <Button
            onClick={() => {
              findApiRestaurants();
            }}
            className="searchButton"
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
