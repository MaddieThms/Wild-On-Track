import React from "react";
import "../components/formulaire/Formulaire.css";
import About from "../components/formulaire/About";
import Form from "../components/formulaire/Form";

function Contact() {
  return (
    <div>
      <h2 className="title-contact">Contact</h2>
      <div className="container-contact">
        <div className="container-title-form">
          <p className="message-contact">Un petit message pour plus info</p>
          <Form />
        </div>
        <About />
      </div>
    </div>
  );
}

export default Contact;
