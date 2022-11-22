/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import FavoritCardTrip from "@components/dashboard/FavoritCardTrip";
import React from "react";
import FavoritPhotoRyan from "../assets/EGYPTE.jpg";
import FavoritPhotoArnaud from "../assets/Colombia.jpg";
import FavoritPhotoMadeline from "../assets/NewZ.png";
import FavoritPhotoIris from "../assets/BALI.jpg";
import FavoritPhotoJohn from "../assets/BOLIVIA_SALAR_UYUNI.jpg";
import SearchBar from "../components/SearchBar";
import "./CreateTravel.css";
import teamRyan from "../components/formulaire/teamRyan.png";
import teamIris from "../components/formulaire/teamIris.png";
import teamJohn from "../components/formulaire/teamJohn.png";
import teamMadeline from "../components/formulaire/teamMadeline.png";
import teamArnaud from "../components/formulaire/teamArnaud.png";

function CreateTravel({
  dataHotels,
  setDataHotels,
  dataFlights,
  setDataFlights,
  departure,
  setDeparture,
  landing,
  setLanding,
  dataAttractions,
  setDataAttractions,
  setDataRestaurants,
  dataRestaurants,
}) {
  const teams = [
    {
      id: 1,
      name: "Ryan",
      photo: teamRyan,
      photoFavorite: FavoritPhotoRyan,
      title: "l'Egypte",
    },
    {
      id: 2,
      name: "Iris",
      photo: teamIris,
      photoFavorite: FavoritPhotoIris,
      title: "Bali",
    },
    {
      id: 5,
      name: "Arnaud",
      photo: teamArnaud,
      photoFavorite: FavoritPhotoArnaud,
      title: "la Colombie",
    },
    {
      id: 4,
      name: "Madeline",
      photo: teamMadeline,
      photoFavorite: FavoritPhotoMadeline,
      title: "la Nouvelle-Zélande",
    },
    {
      id: 3,
      name: "John",
      photo: teamJohn,
      photoFavorite: FavoritPhotoJohn,
      title: "la Bolivie",
    },
  ];

  return (
    <div className="travelSearch">
      <h1 className="title-created">Crée ton voyage </h1>
      <SearchBar
        dataHotels={dataHotels}
        setDataHotels={setDataHotels}
        dataFlights={dataFlights}
        setDataFlights={setDataFlights}
        setDataRestaurants={setDataRestaurants}
        dataRestaurants={dataRestaurants}
        departure={departure}
        setDeparture={setDeparture}
        landing={landing}
        setLanding={setLanding}
        dataAttractions={dataAttractions}
        setDataAttractions={setDataAttractions}
      />
      <br />
      <br />
      <h2 style={{ fontSize: "1.7rem", color: "#40a798" }}>
        En panne d'idée pour vos prochaines vacances ?
      </h2>
      <br />
      <div classeName="favoriteCards">
        {teams.map((team) => (
          <FavoritCardTrip key={team.id} team={{ team }} />
        ))}
      </div>
    </div>
  );
}

export default CreateTravel;
