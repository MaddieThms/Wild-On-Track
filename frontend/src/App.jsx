import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// eslint-disable-next-line import/no-named-as-default
import Navbar from "./components/Navbar";
import CreateTravel from "./pages/CreateTravel";
import FlightPage from "./pages/FlightPage";
import Contact from "./pages/Contact";
import MesCarnets from "./pages/MesCarnets";
import MesHotels from "./pages/MesHotels";
import CarnetVoyage from "./pages/CarnetVoyage";
import Home from "./pages/Home";
import MesAttractions from "./pages/MesAttractions";
import MesRestaurants from "./pages/MesRestaurants";

function App() {
  const [themeD, setThemeD] = useState(
    localStorage.getItem("themeD") || "light"
  );
  const toggleTheme = () => {
    if (themeD === "light") {
      setThemeD("dark");
    } else {
      setThemeD("light");
    }
  };
  useEffect(() => {
    document.body.className = themeD;
    localStorage.setItem("theme", themeD);
  }, [themeD]);
  const [dataFlights, setDataFlights] = useState([]);
  const [dataHotels, setDataHotels] = useState([]);
  const [dataRestaurants, setDataRestaurants] = useState([]);
  const [departure, setDeparture] = useState("");
  const [landing, setLanding] = useState("");
  const [dataAttractions, setDataAttractions] = useState([]);
  return (
    <div>
      <Navbar themeD={themeD} setThemeD={setThemeD} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home themeD={{ themeD }} />} />
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
              dataAttractions={dataAttractions}
              setDataAttractions={setDataAttractions}
              setDataRestaurants={setDataRestaurants}
              dataRestaurants={dataRestaurants}
              themeD={themeD}
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
        <Route path="contact" element={<Contact themeD={themeD} />} />
        <Route path="mes-carnets" element={<MesCarnets themeD={themeD} />} />
        <Route
          path="nouveau-voyage/hotels"
          element={
            <MesHotels
              departure={departure}
              landing={landing}
              setLanding={setLanding}
              dataHotels={dataHotels}
              setDataHotels={setDataHotels}
              themeD={themeD}
            />
          }
        />
        <Route
          path="nouveau-voyage/attractions"
          element={
            <MesAttractions
              departure={departure}
              landing={landing}
              setLanding={setLanding}
              dataAttractions={dataAttractions}
              setDataAttractions={setDataAttractions}
              themeD={themeD}
            />
          }
        />
        <Route
          path="mon-carnet-de-voyage"
          element={<CarnetVoyage themeD={themeD} />}
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
              themeD={themeD}
            />
          }
        />
        <Route
          path="carnetvoyage/:city"
          element={<CarnetVoyage themeD={themeD} />}
        />
      </Routes>
    </div>
  );
}

export default App;
