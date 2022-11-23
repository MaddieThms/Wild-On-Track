/* eslint-disable no-restricted-syntax */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./SearchTrip.css";
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
      "X-RapidAPI-Key": "9dbbe5adb9msh85053a45e47537bp17bcfdjsnc900e1d54142",
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
    <div className="containerForm">
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{ textAlign: "center", marginBottom: 3, fontSize: 20 }}
          variant="h1"
        >
          Une petite faim ? Recherche le meilleur restaurant
        </Typography>
        <Stack id="formStructure" spacing={1}>
          <TravelDestination
            setCityId={setCityId}
            cityId={cityId}
            cityName={cityName}
            setCityName={setCityName}
          />
          <TravelDate dateFrom={dateFrom} setDateFrom={setDateFrom} />
        </Stack>
        <Stack id="formButtons">
          {/* call the API on click */}
          <Button
            onClick={() => {
              findApiRestaurants();
            }}
            sx={{ bgcolor: "#eaa226", color: "#fff" }}
            variant="contained"
          >
            <Link
              style={{ bgcolor: "#eaa226", color: "#fff" }}
              to="restaurants"
              className="link"
            >
              Rechercher
            </Link>
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default SearchTripRestaurants;
