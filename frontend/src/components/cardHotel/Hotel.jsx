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
import "./Hotels.css";

export default function Hotel({ hotel }) {
  const [isFavorite, setIsFavorite] = useState(false);

  /* function to get the hotel's city */
  function deleteHotelWord(string) {
    return string.replace(" Hotels", "");
  }
  /* function to execute functions put and remove favorite hotel in local storage depend on const isfavorite is true or false */
  function handleFavorite() {
    setIsFavorite(!isFavorite);
    // je vais chercher les favoris dans mon local storage
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    // je verifie si un favori correspond à ma ville où se trouve l'hôtel
    let travel = favorites.find(
      (element) => element.city === deleteHotelWord(hotel.autobroaden_label)
    );
    // si ce n'est pas le cas, je le créé
    if (!isFavorite) {
      if (travel === undefined) {
        travel = {
          city: deleteHotelWord(hotel.autobroaden_label),
          flights: [],
          hotels: [],
          restaurants: [],
          attractions: [],
        };
        favorites.push(travel);
      }
      // j'ajoute mon hôtel
      travel.hotels.push(hotel);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      // Si mon hôtel existe dans mes favoris je veux récupérer son index
      if (travel != undefined) {
        let hotelIndex = travel.hotels.findIndex(
          (element) => element == hotel.id
        );
        // Je veux supprimer cet hôtel selon son index
        travel.hotels.splice(hotelIndex, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
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
