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
    cityId,
    setCityId,
  } = props;

  const optionsCityHôtels = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "18a90f29c7msh739768fbdc10db4p12a1c0jsn66ced0f61bca",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  const findApiLocationHotels = () => {
    fetch(
      `https://travel-advisor.p.rapidapi.com/locations/search?query=${landing}&limit=10&offset=0&units=km&location_id=1&currency=EUR&sort=relevance`,
      optionsCityHôtels
    )
      .then((response) => response.json())
      .then((result) => {
        setCityId(result.data[0].result_object.location_id);
        console.warn(cityId);
      })
      .catch((err) => console.error(err));
  };

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

  const findApisDestinationResult = () => {
    findApiCityBack();
    findApiLocationHotels();
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
          onBlur={() => findApisDestinationResult()}
          variant="outlined"
          value={landing}
          onChange={(event) => setLanding(event.target.value)}
        />
      </div>
    </Box>
  );
}
export default TravelDestination;
