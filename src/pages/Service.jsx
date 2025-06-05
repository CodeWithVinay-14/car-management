import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import icon1 from "../assets/images/icon-1.png";
import icon2 from "../assets/images/icon-2.png";
import icon3 from "../assets/images/icon-3.png";
import Navbar from "../components/Navbar";

function Service() {
  return (
    <>
      <Navbar/>

      <div className="choose_section layout_padding">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="choose_taital">WHY CHOOSE US</h1>
                  </div>
                </div>
                <div className="choose_section_2">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="icon_1">
                        <img src={icon1} alt="Safety & Security" />
                      </div>
                      <h4 className="safety_text">SAFETY & SECURITY</h4>
                      <p className="ipsum_text">
                        Top-tier safety checks and advanced security features ensure your peace of mind on every drive. With us, you’re always protected and secure.
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <div className="icon_1">
                        <img src={icon2} alt="Online Booking" />
                      </div>
                      <h4 className="safety_text">Online Booking</h4>
                      <p className="ipsum_text">
                        Book your vehicle instantly with our simple, secure online system—anytime, anywhere. Convenience and speed at your fingertips!
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <div className="icon_1">
                        <img src={icon3} alt="Best Drivers" />
                      </div>
                      <h4 className="safety_text">Best Drivers</h4>
                      <p className="ipsum_text">
                        Our professional drivers prioritize your safety and comfort, delivering a reliable and pleasant journey every time. Experience excellence on the road with us.
                      </p>
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

export default Service;
