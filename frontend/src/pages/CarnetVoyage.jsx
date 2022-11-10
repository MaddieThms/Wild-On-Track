/* eslint-disable import/no-unresolved */
/* eslint-disable react/require-default-props */
import React from "react";
import DisplaySaveFlight from "@components/dashboard/DisplaySaveFlight";
import "./carnetVoyage.css";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import Footer from "../components/Footer";

export default function CarnetVoyage() {
  /* Use state for stock data in the localstorage */
  const [displayCardTrip, setDisplayCardTrip] = React.useState();
  const [displayCardHotels, setDisplayCardHotels] = React.useState();
  /* use effect for get the data in the localstorage */
  React.useEffect(() => {
    const flightData = localStorage.getItem("flightssave");
    setDisplayCardTrip(JSON.parse(flightData));
  }, []);

  /* use effect for get the data in the localstorage */

  React.useEffect(() => {
    const hotelData = localStorage.getItem("hotelsave");
    setDisplayCardHotels(JSON.parse(hotelData));
  }, []);

  return displayCardTrip ? (
    <div className="container-recap">
      <p className="title-voyage">
        Mon voyage à{" "}
        <span className="landing">{displayCardTrip[0].cityTo}</span>
      </p>
      <div className="container-flight">
        {/* it's for display the localstorage data */}
        {displayCardTrip.map((flight) => (
          <DisplaySaveFlight key={flight.id} flight={flight} />
        ))}
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
  ) : null;
}
