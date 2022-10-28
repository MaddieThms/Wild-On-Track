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
import CreateTravel from "./pages/CreateTravel";

function App() {
  return (
    <div className="App">
      <CreateTravel />
      <Header />
      <Home />
      <BtnsHome />
      <MesCarnets />
      <FlightPage />
      <MesHotels />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
