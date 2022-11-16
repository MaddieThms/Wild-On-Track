/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
/* import React from "react"; */

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StarRateIcon from "@mui/icons-material/StarRate";
import LuggageIcon from "@mui/icons-material/Luggage";
import { Button } from "@mui/material";
import "../pagetitle/pageTitle.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
/* This is for the switch element MUI */
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FloatingActionButtonZoom({ flight }) {
  /*   function for date extraction */
  function dateExtraction(date) {
    const newDate = date.slice(0, 10);
    return newDate.split("-").reverse().join("-");
  }
  /*   function for hour extraction */
  function hoursExtraction(hour) {
    return hour.slice(11, 16);
  }

  /* This is for the element MUI */
  const [value, setValue] = React.useState(0);
  /* This is for the element MUI */
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /* This is for the favorite */
  const [isFavorite, setIsFavorite] = React.useState(false);
  function handleFavorite() {
    setIsFavorite(!isFavorite);
    // je vais chercher les favoris dans mon local storage
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    // je verifie si un favori correspond à ma ville de destination
    let travel = favorites.find((element) => element.city === flight.cityTo);
    if (!isFavorite) {
      // si ce n'est pas le cas, je le créé
      if (travel === undefined) {
        travel = {
          city: flight.cityTo,
          hotels: [],
          flights: [],
        };
        favorites.push(travel);
      }
      // j'ajoute mon vol
      travel.flights.push(flight);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      // Si mon vol existe dans mes favoris je veux récupérer son index
      if (travel != undefined) {
        let flightIndex = travel.flights.findIndex(
          (element) => element == flight.id
        );
        // Je veux supprimer ce vol selon son index
        travel.flights.splice(flightIndex, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }
  /* const create for bugs with stopovers */
  const stopover = flight.route;

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "90vw",
        position: "relative",
        minHeight: 200,
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          bgcolor: "#eaa226",
          borderRadius: "4px",
        }}
        position="static"
        color="default"
      >
        <Tabs
          sx={{ bgcolor: "#eaa226", borderRadius: "4px" }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Vol aller" {...a11yProps(0)} />
          <Tab label="Vol retour" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* data in "vol aller" */}
        <div className="cardinformationvol">
          <div className="informationsvol">
            <p className="date">{dateExtraction(flight.local_departure)}</p>
            <p className="hour">
              {hoursExtraction(flight.local_departure)} départ de{" "}
              <span className="departure">{flight.cityFrom}</span>
            </p>
            <p className="date">{dateExtraction(flight.local_arrival)}</p>
            <p className="hour">
              {hoursExtraction(flight.local_arrival)} arrivé à{" "}
              <span className="landing">{flight.cityTo}</span>
            </p>
            Prix : <span className="price">{flight.price}€</span>
          </div>
          <div className="iconsPrice">
            <StarRateIcon
              onClick={() => handleFavorite()}
              sx={isFavorite ? { color: "#eaa226" } : { color: "#d1d1d1" }}
            />
            <LuggageIcon />
            <Button variant="outlined" size="small">
              <a href={flight.deep_link} target="_blank">
                offre
              </a>
            </Button>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* data in "vol retour" */}
        <div className="cardinformationvol">
          <div className="informationsvol">
            <p className="date">
              {stopover.length >= 4
                ? dateExtraction(flight.route[2].local_departure)
                : dateExtraction(flight.route[1].local_departure)}
            </p>
            <p className="hour">
              {stopover.length >= 4
                ? hoursExtraction(flight.route[2].local_departure)
                : hoursExtraction(flight.route[1].local_departure)}{" "}
              départ de <span className="departure">{flight.cityTo}</span>
            </p>
            <p className="date">
              {stopover.length >= 4
                ? dateExtraction(flight.route[2].local_arrival)
                : dateExtraction(flight.route[1].local_arrival)}
            </p>
            <p className="hour">
              {stopover.length >= 4
                ? hoursExtraction(flight.route[3].local_arrival)
                : hoursExtraction(flight.route[1].local_arrival)}{" "}
              arrivé à <span className="landing">{flight.cityFrom}</span>
            </p>
            Prix : <span className="price">{flight.price}€</span>
          </div>
          <div className="iconsPrice">
            <StarRateIcon
              onClick={() => handleFavorite()}
              sx={isFavorite ? { color: "#eaa226" } : { color: "#d1d1d1" }}
            />
            <LuggageIcon />
            <Button variant="outlined" size="small">
              <a href={flight.deep_link} target="_blank">
                offre
              </a>
            </Button>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
