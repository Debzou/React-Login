import React from "react";
import { Link } from "react-router-dom";
import NavBarButtonEnd from "./NavBarButtonEnd";

// app navbar
const NavBar = () => {
  return (
    
    <nav id="navbar" className="navbar is-fixed-top is-dark" >
      <div
        className="navbar-burger burger"
        data-target="navbarExampleTransparentExample"
        id="navbarBurger"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar-menu" id="navbarExampleTransparentExample">
        <div className="navbar-start">
          <Link style={{}} className="navbar-item" to="/">
            Home
          </Link>
        </div>

        <div className="navbar-end" id="navend">
          <div className="navbar-item">
            {/* right button (signup/login or logout if you are already connected) */}
            <NavBarButtonEnd />
          </div>
        </div>
      </div>
    </nav>
    
  );
};

export default NavBar;
