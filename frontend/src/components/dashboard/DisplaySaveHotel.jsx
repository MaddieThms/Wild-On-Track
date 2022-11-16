/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";

export default function Hotel({ hotel }) {
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
      </CardActions>
    </Card>
  );
}
