import React from "react";
import Header from "./components/Header";
import "./App.css";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
