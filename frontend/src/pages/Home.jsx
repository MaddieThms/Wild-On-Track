import "./Home.css";
import "../App.css";
// eslint-disable-next-line import/order, no-unused-vars
import * as React from "react";
import Btnstrip from "../components/BtnsHome";

// eslint-disable-next-line react/prop-types
export default function Home({ theme }) {
  return (
    <div>
      <div className={`App ${theme}`} />
      <div className="home">
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
  );
}
