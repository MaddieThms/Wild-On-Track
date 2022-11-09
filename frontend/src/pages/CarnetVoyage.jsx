/* eslint-disable react/require-default-props */
import React from "react";
import "./carnetVoyage.css";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LuggageIcon from "@mui/icons-material/Luggage";
import Footer from "../components/Footer";

// function for the component MUI swipeableviews
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
// function for the component MUI swipeableviews
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
// function for the component MUI swipeableviews
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function CarnetVoyage() {
  /*   function for date extraction */
  function dateExtraction(date) {
    const newDate = date.slice(0, 10);
    return newDate.split("-").reverse().join("-");
  }
  /*   function for hour extraction */
  function hoursExtraction(hour) {
    return hour.slice(11, 16);
  }

  /* Use state for stock data in the localstorage */
  const [displayCardTrip, setDisplayCardTrip] = React.useState();

  /* use effect for get the data in the localstorage */
  React.useEffect(() => {
    const flightData = localStorage.getItem("flightsave");
    setDisplayCardTrip(JSON.parse(flightData));
  }, []);

  /* It's for the component MUI swipeableviews */
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  /* It's for the component MUI swipeableviews */
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /* It's for the component MUI swipeableviews */
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="container-recap">
      <p className="title-voyage">
        Mon voyage à{" "}
        <span className="landing">
          {displayCardTrip ? displayCardTrip.cityTo : ""}
        </span>
      </p>
      <div className="container-flight">
        {/* it's for display the localstorage data */}
        {displayCardTrip && (
          <Box
            sx={{
              bgcolor: "background.paper",
              width: "90vw",
              position: "relative",
              minHeight: 200,
            }}
          >
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="main"
                textColor="transparent"
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
                {/* data in "vol aller" */}
                <div className="cardinformationvol">
                  <div className="informationsvol">
                    <p className="date">
                      {dateExtraction(displayCardTrip.local_departure)}
                    </p>
                    <p className="hour">
                      {hoursExtraction(displayCardTrip.local_departure)} départ
                      de{" "}
                      <span className="departure">
                        {displayCardTrip.cityFrom}
                      </span>
                    </p>
                    <p className="date">
                      {dateExtraction(displayCardTrip.local_arrival)}{" "}
                    </p>
                    <p className="hour">
                      {hoursExtraction(displayCardTrip.local_arrival)} arrivé à{" "}
                      <span className="landing">{displayCardTrip.cityTo}</span>
                    </p>
                  </div>
                  <div className="iconsPrice">
                    <LuggageIcon />
                    <p>{displayCardTrip.price}€</p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                {/* data in "vol retour" */}
                <div className="cardinformationvol">
                  <div className="informationsvol">
                    <p className="date">
                      {dateExtraction(displayCardTrip.local_departure)}
                    </p>
                    <p className="hour">
                      {hoursExtraction(displayCardTrip.local_departure)} départ
                      de{" "}
                      <span className="departure">
                        {displayCardTrip.cityTo}
                      </span>
                    </p>
                    <p className="date">
                      {dateExtraction(displayCardTrip.local_arrival)}
                    </p>
                    <p className="hour">
                      {hoursExtraction(displayCardTrip.local_arrival)} arrivé à{" "}
                      <span className="landing">
                        {displayCardTrip.cityFrom}
                      </span>
                    </p>
                  </div>
                  <div className="iconsPrice">
                    <LuggageIcon />
                    <p>{displayCardTrip.price}€</p>
                  </div>
                </div>
              </TabPanel>
            </SwipeableViews>
          </Box>
        )}
      </div>
      <Footer />
    </div>
  );
}
