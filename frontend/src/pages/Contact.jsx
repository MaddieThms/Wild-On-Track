import React from "react";
import "../components/Formulaire.css";
import Footer from "../components/Footer";
import About from "../components/About";
import Form from "../components/Form";

function Contact() {
  return (
    <div className="container-contact">
      <h2 className="title-contact">Contact</h2>
      <p className="message-contact">Un petit message pour plus info</p>
      <Form />
      <About />
      <Footer />
    </div>
  );
}

export default Contact;
