import React, { useState } from "react";
import porsche from "../assets/images/porsche.jpg";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Navbar from "../components/Navbar";

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <>

    <Navbar/>
      {/* <div className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Company Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/service">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gallery">
                    Vehicles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/client">
                    Client
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="call_text_main">
        <div className="container">
          <div className="call_taital">
            <div className="call_text">
              <Link to="/">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span className="padding_left_15">Location</span>
              </Link>
            </div>
            <div className="call_text">
              <Link to="/">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span className="padding_left_15">(+71) 8522369417</span>
              </Link>
            </div>
            <div className="call_text">
              <Link to="/">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span className="padding_left_15">demo@gmail.com</span>
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* About Section */}
      <div className="about_section layout_padding">
        <div className="container">
          <div className="about_section_2">
            <div className="row">
              <div className="col-md-6">
                <div className="image_iman">
                  <img src={porsche} className="about_img" alt="About Us" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="about_taital_box">
                  <h1 className="about_taital">
                    About <span style={{ color: "#fe5b29" }}>Us</span>
                  </h1>
                  <p className="about_text">
                    Our mission is to provide reliable vehicles and unmatched customer support that ensure your driving experience is safe, comfortable, and unforgettable. We are dedicated to continuous improvement and innovation to meet the evolving needs of our customers. Your satisfaction is our top priority, and we strive to exceed your expectations at every turn.
                  </p>
                  <div className="readmore_btn">
                    <Link to="/">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer_logo">
                <img src={logo} alt="Footer Logo" />
              </div>
            </div>
          </div>
          <div className="footer_section_2">
            <div className="row">
              <div className="col">
                <h4 className="footer_taital">Subscribe Now</h4>
                <p className="footer_text">
                  There are many variations of passages of Lorem Ipsum
                  available,
                </p>
                <div className="form-group">
                  <textarea
                    className="update_mail"
                    placeholder="Enter Your Email"
                    rows="1"
                    id="comment"
                    name="Enter Your Email"
                  ></textarea>
                  <div className="subscribe_bt">
                    <Link to="/">Subscribe</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <h4 className="footer_taital">Information</h4>
                <p className="lorem_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
              <div className="col">
                <h4 className="footer_taital">Helpful Links</h4>
                <p className="lorem_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
              <div className="col">
                <h4 className="footer_taital">Investments</h4>
                <p className="lorem_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
              <div className="col">
                <h4 className="footer_taital">Contact Us</h4>
                <div className="location_text">
                  <Link to="/">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span className="padding_left_15">Location</span>
                  </Link>
                </div>
                <div className="location_text">
                  <Link to="/">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span className="padding_left_15">(+71) 8522369417</span>
                  </Link>
                </div>
                <div className="location_text">
                  <Link to="/">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span className="padding_left_15">demo@gmail.com</span>
                  </Link>
                </div>
                <div className="social_icon">
                  <ul>
                    <li>
                      <Link to="/">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p className="copyright_text">
                 © 2025 YourCompanyName. All rights reserved. Template by{" "}
                <Link to="https://html.design">Free HTML Templates</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
