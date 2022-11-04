import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import FlightPage from "./pages/FlightPage";
import MesCarnets from "./pages/MesCarnets";
import Contact from "./pages/Contact";
import MesHotels from "./pages/MesHotels";
import CreateTravel from "./pages/CreateTravel";
import Navbar from "./components/Navbar";
import CarnetVoyage from "./pages/CarnetVoyage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="nouveau-voyage" element={<CreateTravel />} />
      <Route path="flights" element={<FlightPage />} />
      <Route path="contact" element={<Contact />} />
      <Route path="mes-carnets" element={<MesCarnets />} />
      <Route path="mes-hotels" element={<MesHotels />} />
      <Route path="mon-carnet-de-voyage" element={<CarnetVoyage />} />
    </Routes>
  </BrowserRouter>
);
