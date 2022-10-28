/* eslint-disable prettier/prettier */
import React from "react";
import Button from "@mui/material/Button";
import "./BtnsTrip.css";

function Btnstrip() {
  return (
    <div className="ContainerBtnstrip">
      <Button className="Btnstrip1" variant="contained">
        Créer ton voyage
      </Button>
      <Button className="Btnstrip2" variant="contained">
        Mes carnets de voyage
      </Button>
    </div>
  );
}

export default Btnstrip;
