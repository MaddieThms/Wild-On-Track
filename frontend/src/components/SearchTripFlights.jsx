/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TravelDate from "./TravelDate";
import NumberTravelers from "./NumberTravelers";
import TravelDestination from "./TravelDestination";
import "./SearchTrip.css";
import TravelDeparture from "./TravelDeparture";
import BasicDatePickerRoundTrip from "./TravelRoundtrip";

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

  const optionsAttractions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "05405b3854mshd5944f4020e59b0p126d9fjsn1f22ffcff455",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };
  const findApiAttractions = () => {
    fetch(
      `https://travel-advisor.p.rapidapi.com/attractions/list?location_id=${cityId}&currency=USD&lang=en_US&lunit=km&sort=recommended`,
      optionsAttractions
    )
      .then((response) => response.json())
      .then((result) => {
        console.warn(result);
        setDataAttractions(result.data);
      })
      .catch((err) => console.error(err));
  };

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
      .then((result) => {
        console.warn(result);
        setDataHotels(result.data);
      })
      .catch((err) => console.error(err));
  };

  const url = `https://api.tequila.kiwi.com/v2/search?flight_type=round&fly_from=${airportName}&fly_to=${airportNameDestination}&date_from=${dateFrom}&date_to=${dateFrom}&return_from=${returnFrom}&return_to=${returnFrom}&max_stopovers=2&sort=price&adults=${numberTraveler}&curr=EUR&limit=5`;

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
