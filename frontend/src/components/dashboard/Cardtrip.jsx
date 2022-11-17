/* eslint-disable react/prop-types */
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";

export default function CardTrip({ city }) {
  /*   function for date extraction */
  const [urlImageCity, setUrlImageCity] = React.useState("");
  const imageCity = city.city;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "62a6e40615msh22f16898c2ba9cep1a5d8djsn6c6ec76ac11f",
      "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
    },
  };

  async function getFetchData() {
    await fetch(
      `https://bing-image-search1.p.rapidapi.com/images/search?q=${imageCity}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setUrlImageCity(response.value[0].contentUrl))
      .catch((err) => console.error(err));
  }

  React.useEffect(() => {
    getFetchData();
  }, [CardMedia]);

  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: "90vw",
        boxShadow: "rgba(	100,100,111, 0.5) 0px 7px 29px 0px",
        borderRadius: "20px",
        mb: 3,
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={urlImageCity}
        alt={imageCity != null ? `image ${imageCity}` : getFetchData()}
      />
      <CardContent>
        <Typography variant="h5" sx={{ color: "#eaa226" }}>
          {city.city}
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
