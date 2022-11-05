/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
/* import React from "react"; */

import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StarRateIcon from "@mui/icons-material/StarRate";
import LuggageIcon from "@mui/icons-material/Luggage";
import { Button } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function FloatingActionButtonZoom({ flight }) {
  function dateExtraction(date) {
    const newDate = date.slice(0, 10);
    return newDate.split("-").reverse().join("-");
  }
  function hoursExtraction(hour) {
    return hour.slice(11, 16);
  }
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [isFavorite, setIsFavorite] = React.useState(false);
  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "90vw",
        position: "relative",
        minHeight: 200,
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="#eaa226"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Vol aller" {...a11yProps(0)} />
          <Tab label="Vol retour" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="cardinformationvol">
            <div className="informationsvol">
              <p className="date">{dateExtraction(flight.local_departure)}</p>
              <p className="hour">
                {hoursExtraction(flight.local_departure)} départ de{" "}
                {flight.cityFrom}
              </p>
              <p className="date">{dateExtraction(flight.local_arrival)}</p>
              <p className="hour">
                {hoursExtraction(flight.local_arrival)} arrivé à {flight.cityTo}
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
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="cardinformationvol">
            <div className="informationsvol">
              <p className="date">
                {dateExtraction(flight.route[2].local_departure)}
              </p>
              <p className="hour">
                {hoursExtraction(flight.route[2].local_departure)} départ de{" "}
                {flight.cityFrom}
              </p>
              <p className="date">
                {dateExtraction(flight.route[2].local_arrival)}
              </p>
              <p className="hour">
                {hoursExtraction(flight.route[3].local_arrival)} arrivé à{" "}
                {flight.cityTo}
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
      </SwipeableViews>
    </Box>
  );
}
