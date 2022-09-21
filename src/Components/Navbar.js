import React from "react";
import "../styles/Navbar.css";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">Vallies Estate</div>
        <div>Home</div>
        <div>Rent</div>
        <div>Land</div>
        <div>Agent</div>
        <div>Contact us</div>
        <button className="started"> Get started</button>
        <hr />
      </div>
    </div>
  );
};

export default Navbar;
