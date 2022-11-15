/* eslint-disable import/no-unresolved */
/* eslint-disable react/require-default-props */
import React from "react";
import DisplaySaveFlight from "@components/dashboard/DisplaySaveFlight";
import DisplaySaveHotel from "@components/dashboard/DisplaySaveHotel";
import "./carnetVoyage.css";
import Footer from "../components/Footer";

export default function CarnetVoyage() {
  /* Use state for stock data in the localstorage */
  const [displayCardTrip, setDisplayCardTrip] = React.useState();
  // const [displayCardHotels, setDisplayCardHotels] = React.useState();
  /* use effect for get the data in the localstorage */
  React.useEffect(() => {
    const cardData = localStorage.getItem("flightssave", "hotelssave");
    setDisplayCardTrip(JSON.parse(cardData));
  }, []);

  /* use effect for get the data in the localstorage */

  // React.useEffect(() => {
  //   const hotelData = localStorage.getItem("hotelssave");
  //   setDisplayCardHotels(JSON.parse(hotelData));
  // }, []);

  return displayCardTrip ? (
    <div className="container-recap">
      {/* <p className="title-voyage">
        Mon voyage à{" "}
        <span className="landing">{displayCardTrip[0].cityTo}</span>
      </p> */}
      <div className="container-flight">
        {/* it's for display the localstorage data */}
        {displayCardTrip.map((flight) => (
          <DisplaySaveFlight key={flight.id} flight={flight} />
        ))}
        {displayCardTrip.map((hotel) => (
          <DisplaySaveHotel key={hotel.id} hotel={hotel} />
        ))}
      </div>
      <Footer />
    </div>
  ) : null;
}
