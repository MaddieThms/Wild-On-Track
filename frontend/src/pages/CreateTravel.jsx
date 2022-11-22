/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import FavoritCardTrip from "@components/dashboard/FavoritCardTrip";
// eslint-disable-next-line import/no-duplicates
import React, { useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FavoritPhotoRyan from "../assets/EGYPTE.jpg";
import FavoritPhotoArnaud from "../assets/Medellin_colombia.jpg";
import FavoritPhotoMadeline from "../assets/Tasman_Lake_NZ.jpg";
import FavoritPhotoIris from "../assets/BALI.jpg";
import FavoritPhotoJohn from "../assets/BOLIVIA_SALAR_UYUNI.jpg";
// eslint-disable-next-line import/no-duplicates

// eslint-disable-next-line import/order
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

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <div>
        <FormGroup>
          <FormControlLabel
            type="button"
            onClick={toggleTheme}
            control={<Switch defaultChecked />}
            sx={{ marginLeft: "85vw", marginTop: "20vw" }}
          />
        </FormGroup>
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
        <h2 className="title-idea" style={{ fontSize: "1.5rem" }}>
          En panne d'idée pour vos prochaines vacances !?
        </h2>
        <br />
        <div classeName="favoriteCards">
          {teams.map((team) => (
            <FavoritCardTrip key={team.id} team={{ team }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateTravel;
