/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import "../components/formulaire/Formulaire.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import About from "../components/formulaire/About";
import Form from "../components/formulaire/Form";
import "../App.css";

function Contact() {
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
      <div />
      <h2 className="title-contact">Contact</h2>
      <FormGroup>
        <FormControlLabel
          type="button"
          onClick={toggleTheme}
          control={<Switch defaultChecked />}
          sx={{ marginLeft: "85vw", marginTop: "5vw" }}
        />
      </FormGroup>
      <div className="container-contact">
        <div className="container-title-form">
          <p className="message-contact">Un petit message pour plus info</p>
          <Form />
        </div>
        <About />
      </div>
    </div>
  );
}

export default Contact;
