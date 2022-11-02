import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
