import React from "react";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MesCarnets from "./pages/MesCarnets";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FlightPage from "./pages/FlightPage";
import BtnsHome from "./components/BtnsHome";
import MesHotels from "./pages/MesHotels";
import TitleResume from "./components/TitleResume";
import Budget from "./components/Budget";
import DataNote from "./components/DataNote";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <BtnsHome />
      <MesCarnets />
      <FlightPage />
      <MesHotels />
      <TitleResume />
      <Budget />
      <Contact />
      <Footer />
      <DataNote />
    </div>
  );
}

export default App;
