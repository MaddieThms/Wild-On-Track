/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
/* import React from "react"; */
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import StarRateIcon from "@mui/icons-material/StarRate";

export default function Hotel({ hotel }) {
  const [isFavorite, setIsFavorite] = useState(false);

  /* function to put favorite hotel in local storage */
  function saveHotels(hotelssave) {
    localStorage.setItem("hotelssave", JSON.stringify(hotelssave));
  }

  function getHotels() {
    let hotelssave = localStorage.getItem("hotelssave");
    if (hotelssave == null) {
      return [];
    }
    return JSON.parse(hotelssave);
  }

  function addHotel(hotelAdd) {
    // eslint-disable-next-line prefer-const
    let favoriteHotels = getHotels();
    favoriteHotels.push(hotelAdd);
    saveHotels(favoriteHotels);
  }

  /* function to remove favorite hotel from local storage */
  function removeSaveFlight(hotelsave) {
    let favoriteHotels = getHotels();
    favoriteHotels = favoriteHotels.filter((h) => h.id != hotelsave.id);
    localStorage.removeItem("hotelssave", hotelsave);
    saveHotels(favoriteHotels);
  }
  /* function to execute functions put and remove favorite hotel in local storage depend on const isfavorite is true or false */
  function handleFavorite() {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      addHotel(hotel);
    } else {
      removeSaveFlight(hotel);
    }
  }

  return (
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
          hotel.photo?.images?.medium
            ? hotel.photo.images.medium.url
            : "https://img.freepik.com/vecteurs-premium/fond-batiment-hotel-plat_23-2148146118.jpg?w=826"
        }
        alt={hotel.name}
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
          {hotel.name}
        </Typography>
        <Typography variant="p" color="#40a798" sx={{ fontSize: "1em" }}>
          Price : {hotel.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <StarRateIcon
          defaultValue={hotel}
          onClick={() => handleFavorite()}
          sx={isFavorite ? { color: "#eaa226" } : { color: "#d1d1d1" }}
        />
      </CardActions>
    </Card>
  );
}
