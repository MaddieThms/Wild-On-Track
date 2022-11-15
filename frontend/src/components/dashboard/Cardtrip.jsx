/* eslint-disable react/prop-types */
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";

export default function CardTrip({ showCardTrip, keyNames }) {
  /*   function for date extraction */
  return (
    <Card
      elevation={0}
      sx={{ maxWidth: "90vw", border: "1px solid #eaa226" }}
      showCardTrip={showCardTrip}
    >
      <Link to="carnetvoyage">
        <CardMedia
          component="img"
          height="194"
          image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJpcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <CardContent>
          <Typography variant="h5" sx={{ color: "#eaa226" }}>
            {keyNames[0]}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Link>
    </Card>
  );
}
