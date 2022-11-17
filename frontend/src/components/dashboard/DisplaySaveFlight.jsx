/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import StarRateIcon from "@mui/icons-material/StarRate";
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
  const [isFavorite, setIsFavorite] = React.useState(true);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
    // je vais chercher les favoris dans mon local storage
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
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
      if (travel !== undefined) {
        const flightIndex = travel.flights.findIndex(
          (element) => element === flight.id
        );
        // Je veux supprimer ce vol selon son index
        travel.flights.splice(flightIndex, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }
  /*   const [deleteFavorite, setDeleteFavorite] = React.useState(true);

  setDeleteFavorite(isFavorite); */

  return isFavorite ? (
    <Box sx={{ width: "90%", bgcolor: "white", mb: 3 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ backgroundColor: "#eafcf8" }}
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
            <StarRateIcon
              onClick={() => handleFavorite()}
              sx={isFavorite ? { color: "#eaa226" } : { color: "#d1d1d1" }}
            />
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
  ) : null;
}
