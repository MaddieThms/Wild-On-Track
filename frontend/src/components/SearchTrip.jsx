/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import TravelDate from "./TravelDate";
import NumberTravelers from "./NumberTravelers";
import TravelDestination from "./TravelDestination";
import "./SearchTrip.css";
import TravelDeparture from "./TravelDeparture";
import BasicDatePickerRoundTrip from "./TravelRoundtrip";

function SearchTrip({
  dataFlights,
  setDataFlights,
  departure,
  setDeparture,
  landing,
  setLanding,
}) {
  /*   APIKey in the header of the API */
  const myHeaders = new Headers();
  myHeaders.append("apikey", "9btTF3zU-5Ur_OwLyOdLWd8Pd2kC2ZJc");
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  /* Usestate declaration */
  const navigate = useNavigate();
  const [numberTraveler, setNumberTraveler] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [returnFrom, setReturnFrom] = useState("");
  const [airportName, setAirportName] = useState("");
  const [airportNameDestination, setAirportNameDestination] = useState("");
  const url = `https://api.tequila.kiwi.com/v2/search?flight_type=round&fly_from=${airportName}&fly_to=${airportNameDestination}&date_from=${dateFrom}&date_to=${dateFrom}&return_from=${returnFrom}&return_to=${returnFrom}&max_stopovers=2&sort=price&adults=${numberTraveler}&curr=EUR&limit=5`;

  /* Call API with airportName recovered in Traveldeparture with the other API call */
  async function findApi() {
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
      <Stack id="formStructure">
        <TravelDeparture
          departure={departure}
          setDeparture={setDeparture}
          setAirportName={setAirportName}
          airportName={airportName}
        />
        <TravelDestination
          landing={landing}
          setLanding={setLanding}
          setAirportNameDestination={setAirportNameDestination}
          airportNameDestination={airportNameDestination}
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
              findApi();
              setDeparture("");
              setLanding("");
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
