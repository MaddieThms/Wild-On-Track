/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TravelDate from "./TravelDate";
import NumberTravelers from "./NumberTravelers";
import "./SearchTrip.css";
import BasicDatePickerRoundTrip from "./TravelRoundtrip";
import TravelDepartureAutocomplete from "./TravelDepartureAutocomplete";
import TravelDestinationAutocomplete from "./TravelDestinationAutocomplete";

function SearchTripFlights({
  setDataFlights,
  departure,
  setDeparture,
  landing,
  setLanding,
  setDataHotels,
  dataAttractions,
  setDataAttractions,
}) {
  /*   APIKey For Flights */
  const myHeaders = new Headers();
  myHeaders.append("apikey", "9btTF3zU-5Ur_OwLyOdLWd8Pd2kC2ZJc");
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const navigate = useNavigate();
  const [numberTraveler, setNumberTraveler] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [returnFrom, setReturnFrom] = useState("");
  const [airportName, setAirportName] = useState("");
  const [airportNameDestination, setAirportNameDestination] = useState("");
  const [cityId, setCityId] = useState("");

  const url = `https://api.tequila.kiwi.com/v2/search?flight_type=round&fly_from=${airportName}&fly_to=${airportNameDestination}&date_from=${dateFrom}&date_to=${dateFrom}&return_from=${returnFrom}&return_to=${returnFrom}&max_stopovers=2&sort=price&adults=${numberTraveler}&curr=EUR&limit=10`;

  /* Call API with airportName recovered in Traveldeparture with the other API call */
  async function findApiVols() {
    const responses = await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.warn(result);
        setDataFlights(result.data);
      })
      .then(navigate("/flights"))
      .catch(console.error);
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Stack id="formStructure" spacing={1}>
        <TravelDepartureAutocomplete
          departure={departure}
          setDeparture={setDeparture}
          setAirportName={setAirportName}
          airportName={airportName}
        />
        <TravelDestinationAutocomplete
          setAirportNameDestination={setAirportNameDestination}
        />
        <TravelDate dateFrom={dateFrom} setDateFrom={setDateFrom} />
        <BasicDatePickerRoundTrip
          returnFrom={returnFrom}
          setReturnFrom={setReturnFrom}
        />
        <NumberTravelers
          numberTraveler={numberTraveler}
          setNumberTraveler={setNumberTraveler}
        />
        <Stack id="formButtons">
          {/* call the API on click */}
          <Button
            onClick={() => {
              findApiVols();
              setDeparture("");
              setLanding("");
            }}
            sx={{ bgcolor: "#eaa226", color: "#fff" }}
            variant="contained"
          >
            Recherche
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default SearchTripFlights;
