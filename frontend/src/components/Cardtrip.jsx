import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";

export default function CardTrip() {
  return (
    <Card elevation={0} sx={{ maxWidth: "90vw", border: "1px solid #eaa226" }}>
      <CardMedia
        component="img"
        height="194"
        image="https://cf.bstatic.com/xdata/images/hotel/max1280x900/202270562.jpg?k=9ed13226ff63e822c7e5f080d227c17061ef32aa8f8e43645f8825e12bff0c59&o=&hp=1"
        alt=""
      />
      <CardContent>
        <Typography variant="h5" sx={{ color: "#eaa226" }}>
          Bali 🤍
        </Typography>
        <Typography variant="p" color="text.secondary">
          10/06 - 10/07
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
