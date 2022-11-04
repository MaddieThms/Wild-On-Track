/* eslint-disable react/prop-types */
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function TravelDeparture(props) {
  const { departure, setDeparture, airportName, setAirportName } = props;
  const urlCity = `https://api.tequila.kiwi.com/locations/query?term=${departure}`;

  const myHeadersCity = new Headers();
  myHeadersCity.append("apikey", "S4_ycFnfXLe51IZIyjdezesd-2G0izxO");
  const requestOptionsCity = {
    method: "GET",
    headers: myHeadersCity,
    redirect: "follow",
  };

  const findApiCityDeparture = () => {
    fetch(urlCity, requestOptionsCity)
      .then((response) => response.json())
      .then((result) => {
        setAirportName(result.locations[0].code);
        console.warn(airportName);
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
        <p>Choisi ta ville de départ</p>
        <TextField
          className="label-form"
          id="filled-search"
          label="Search field"
          type="search"
          onBlur={() => findApiCityDeparture()}
          variant="outlined"
          value={departure}
          onChange={(event) => setDeparture(event.target.value)}
        />
      </div>
    </Box>
  );
}

export default TravelDeparture;
