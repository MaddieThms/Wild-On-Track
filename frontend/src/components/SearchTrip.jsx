/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
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
  const myHeaders = new Headers();
  myHeaders.append("apikey", "9btTF3zU-5Ur_OwLyOdLWd8Pd2kC2ZJc");
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const [numberTraveler, setNumberTraveler] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [returnFrom, setReturnFrom] = useState("");
  const [airportName, setAirportName] = useState("");
  const [airportNameDestination, setAirportNameDestination] = useState("");
  const [cityId, setCityId] = useState("");

  const optionsHôtels = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "42794bd385msh9f5e2e6a6dd07a5p11848fjsnb7f7488721b3",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  const findApiHotels = () => {
    fetch(
      `https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${cityId}&checkin=${dateFrom}&adults=${numberTraveler}&currency=EUR&nights=2`,
      optionsHôtels
    )
      .then((response) => response.json())
      .then((result) => console.warn(result))
      .catch((err) => console.error(err));
  };
  const url = `https://api.tequila.kiwi.com/v2/search?flight_type=round&fly_from=${airportName}&fly_to=${airportNameDestination}&date_from=${dateFrom}&date_to=${dateFrom}&return_from=${returnFrom}&return_to=${returnFrom}&max_stopovers=2&sort=price&adults=${numberTraveler}&curr=EUR&limit=5`;

  const findApiVols = () => {
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.warn(result);
        setDataFlights(result.data);
      })
      .catch(console.error);
  };

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
          cityId={cityId}
          setCityId={setCityId}
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
          <Button
            onClick={() => {
              findApiVols();
            }}
            className="searchButton"
            variant="contained"
          >
            <Link to="flights">Vol</Link>
          </Button>
          <Button
            onClick={() => {
              findApiHotels();
            }}
            className="searchButton"
            variant="contained"
          >
            Hotel
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
export default SearchTrip;
