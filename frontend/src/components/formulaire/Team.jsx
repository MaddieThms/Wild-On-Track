import React from "react";
import "./Formulaire.css";
import teamRyan from "./teamRyan.png";
import teamMadeline from "./teamMadeline.png";
import teamIris from "./teamIris.png";
import teamArnaud from "./teamArnaud.png";
import teamJohn from "./teamJohn.png";

function Team() {
  return (
    <div className="container-circle">
      <img className="circle" src={teamJohn} alt="John" />

      <img className="circle" src={teamIris} alt="Iris" />

      <img className="circle" src={teamArnaud} alt="Arnaud" />
      <img className="circle" src={teamRyan} alt="Ryan" />
      <img className="circle" src={teamMadeline} alt="Madeline" />
    </div>
  );
}

export default Team;
