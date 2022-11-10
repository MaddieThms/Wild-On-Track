/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LuggageIcon from "@mui/icons-material/Luggage";

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

export default function DisplaySaveFlight({ flight }) {
  /*   function for date extraction */
  function dateExtraction(date) {
    const newDate = date.slice(0, 10);
    return newDate.split("-").reverse().join("-");
  }
  /*   function for hour extraction */
  function hoursExtraction(hour) {
    return hour.slice(11, 16);
  }

  // eslint-disable-next-line no-unused-vars
  const [displayCardTrip, setDisplayCardTrip] = React.useState();
  React.useEffect(() => {
    const flightData = localStorage.getItem("flightssave");
    setDisplayCardTrip(JSON.parse(flightData));
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Vol aller" {...a11yProps(0)} />
          <Tab label="Vol retour" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
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
          </div>
          <div className="iconsPrice">
            <LuggageIcon />
            <p>{flight.price}€</p>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="cardinformationvol">
          <div className="informationsvol">
            <p className="date">{dateExtraction(flight.local_departure)}</p>
            <p className="hour">
              {hoursExtraction(flight.local_departure)} départ de{" "}
              <span className="departure">{flight.cityTo}</span>
            </p>
            <p className="date">{dateExtraction(flight.local_arrival)}</p>
            <p className="hour">
              {hoursExtraction(flight.local_arrival)} arrivé à{" "}
              <span className="landing">{flight.cityFrom}</span>
            </p>
          </div>
          <div className="iconsPrice">
            <LuggageIcon />
            <p>{flight.price}€</p>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
