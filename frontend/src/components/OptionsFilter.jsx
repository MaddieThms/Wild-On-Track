import React from "react";
import "./OptionsFilter.css";
import { Link } from "react-router-dom";

function OptionsFilter() {
  return (
    <>
      <h2>Mets en favoris tes XXXX :</h2>
      <p>
        <Link to="/nouveau-voyage">Modifier mes filtres</Link>
      </p>
    </>
  );
}

export default OptionsFilter;
