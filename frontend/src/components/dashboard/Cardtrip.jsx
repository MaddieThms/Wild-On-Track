/* eslint-disable react/prop-types */
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function CardTrip({ city }) {
  /*   function for date extraction */
  const imageCity = city.city;

  const images = [
    "https://img.freepik.com/photos-gratuite/concept-voyage-points-repere_23-2149153256.jpg?w=1380&t=st=1668679306~exp=1668679906~hmac=3c099a03a240626a1ce3fab844f585fd65684e8da5703ad861e211670e227354",
    "https://www.autourdublog.fr/wp-content/uploads/2016/10/famous-buildings-round-the-world-travel-wallpaper.jpg",
    "https://img.freepik.com/photos-gratuite/plan-plan-jouet-blanc-vue-dessus_23-2148666303.jpg?w=2000",
    "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://www.cercledesvoyages.com/wp-content/webp-express/webp-images/uploads/2021/03/AdobeStock_69071777.jpeg.webp",
    "https://assets.afcdn.com/story/20190822/2020759_w944h530c1cx2250cy1514cxt0cyt0cxb4500cyb3027.webp",
    "https://www.tousapied.be//content/uploads/2020/10/lili-popper-lu15z1m_KfM-unsplash-1400x787.jpg",
    "https://storage.lebonguide.com/crop-1600x700/54/80/EABB676D-3E61-4B4A-B922-33965A278132.png",
    "https://i.notretemps.com/1400x787/smart/2022/06/02/vacances.jpg",
  ];

  const randomImage = Math.floor(Math.random() * images.length);
  const [urlImageCity, setUrlImageCity] = React.useState(images[randomImage]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "62a6e40615msh22f16898c2ba9cep1a5d8djsn6c6ec76ac11f",
      "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
    },
  };

  function getFetchData() {
    fetch(
      `https://bing-image-search1.p.rapidapi.com/images/search?q=${imageCity}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setUrlImageCity(response.value[0].contentUrl))
      .catch((err) => console.error(err));
  }

  React.useEffect(() => {
    getFetchData();
  }, [urlImageCity]);

  return (
    urlImageCity && (
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
          alt={imageCity ? `image ${imageCity}` : "image"}
        />
        <CardContent>
          <Typography variant="h5" sx={{ color: "#eaa226" }}>
            {city.city}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share" />
        </CardActions>
      </Card>
    )
  );
}
