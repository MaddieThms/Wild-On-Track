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

function displaySaveHotel({ hotel }) {
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
      (element) => element.city === deleteHotelWord(hotel.autobroaden_label)
    );
    // si ce n'est pas le cas, je le créé
    if (!isFavorite) {
      if (travel === undefined) {
        travel = {
          city: deleteHotelWord(hotel.autobroaden_label),
          flights: [],
          hotels: [],
        };
        favorites.push(travel);
      }
      // j'ajoute mon hôtel
      travel.hotels.push(hotel);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      // Si mon hôtel existe dans mes favoris je veux récupérer son index
      if (travel !== undefined) {
        let hotelIndex = travel.hotels.findIndex(
          (element) => element === hotel.id
        );
        // Je veux supprimer cet hôtel selon son index
        travel.hotels.splice(hotelIndex, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }
  return isFavorite ? (
    <Card
      elevation={0}
      sx={{
        width: "90vw",
        maxWidth: "350px",
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
          <StarRateIcon
            onClick={() => handleFavorite()}
            sx={isFavorite ? { color: "#eaa226" } : { color: "#d1d1d1" }}
          />
        </IconButton>
      </CardActions>
    </Card>
  ) : null;
}

export default displaySaveHotel;
