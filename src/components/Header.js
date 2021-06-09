import React from "react";
import { useState } from "react";
import { Link, Location, useLocation } from "react-router-dom";

import LogoBlack from "../images/logo-black.png";

const Header = (props) => {
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = (e) => setMobileMenu(!mobileMenu);
  return (
    <header className="container">
      <nav>
        <Link to="">
          <img className="header-logo" src={LogoBlack} alt="logo" />
        </Link>

        <ul className={"nav-link-list " + (mobileMenu ? "open" : "")}>
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="#">About Us</Link>
          </li>
          <li className="nav-link">
            <Link to="#">Sign in</Link>
          </li>
          <li className="nav-link">
            <Link className="btn btn-blue" to="#">
              Register
            </Link>
          </li>
        </ul>
      </nav>

      {/*Mobile Menu Utilities*/}
      <div id="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        id="close-menu"
        className={mobileMenu ? "open" : ""}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
      </div>
      <a href="#" id={mobileMenu ? "overlay" : ""} onClick={toggleMenu}></a>
    </header>
  );
};

export default Header;
