import React from "react";

import Layout from "../components/Layout";
import FindFlight from "../components/FindFlight";
import SelectDate from "../components/SelectDate";
import Calendar from "../components/Calendar";
import EmailSignUp from "../components/EmailSignUp";

import BahamasBeach from "../images/bahamas-beach.jpg";
import Paris from "../images/paris.jpg";
import EmailSignup from "../components/EmailSignUp";

const Home = () => {
  return (
    <Layout>
      <section className="hero">
        <div className="container py-7">
          <h1 className="hero-title">Book With Us And Enjoy Your Journey!</h1>
          <FindFlight />
        </div>
      </section>

      <section className="offer my-6">
        <div className="container">
          <div className="row">
            <div>
              <img
                className="offer-image img-fluid"
                src={BahamasBeach}
                alt="beach of bahamas"
              />
            </div>
            <div className="offer-text_wrapper">
              <p className="offer-text_orange">EXCLUSIVE OFFER</p>
              <h2>Take the best offer and enjoy in bahamas</h2>
              <p className="offer-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                eros ante, hendrerit a mollis eget, mattis sit amet elit. Etiam
                a iaculis ex. Donec eu libero non nunc scelerisque vestibulum.
                Nam quis diam sed augue sollicitudin rutrum. Morbi dapibus, odio
                non interdum lobortis, leo metus feugiat erat, in ornare ante
                nisl eget lectus. Curabitur sit amet turpis vitae nisi tristique
                tristique nec id lacus. Praesent eros erat, commodo sed metus
                dignissim, convallis fringilla tortor. Vivamus varius, ligula a
                aliquam mattis, mauris nisi porta diam, a fermentum ipsum tortor
                nec arcu. Nulla porta bibendum arcu id suscipit.
              </p>
              <p className="offer-date">3 days / 4 nights</p>
              <div class="d-flex">
                <a className="btn btn-orange" href="#">
                  Book Now
                </a>
                <p className="offer-price">$3500</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container newsletter py-5 my-6">
        <h3 className="newsletter-title">Sign up to our Newsletter</h3>
        <p>Get the latest news by signing up for our news letter.</p>
        <EmailSignup />
      </div>

      <section className="offer my-6">
        <div className="container">
          <div className="row">
            <div>
              <img className="offer-image img-fluid" src={Paris} alt="paris" />
            </div>
            <div className="offer-text_wrapper">
              <p className="offer-text_orange">EXCLUSIVE OFFER</p>
              <h2>Take the best offer and enjoy in Paris</h2>
              <p className="offer-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                eros ante, hendrerit a mollis eget, mattis sit amet elit. Etiam
                a iaculis ex. Donec eu libero non nunc scelerisque vestibulum.
                Nam quis diam sed augue sollicitudin rutrum. Morbi dapibus, odio
                non interdum lobortis, leo metus feugiat erat, in ornare ante
                nisl eget lectus. Curabitur sit amet turpis vitae nisi tristique
                tristique nec id lacus. Praesent eros erat, commodo sed metus
                dignissim, convallis fringilla tortor. Vivamus varius, ligula a
                aliquam mattis, mauris nisi porta diam, a fermentum ipsum tortor
                nec arcu. Nulla porta bibendum arcu id suscipit.
              </p>
              <p className="offer-date">3 days / 4 nights</p>
              <div class="d-flex">
                <a className="btn btn-orange" href="#">
                  Book Now
                </a>
                <p className="offer-price">$3500</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
