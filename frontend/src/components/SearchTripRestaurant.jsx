/* eslint-disable no-restricted-syntax */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import TravelDate from "./TravelDate";
import TravelDestinationHotel from "./TravelDestinationHotel";

function SearchTripRestaurants({ dataRestaurants, setDataRestaurants }) {
  const [dateFrom, setDateFrom] = useState("");
  const [cityId, setCityId] = useState("");

  const optionsRestaurant = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "05405b3854mshd5944f4020e59b0p126d9fjsn1f22ffcff455",
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
      <Stack id="formStructure" spacing={1}>
        <TravelDestinationHotel setCityId={setCityId} cityId={cityId} />
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
