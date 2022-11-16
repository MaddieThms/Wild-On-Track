/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/require-default-props */
import React from "react";
import DisplaySaveFlight from "@components/dashboard/DisplaySaveFlight";
import DisplaySaveHotel from "@components/cardHotel/DisplaySaveHotel";
import "./carnetVoyage.css";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

export default function CarnetVoyage() {
  const cityParam = useParams("city");
  /* Use state for stock data in the localstorage */
  const [displayCardTrip, setDisplayCardTrip] = React.useState();
  // const [displayCardHotels, setDisplayCardHotels] = React.useState();
  /* use effect for get the data in the localstorage */
  React.useEffect(() => {
    const cardData = localStorage.getItem("flightssave", "hotelssave");
    setDisplayCardTrip(JSON.parse(cardData));
  }, []);

  const datas = JSON.parse(localStorage.getItem("favorites"));

  const dataCity = datas.find((city) => city.city === cityParam.city);

  console.warn(dataCity);

  return (
    <div className="container-recap">
      <p className="title-voyage">
        Mon voyage à <span className="landing">{dataCity.city}</span>
      </p>

      <div className="container-flight">
        {/* it's for display the localstorage data */}
        {dataCity.flights
          ? dataCity.flights.map((flight) => (
              <DisplaySaveFlight flight={flight} />
            ))
          : null}
        {dataCity.hotels
          ? dataCity.hotels.map((hotel) => <DisplaySaveHotel hotel={hotel} />)
          : null}
      </div>
      <Footer />
    </div>
  );
}
