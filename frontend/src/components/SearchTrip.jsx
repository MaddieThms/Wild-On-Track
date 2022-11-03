import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import TravelDate from "./TravelDate";
import NumberTravelers from "./NumberTravelers";
import TravelDestination from "./TravelDestination";
import "./SearchTrip.css";
import TravelDeparture from "./TravelDeparture";
import BasicDatePickerRoundTrip from "./TravelRoundtrip";

function SearchTrip() {
  const myHeaders = new Headers();
  myHeaders.append("apikey", "9btTF3zU-5Ur_OwLyOdLWd8Pd2kC2ZJc");
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const myHeadersCity = new Headers();
  myHeadersCity.append("apikey", "S4_ycFnfXLe51IZIyjdezesd-2G0izxO");
  const requestOptionsCity = {
    method: "GET",
    headers: myHeadersCity,
    redirect: "follow",
  };

  const [departure, setDeparture] = useState("");
  const [landing, setLanding] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [returnFrom, setReturnFrom] = useState("");
  const [airportName, setAirportName] = useState("");
  const [airportNameDestination, setAirportNameDestination] = useState("");

  const urlCity = `https://api.tequila.kiwi.com/locations/query?term=${departure}`;
  const urlCityDest = `https://api.tequila.kiwi.com/locations/query?term=${landing}`;
  const url = `https://api.tequila.kiwi.com/v2/search?flight_type=round&fly_from=${airportName}&fly_to=${airportNameDestination}&date_from=${dateFrom}&date_to=${dateFrom}&return_from=${returnFrom}&return_to=${returnFrom}&max_stopovers=2&sort=price`;

  const findApiCity = () => {
    fetch(urlCity, requestOptionsCity)
      .then((response) => response.json())
      .then((result) => {
        setAirportName(result.locations[0].code);
        console.warn(airportName);
      })
      .catch((error) => console.warn("error", error));

    fetch(urlCityDest, requestOptionsCity)
      .then((response) => response.json())
      .then((result) => {
        setAirportNameDestination(result.locations[0].code);
        console.warn(airportNameDestination);
      })
      .catch((error) => console.warn("error", error));
  };

  const findApi = () => {
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.warn(result);
      })
      .catch(console.error);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack id="formStructure">
        <TravelDeparture departure={departure} setDeparture={setDeparture} />
        <TravelDestination landing={landing} setLanding={setLanding} />
        <TravelDate dateFrom={dateFrom} setDateFrom={setDateFrom} />
        <BasicDatePickerRoundTrip
          returnFrom={returnFrom}
          setReturnFrom={setReturnFrom}
        />
        <NumberTravelers />
        <Stack id="formButtons">
          <Button
            onClick={() => {
              findApiCity();
              findApi();
            }}
            className="searchButton"
            variant="contained"
          >
            Vol
          </Button>
          <Button className="searchButton" variant="contained">
            Hotel
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
export default SearchTrip;
