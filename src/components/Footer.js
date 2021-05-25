import React from "react";
import { Link } from "react-router-dom";
import LogoBlack from "../images/logo-black.png";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="row justify-content-around">
        <div className="footer-link_list">
          <img src={LogoBlack} alt="logo" />
          <p>info@traveler.co</p>
          <p>(564) 345-0987</p>
        </div>
        <div className="footer-link_list">
          <p>
            <strong>Services</strong>
          </p>
          <a className="footer-link" href="#">
            Why Travelers.com
          </a>
          <a className="footer-link" href="#">
            Booking
          </a>
          <a className="footer-link" href="#">
            Popular Places
          </a>
          <a className="footer-link" href="#">
            Customer Stories
          </a>
        </div>
        <div className="footer-link_list">
          <p>
            <strong>Support & More</strong>
          </p>
          <a className="footer-link" href="#">
            Contact us
          </a>
          <a className="footer-link" href="#">
            Help & Support
          </a>
          <a className="footer-link" href="#">
            Services & Pricing
          </a>
          <a className="footer-link" href="#">
            Affiliates
          </a>
          <a className="footer-link" href="">
            Plan & Pricing
          </a>
        </div>
        <div className="footer-link_list">
          <p>
            <strong>Our Address</strong>
          </p>
          <p>4517 Washington Ave.</p>
          <p>Manchester, Kentucky 39495</p>
        </div>
      </div>
      <div className="row">
        <div>Copyright {new Date().getFullYear()} All right reserved</div>
        <div>
          <p>Help</p>
          <p>Term & Condition</p>
          <p>Privacy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
