import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export const NavBar = () => {
  return (
    <ul className="header">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dvd shop">Dvd shop</Link>
      </li>
    </ul>
  );
};
