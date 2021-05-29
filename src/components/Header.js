import React from "react";
import { useState } from "react";
import { Link, Location, useLocation } from "react-router-dom";

import LogoWhite from "../images/logo-white.png";
import LogoBlack from "../images/logo-black.png";

const Header = (props) => {
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = (e) => setMobileMenu(!mobileMenu);
  return (
    <header className="container header">
      {location.pathname === "/" ? (
        <nav>
          <Link to="">
            <img className="header-logo" src={LogoWhite} alt="logo" />
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
      ) : (
        <nav>
          <Link to="/">
            <img className="header-logo" src={LogoBlack} alt="logo" />
          </Link>

          <ul className={"nav-link-list " + (mobileMenu ? "open" : "")}>
            <li className="nav-link_black">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link_black">
              <Link to="#">About Us</Link>
            </li>
            <li className="nav-link_black">
              <Link to="#">Sign in</Link>
            </li>
            <li className="nav-link">
              <Link className="btn btn-blue" to="#">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
