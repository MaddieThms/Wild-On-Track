import React from "react";
import Button from "@mui/material/Button";
import "./BtnsHome.css";
import { NavLink } from "react-router-dom";

export default function Btnstrip() {
  return (
    <div className="ContainerBtnstrip">
      <Button className="Btnstrip1" variant="contained">
        <NavLink to="/nouveau-voyage">Créer ton voyage</NavLink>
      </Button>
      <Button className="Btnstrip2" variant="contained">
        <NavLink to="/mes-carnets">Mes carnets de voyage</NavLink>
      </Button>
    </div>
  );
}
