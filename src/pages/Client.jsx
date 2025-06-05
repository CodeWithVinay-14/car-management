import React from "react";
import clientimg1 from "../assets/images/client-img1.png";
import clientimg2 from "../assets/images/client-img2.png";
import quickicon from "../assets/images/quick-icon.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Client() {
  return (
    <>
    <Navbar/>
      
      <div className="client_section layout_padding">
        <div className="container">
          <div
            id="custom_slider"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {Array(3)
                .fill()
                .map((_, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <h1 className="client_taital">What Says Customers</h1>
                      </div>
                    </div>
                    <div className="client_section_2">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="client_taital_box">
                            <div className="client_img">
                              <img src={clientimg1} alt="Customer 1" />
                            </div>
                            <h3 className="moark_text">Hannery</h3>
                            <p className="client_text">
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page.
                            </p>
                          </div>
                          <div className="quick_icon">
                            <img src={quickicon} alt="Quick Icon" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="client_taital_box">
                            <div className="client_img">
                              <img src={clientimg2} alt="Customer 2" />
                            </div>
                            <h3 className="moark_text">Channery</h3>
                            <p className="client_text">
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page.
                            </p>
                          </div>
                          <div className="quick_icon">
                            <img src={quickicon} alt="Quick Icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <a
              className="carousel-control-prev"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              className="carousel-control-next"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
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

export default Client;
