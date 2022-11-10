import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateTravel from "./pages/CreateTravel";
import FlightPage from "./pages/FlightPage";
import Contact from "./pages/Contact";
import MesCarnets from "./pages/MesCarnets";
import MesHotels from "./pages/MesHotels";
import CarnetVoyage from "./pages/CarnetVoyage";
import Home from "./pages/Home";
import MesRestaurants from "./pages/MesRestaurants";

function App() {
  const [dataFlights, setDataFlights] = useState([]);
  const [dataHotels, setDataHotels] = useState([]);
  const [dataRestaurants, setDataRestaurants] = useState([]);
  const [departure, setDeparture] = useState("");
  const [landing, setLanding] = useState("");
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="nouveau-voyage"
          element={
            <CreateTravel
              dataFlights={dataFlights}
              setDataFlights={setDataFlights}
              departure={departure}
              setDeparture={setDeparture}
              landing={landing}
              setLanding={setLanding}
              dataHotels={dataHotels}
              setDataHotels={setDataHotels}
              setDataRestaurants={setDataRestaurants}
              dataRestaurants={dataRestaurants}
            />
          }
        />
        <Route
          path="/flights"
          element={
            <FlightPage
              dataFlights={dataFlights}
              setDataFlights={setDataFlights}
              departure={departure}
              setDeparture={setDeparture}
              landing={landing}
              setLanding={setLanding}
            />
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route path="mes-carnets" element={<MesCarnets />} />
        <Route
          path="nouveau-voyage/hotels"
          element={
            <MesHotels
              departure={departure}
              landing={landing}
              setLanding={setLanding}
              dataHotels={dataHotels}
              setDataHotels={setDataHotels}
            />
          }
        />
        <Route
          path="nouveau-voyage/restaurants"
          element={
            <MesRestaurants
              departure={departure}
              landing={landing}
              setLanding={setLanding}
              dataRestaurants={dataRestaurants}
              setDataRestaurants={setDataRestaurants}
            />
          }
        />
        <Route path="mes-carnets/carnetvoyage" element={<CarnetVoyage />} />
      </Routes>
    </div>
  );
}

export default App;
