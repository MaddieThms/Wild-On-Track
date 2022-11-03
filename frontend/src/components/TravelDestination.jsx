/* eslint-disable react/prop-types */
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function TravelDestination(props) {
  const {
    landing,
    setLanding,
    airportNameDestination,
    setAirportNameDestination,
  } = props;

  const urlCityDest = `https://api.tequila.kiwi.com/locations/query?term=${landing}`;

  const myHeadersCity = new Headers();
  myHeadersCity.append("apikey", "S4_ycFnfXLe51IZIyjdezesd-2G0izxO");
  const requestOptionsCity = {
    method: "GET",
    headers: myHeadersCity,
    redirect: "follow",
  };

  const findApiCityBack = () => {
    fetch(urlCityDest, requestOptionsCity)
      .then((response) => response.json())
      .then((result) => {
        setAirportNameDestination(result.locations[0].code);
        console.warn(airportNameDestination);
      })
      .catch((error) => console.warn("error", error));
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <p>Choisi ta destination</p>
        <TextField
          className="label-form"
          id="filled-search"
          label="Search field"
          type="search"
          onBlur={() => findApiCityBack()}
          variant="outlined"
          value={landing}
          onChange={(event) => setLanding(event.target.value)}
        />
      </div>
    </Box>
  );
}
export default TravelDestination;
