/* eslint-disable prefer-const */
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import ShareIcon from "@mui/icons-material/Share";
import React from "react";
import "../cardHotel/displaysavehotel.css";

function displaySaveRestaurant({ restaurant }) {
  const [isFavorite, setIsFavorite] = React.useState(true);
  /* function to get the hotel's city */
  function deleteHotelWord(string) {
    return string.replace(" Hotels", "");
  }
  function handleFavorite() {
    setIsFavorite(!isFavorite);
    // je vais chercher les favoris dans mon local storage
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    // je verifie si un favori correspond à ma ville où se trouve l'hôtel
    let travel = favorites.find(
      (element) =>
        element.city === deleteHotelWord(restaurant.autobroaden_label)
    );
    // si ce n'est pas le cas, je le créé
    if (!isFavorite) {
      if (travel === undefined) {
        travel = {
          city: deleteHotelWord(restaurant.autobroaden_label),
          flights: [],
          hotels: [],
        };
        favorites.push(travel);
      }
      // j'ajoute mon hôtel
      travel.restaurants.push(restaurant);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      // Si mon hôtel existe dans mes favoris je veux récupérer son index
      if (travel !== undefined) {
        let hotelIndex = travel.restaurants.findIndex(
          (element) => element === restaurant.id
        );
        // Je veux supprimer cet hôtel selon son index
        travel.restaurants.splice(hotelIndex, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }
  return isFavorite ? (
    <div className="cardhotelfavorite">
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
              : "https://img.freepik.com/vecteurs-premium/fond-batiment-hotel-plat_23-2148146118.jpg?w=826"
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
            Price : {restaurant.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon />
            <StarRateIcon
              onClick={() => handleFavorite()}
              sx={isFavorite ? { color: "#eaa226" } : { color: "#d1d1d1" }}
            />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  ) : null;
}

export default displaySaveRestaurant;
