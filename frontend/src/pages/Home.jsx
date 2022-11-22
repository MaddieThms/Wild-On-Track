import "./Home.css";
import "../App.css";
import { useEffect, useState } from "react";
// eslint-disable-next-line import/order, no-unused-vars
import DarkModeIcon from "@mui/icons-material/DarkMode";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Btnstrip from "../components/BtnsHome";

export default function Home() {
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
    <div>
      <div className={`App ${theme}`}>
        <div className="home">
          <FormGroup>
            <FormControlLabel
              type="button"
              onClick={toggleTheme}
              control={<Switch defaultChecked />}
              sx={{
                marginLeft: "85vw",
                marginTop: "20vw",
              }}
            />
          </FormGroup>
          <div className="titles">
            <h1 className="title">Créé ton propre carnet de voyage</h1>
            <h2 className="little-title">
              Fais naître le voyage de tes rêves ! <br />
              Bâtis une expérience inoubliable
            </h2>
            <div className="voyage" />
          </div>
          <Btnstrip />
        </div>
      </div>
    </div>
  );
}
