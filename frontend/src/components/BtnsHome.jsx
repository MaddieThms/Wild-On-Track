import React from "react";
import Button from "@mui/material/Button";
import "./BtnsHome.css";

export default function Btnstrip() {
  return (
    <div className="ContainerBtnstrip">
      <Button className="Btnstrip1" variant="contained">
        <a href="/nouveau-voyage">Créer ton voyage</a>
      </Button>
      <Button className="Btnstrip2" variant="contained">
        <a href="/mes-carnets">Mes carnets de voyage</a>
      </Button>
    </div>
  );
}
