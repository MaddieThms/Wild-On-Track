import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

function CurrentTrip() {
  const lastTrip = JSON.parse(localStorage.getItem("favorites"));
  const indexCurrentTrip = lastTrip.length - 1;

  const arrayTrip = JSON.parse(localStorage.getItem("favorites"));
  const arrayCurrentTrip = arrayTrip[indexCurrentTrip];

  const imageCity = arrayCurrentTrip.city;

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
      "X-RapidAPI-Key": "5fe208d44dmsh69bf3aada22853ep1e4a3bjsn70ba3b445000",
      "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
    },
  };

  function getFetchData() {
    fetch(
      `https://bing-image-search1.p.rapidapi.com/images/search?q=ville ${imageCity}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setUrlImageCity(response.value[0].contentUrl))
      .catch((err) => console.error(err));
  }

  React.useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div className="lastTrip">
      <h2 style={{ fontSize: "1.5rem", color: "#40a798" }}>
        Mon dernier voyage enregistr?? :
      </h2>
      <Card
        sx={{
          width: "90vw",
          maxWidth: "500px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "20px",
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image={urlImageCity}
          alt={
            arrayCurrentTrip.imageCity
              ? `image ${arrayCurrentTrip.imageCity}`
              : "image"
          }
        />
        <CardContent>
          <Typography variant="h5" sx={{ color: "#eaa226" }}>
            {arrayCurrentTrip.city}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share" />
        </CardActions>
      </Card>
    </div>
  );
}

export default CurrentTrip;
