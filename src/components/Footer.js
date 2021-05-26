import React from "react";
import { Link } from "react-router-dom";
import LogoBlack from "../images/logo-black.png";

const Footer = () => {
  return (
    <div className="container footer my-3">
      <div className="row justify-content-around">
        <div className="footer-item_list">
          <img src={LogoBlack} alt="logo" />
          <p className="footer-item">info@traveler.co</p>
          <p className="footer-item">(564) 345-0987</p>
        </div>
        <div className="footer-item_list">
          <p>
            <strong>Services</strong>
          </p>
          <a className="footer-item" href="#">
            Why Travelers.com
          </a>
          <a className="footer-item" href="#">
            Booking
          </a>
          <a className="footer-item" href="#">
            Popular Places
          </a>
          <a className="footer-item" href="#">
            Customer Stories
          </a>
        </div>
        <div className="footer-item_list">
          <p>
            <strong>Support & More</strong>
          </p>
          <a className="footer-item" href="#">
            Contact us
          </a>
          <a className="footer-item" href="#">
            Help & Support
          </a>
          <a className="footer-item" href="#">
            Services & Pricing
          </a>
          <a className="footer-item" href="#">
            Affiliates
          </a>
          <a className="footer-item" href="">
            Plan & Pricing
          </a>
        </div>
        <div className="footer-item_list">
          <p>
            <strong>Our Address</strong>
          </p>
          <p className="footer-item">4517 Washington Ave.</p>
          <p className="footer-item">Manchester, Kentucky 39495</p>
        </div>
      </div>
      <div className="row justify-content-around">
        <div>
          <p className="footer-item">
            Copyright {new Date().getFullYear()} All right reserved
          </p>
        </div>
        <div className="d-flex">
          <a className="footer-item" href="#">
            Help
          </a>
          <a className="footer-item" href="#">
            Term & Condition
          </a>
          <a className="footer-item" href="#">
            Privacy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
