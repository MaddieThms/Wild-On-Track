import React from "react";
import Button from "@mui/material/Button";
import "./BtnsHome.css";
import { Link } from "react-router-dom";

export default function Btnstrip() {
  return (
    <div className="ContainerBtnstrip">
      <Button className="Btnstrip1" variant="contained">
        <Link to="/nouveau-voyage">Créer ton voyage</Link>
      </Button>
      <Button className="Btnstrip2" variant="contained">
        <Link to="/mes-carnets">Mes carnets de voyage</Link>
      </Button>
    </div>
  );
}
