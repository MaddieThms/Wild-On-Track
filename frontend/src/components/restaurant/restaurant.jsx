/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import StarRateIcon from "@mui/icons-material/StarRate";

export default function Restaurant({ restaurant }) {
  const [isFavorite, setIsFavorite] = useState(false);

  /* function to put favorite restaurant in local storage */
  function saveRestaurants(restaurantsave) {
    localStorage.setItem(
      restaurant.ranking_geo,
      JSON.stringify(restaurantsave)
    );
  }
  /* function to remove favorite restaurant from local storage */
  function removeSaveRestaurant(restaurantsave) {
    localStorage.removeItem(restaurant.ranking_geo, restaurantsave);
  }
  /* function to execute functions put and remove favorite restaurant in local storage depend on const isfavorite is true or false */
  function handleFavorite() {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      saveRestaurants(restaurant);
    } else {
      removeSaveRestaurant(restaurant);
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
          restaurant.photo?.images?.medium
            ? restaurant.photo.images.medium.url
            : "https://www.outlookindia.com/outlooktraveller//public/uploads/2017/07/OSIX-Co-MOSAIC-Random-1.jpg"
        }
        alt={restaurant.name}
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
          {restaurant.name}
        </Typography>
        <Typography variant="p" color="#40a798" sx={{ fontSize: "1em" }}>
          Phone : {restaurant.phone}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <StarRateIcon
          defaultValue={restaurant}
          onClick={() => handleFavorite()}
          sx={isFavorite ? { color: "#eaa226" } : { color: "#d1d1d1" }}
        />
      </CardActions>
    </Card>
  );
}
