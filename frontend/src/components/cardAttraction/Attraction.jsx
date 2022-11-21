/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import StarRateIcon from "@mui/icons-material/StarRate";

export default function Attraction({ attraction }) {
  const [isFavorite, setIsFavorite] = useState(false);

  /* function to execute functions put and remove favorite restaurant in local storage depend on const isfavorite is true or false */
  function handleFavorite() {
    setIsFavorite(!isFavorite);
    // je vais chercher les favoris dans mon local storage
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    // je verifie si un favori correspond à ma ville où se trouve l'hôtel
    let travel = favorites.find(
      (element) => element.city === attraction.ranking_geo
    );
    // si ce n'est pas le cas, je le créé
    if (!isFavorite) {
      if (travel === undefined) {
        travel = {
          city: attraction.ranking_geo,
          flights: [],
          hotels: [],
          restaurants: [],
          attractions: [],
        };
        favorites.push(travel);
      }
      // j'ajoute mon hôtel
      travel.attractions.push(attraction);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      // Si mon hôtel existe dans mes favoris je veux récupérer son index
      if (travel !== undefined) {
        // eslint-disable-next-line prefer-const
        let restaurantIndex = travel.hotels.findIndex(
          (element) => element === attraction.id
        );
        // Je veux supprimer cet hôtel selon son index
        travel.hotels.splice(restaurantIndex, 1);
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
          attraction.photo?.images?.medium
            ? attraction.photo.images.medium.url
            : "https://www.pexels.com/fr-fr/photo/statue-de-la-liberte-290386/"
        }
        alt={attraction.name}
      />
      <CardContent>
        <Typography variant="h5" sx={{ color: "#eaa226" }}>
          {attraction.name}
        </Typography>
        <div>Nombre d'avis :</div>
        <Typography variant="p" color="#40a798">
          {attraction.num_reviews}
        </Typography>
        <div>Description :</div>
        <Typography variant="p" color="#40a798">
          {attraction.description}
        </Typography>
        <div>Adresse :</div>
        <Typography variant="p" color="#40a798">
          {attraction.address}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <StarRateIcon
          onClick={() => handleFavorite()}
          sx={isFavorite ? { color: "#eaa226" } : { color: "#d1d1d1" }}
        />
      </CardActions>
    </Card>
  );
}
