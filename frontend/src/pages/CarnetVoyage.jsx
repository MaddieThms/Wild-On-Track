import React from "react";
import Budget from "../components/Budget";
import PictureResumeTrip from "../components/PictureResumeTrip";
import PageTitle from "../components/pagetitle/PageTitle";
import DataNote from "../components/DataNote";
import Footer from "../components/Footer";

export default function CarnetVoyage() {
  return (
    <div>
      <PageTitle />
      <PictureResumeTrip />
      <Budget />
      <DataNote />
      <Footer />
    </div>
  );
}
