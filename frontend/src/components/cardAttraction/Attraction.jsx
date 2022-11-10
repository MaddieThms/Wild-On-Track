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

export default function Attraction({ attraction }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <Card elevation={0} sx={{ maxWidth: "90vw", border: "1px solid #eaa226" }}>
      <CardMedia
        component="img"
        height="194"
        image="https://cf.bstatic.com/xdata/images/hotel/max1280x900/251678680.jpg?k=0bd689b4ef444751b830a08d8fb09191eea5e85fc6472dc234807fc85d5b268f&o=&hp=1"
        alt="nameimagehotel"
      />
      <CardContent>
        <Typography variant="h5" sx={{ color: "#eaa226" }}>
          Name : {attraction.name}
        </Typography>
        <Typography variant="p" color="#40a798">
          Reviews : {attraction.num_reviews}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <StarRateIcon
          onClick={() => handleFavorite()}
          sx={isFavorite ? { color: "#eaa226" } : { color: "#d1d1d1" }}
        />
      </CardActions>
    </Card>
  );
}
