import React from "react";
import logo from "../images/logo.png";
import "../css/App.scss";

export default function Splash() {
  return (
    <div className={`splash abs abc`}>
      <img src={logo} className={`abs abc`} alt="myPhoto" />
    </div>
  );
}
