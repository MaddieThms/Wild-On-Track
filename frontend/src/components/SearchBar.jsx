/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */

import * as React from "react";
import PropTypes from "prop-types";
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
import "../App.css";
import "./SearchBar.css";

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [cityId, setCityId] = React.useState("");
  const [cityName, setCityName] = React.useState("");

  return (
    <div>
      <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
        <Box
          className="searchBar"
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            bgcolor: "#eaa226",
            borderRadius: "4px",
          }}
          position="static"
        >
          <Tabs
            sx={{ bgcolor: "#eaa226", borderRadius: "4px" }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              className="icon-tab"
              icon={<FlightIcon sx={{ color: "#fff" }} />}
              label=""
              {...a11yProps(0)}
              sx={{ color: "#fff" }}
            />
            <Tab
              className="icon-tab"
              icon={<HotelIcon sx={{ color: "#fff" }} />}
              label=""
              {...a11yProps(1)}
            />
            <Tab
              className="icon-tab"
              icon={<RestaurantIcon sx={{ color: "#fff" }} />}
              label=""
              {...a11yProps(2)}
            />
            <Tab
              className="icon-tab"
              icon={<SportsHandballIcon sx={{ color: "#fff" }} />}
              label=""
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <SearchTripFlights
            dataFlights={dataFlights}
            setDataFlights={setDataFlights}
            departure={departure}
            setDeparture={setDeparture}
            landing={landing}
            setLanding={setLanding}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SearchTripHotels
            dataHotels={dataHotels}
            setDataHotels={setDataHotels}
            departure={departure}
            setDeparture={setDeparture}
            landing={landing}
            setLanding={setLanding}
            cityId={cityId}
            setCityId={setCityId}
            cityName={cityName}
            setCityName={setCityName}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SearchTripRestaurants
            setDataRestaurants={setDataRestaurants}
            dataRestaurants={dataRestaurants}
            departure={departure}
            setDeparture={setDeparture}
            landing={landing}
            setLanding={setLanding}
            cityId={cityId}
            setCityId={setCityId}
            cityName={cityName}
            setCityName={setCityName}
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <SearchTripActivites
            setDataAttractions={setDataAttractions}
            dataAttractions={dataAttractions}
            departure={departure}
            setDeparture={setDeparture}
            landing={landing}
            setLanding={setLanding}
          />
        </TabPanel>
      </Box>
    </div>
  );
}
