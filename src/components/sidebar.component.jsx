import { Link } from "react-router-dom";
import React from "react";

import "./sidebar.css";

export const Sidebar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About me</Link>
      <Link to="/contactus">Contact us</Link>
      <Link to="/movies">movies</Link>
      <Link to="/games">Games</Link>
    </>
  );
};
