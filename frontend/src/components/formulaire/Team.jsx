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
      <div>
        <a
          href="https://www.linkedin.com/in/jgaronian/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="circle" src={teamJohn} alt="John" />
        </a>
        <p>Jonathan</p>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/iris-succi-70923822a/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="circle" src={teamIris} alt="Iris" />
        </a>
        <p>Iris</p>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/arnaud-champetier-030b0797/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="circle" src={teamArnaud} alt="Arnaud" />
        </a>
        <p>Arnaud</p>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/ryan-beaujot-537062251/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="circle" src={teamRyan} alt="Ryan" />
        </a>
        <p>Ryan</p>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/madeline-t/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="circle" src={teamMadeline} alt="Madeline" />
        </a>
        <p>Madeline</p>
      </div>
    </div>
  );
}

export default Team;
