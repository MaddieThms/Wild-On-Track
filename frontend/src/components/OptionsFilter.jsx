import React from "react";
import "./OptionsFilter.css";
import { NavLink } from "react-router-dom";

function OptionsFilter() {
  return (
    <div>
      <p>
        <NavLink className="filter" to="/nouveau-voyage">
          Modifier mes filtres
        </NavLink>
      </p>
    </div>
  );
}

export default OptionsFilter;
