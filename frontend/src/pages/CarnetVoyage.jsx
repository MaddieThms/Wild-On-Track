/* eslint-disable react/require-default-props */
import React from "react";
import "./carnetVoyage.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LuggageIcon from "@mui/icons-material/Luggage";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import Footer from "../components/Footer";

// function for the component MUI swipeableviews
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
// function for the component MUI swipeableviews
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
// function for the component MUI swipeableviews
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
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
  const [displayCardHotels, setDisplayCardHotels] = React.useState();

  /* use effect for get the data in the localstorage */
  React.useEffect(() => {
    const flightData = localStorage.getItem("flightsave");
    setDisplayCardTrip(JSON.parse(flightData));
  }, []);

  /* use effect for get the data in the localstorage */

  React.useEffect(() => {
    const hotelData = localStorage.getItem("hotelsave");
    setDisplayCardHotels(JSON.parse(hotelData));
  }, []);

  /* It's for the component MUI swipeableviews */
  const [value, setValue] = React.useState(0);

  /* It's for the component MUI swipeableviews */
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                // style for bar
                bgcolor: "#eaa226",
                borderRadius: "4px",
              }}
              position="static"
            >
              <Tabs
                // style for bar
                sx={{ bgcolor: "#eaa226", borderRadius: "4px" }}
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
            </Box>
            <TabPanel value={value} index={0}>
              {/* data in "vol aller" */}
              <div className="cardinformationvol">
                <div className="informationsvol">
                  <p className="date">
                    {dateExtraction(displayCardTrip.local_departure)}
                  </p>
                  <p className="hour">
                    {hoursExtraction(displayCardTrip.local_departure)} départ de{" "}
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
            <TabPanel value={value} index={1}>
              {/* data in "vol retour" */}
              <div className="cardinformationvol">
                <div className="informationsvol">
                  <p className="date">
                    {dateExtraction(displayCardTrip.local_departure)}
                  </p>
                  <p className="hour">
                    {hoursExtraction(displayCardTrip.local_departure)} départ de{" "}
                    <span className="departure">{displayCardTrip.cityTo}</span>
                  </p>
                  <p className="date">
                    {dateExtraction(displayCardTrip.local_arrival)}
                  </p>
                  <p className="hour">
                    {hoursExtraction(displayCardTrip.local_arrival)} arrivé à{" "}
                    <span className="landing">{displayCardTrip.cityFrom}</span>
                  </p>
                </div>
                <div className="iconsPrice">
                  <LuggageIcon />
                  <p>{displayCardTrip.price}€</p>
                </div>
              </div>
            </TabPanel>
          </Box>
        )}
        {displayCardHotels && (
          <Card
            elevation={0}
            sx={{
              maxWidth: "90vw",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              borderRadius: "20px",
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={
                displayCardHotels.photo?.images?.medium
                  ? displayCardHotels.photo.images.medium.url
                  : "https://img.freepik.com/vecteurs-premium/fond-batiment-hotel-plat_23-2148146118.jpg?w=826"
              }
              alt={displayCardHotels.name}
            />
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  color: "#eaa226",
                  fontSize: "1.2em",
                  width: "75vw",
                  maxWidth: "600px",
                }}
              >
                {displayCardHotels.name}
              </Typography>
              <Typography variant="p" color="#40a798" sx={{ fontSize: "1em" }}>
                Price : {displayCardHotels.price}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        )}
      </div>
      <Footer />
    </div>
  );
}
