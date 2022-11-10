/* eslint-disable react/self-closing-comp */
import React from "react";
import "./loader.css";

export default function Loader() {
  return (
    <div className="loader fade-in-image">
      <img
        src="./src/components/loader/loading-plane.gif"
        alt=""
        width="100px"
        height="100px"
      ></img>
    </div>
  );
}
