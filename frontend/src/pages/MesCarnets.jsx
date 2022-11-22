/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
/* eslint-disable import/no-named-as-default */
import React from "react";
import MyTrips from "../components/dashboard/MyTrips";
import { useEffect, useState } from "react";

import "./MesCarnets.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function MesCarnets() {
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
      <FormGroup>
        <FormControlLabel
          type="button"
          onClick={toggleTheme}
          control={<Switch defaultChecked />}
          sx={{ marginLeft: "85vw", marginTop: "20vw" }}
        />
      </FormGroup>
      <div className="differentstitles">
        <h2 className="titlemescarnets">Mes carnets de voyage</h2>
      </div>
      <div className="mesCarnetsCards">
        <MyTrips />
      </div>
    </div>
  );
}

export default MesCarnets;
