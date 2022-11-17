/* eslint-disable react/self-closing-comp */
import React from "react";
import "./loader.css";
import loaderimg from "./loading-plane.gif";

export default function Loader() {
  return (
    <div className="loader fade-in-image">
      <img src={loaderimg} alt="Loader plane" />
    </div>
  );
}
