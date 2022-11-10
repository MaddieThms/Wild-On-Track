/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */

import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HotelIcon from "@mui/icons-material/Hotel";
import FlightIcon from "@mui/icons-material/Flight";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import SearchTripFlights from "./SearchTripFlights";
import SearchTripHotels from "./SearchTripHotels";
import SearchTripRestaurants from "./SearchTripRestaurant";
import SearchTripActivites from "./SearchTripActivites";

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function SearchBar({
  dataHotels,
  setDataHotels,
  dataFlights,
  setDataFlights,
  departure,
  setDeparture,
  landing,
  setLanding,
  dataRestaurants,
  setDataRestaurants,
  dataAttractions,
  setDataAttractions,
}) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div>
      <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
        <AppBar
          sx={{ bgcolor: "#eaa226", borderRadius: "4px" }}
          position="static"
        >
          <Tabs
            sx={{ bgcolor: "#eaa226", borderRadius: "4px" }}
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab icon={<FlightIcon />} label="" {...a11yProps(0)} />
            <Tab icon={<HotelIcon />} label="" {...a11yProps(1)} />
            <Tab icon={<RestaurantIcon />} label="" {...a11yProps(2)} />
            <Tab icon={<SportsHandballIcon />} label="" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <SearchTripFlights
              dataFlights={dataFlights}
              setDataFlights={setDataFlights}
              departure={departure}
              setDeparture={setDeparture}
              landing={landing}
              setLanding={setLanding}
            />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <SearchTripHotels
              dataHotels={dataHotels}
              setDataHotels={setDataHotels}
              departure={departure}
              setDeparture={setDeparture}
              landing={landing}
              setLanding={setLanding}
            />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <SearchTripRestaurants
              setDataRestaurants={setDataRestaurants}
              dataRestaurants={dataRestaurants}
              departure={departure}
              setDeparture={setDeparture}
              landing={landing}
              setLanding={setLanding}
            />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <SearchTripActivites
              setDataAttractions={setDataAttractions}
              dataAttractions={dataAttractions}
              departure={departure}
              setDeparture={setDeparture}
              landing={landing}
              setLanding={setLanding}
            />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
