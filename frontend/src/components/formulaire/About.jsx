import React from "react";
import Team from "./Team";
import "./Formulaire.css";

function About() {
  return (
    <div className="container-about">
      <p className="message-about">
        Site réalisé pour le projet 2 de notre formation, fait par Madeline,
        Jonathan, Iris, Arnaud et Ryan. Étudiants à la Wild Code School de Lyon.
      </p>
      <Team />
    </div>
  );
}

export default About;
