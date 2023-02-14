import React from "react";
import "./Nav.css";
import pig from "../images/pigFace.png";

export default function Nav() {
  return (
    <div className="nav--main">
      <ul className="nav--icons">
        <li>
          <img className="nav--logo" src={pig} alt="Pigs for Peace" />
        </li>
        <li className="nav--group">
          <p className="nav--icon">about</p>
          <p className="nav--icon">pigs</p>
          <p className="nav--icon">contact</p>
          <p className="nav--icon">gallery</p>
        </li>
      </ul>
    </div>
  );
}
