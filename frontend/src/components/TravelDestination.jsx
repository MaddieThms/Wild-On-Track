/* eslint-disable react/prop-types */
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function TravelDestination({ cityId, setCityId, cityName, setCityName }) {
  const optionsCityHôtels = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "62a6e40615msh22f16898c2ba9cep1a5d8djsn6c6ec76ac11f",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  const findApiLocationHotels = () => {
    fetch(
      `https://travel-advisor.p.rapidapi.com/locations/search?query=${cityName}&limit=10&offset=0&units=km&location_id=1&currency=EUR&sort=relevance`,
      optionsCityHôtels
    )
      .then((response) => response.json())
      .then((result) => {
        setCityId(result.data[0].result_object.location_id);
        console.warn(cityId);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: 270 },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack spacing={1}>
        <TextField
          sx={{ width: 270 }}
          className="label-form"
          id="filled-search"
          label="Choisi ta destination"
          type="search"
          onBlur={() => findApiLocationHotels()}
          variant="outlined"
          onChange={(event) => setCityName(event.target.value)}
        />
      </Stack>
    </Box>
  );
}

export default TravelDestination;
