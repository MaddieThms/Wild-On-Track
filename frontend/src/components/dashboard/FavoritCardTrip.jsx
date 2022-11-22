/* eslint-disable react/prop-types */
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Stack } from "@mui/material";
import "@components/dashboard/favoritCardTrip.css";

export default function FavoritCardTrip({ team }) {
  return (
    <Stack direction="row">
      <img
        className="circleFavorite"
        src={team.team.photo}
        alt={team.team.name}
      />
      <Card
        sx={{
          width: "90vw",
          maxWidth: "500px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "20px",
        }}
      >
        <h2 className="titleCardFavorit">
          {team.team.name} vous propose {team.team.title}
        </h2>
        <CardMedia
          component="img"
          height="194"
          image={team.team.photoFavorite}
          alt="image"
        />
      </Card>
    </Stack>
  );
}
