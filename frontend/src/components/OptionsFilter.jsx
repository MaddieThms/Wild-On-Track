import React from "react";
import "./OptionsFilter.css";
import { NavLink } from "react-router-dom";

function OptionsFilter() {
  return (
    <>
      <h2>Mets en favoris ton vol :</h2>
      <p>
        <NavLink to="/nouveau-voyage">Modifier mes filtres</NavLink>
      </p>
    </>
  );
}

export default OptionsFilter;
