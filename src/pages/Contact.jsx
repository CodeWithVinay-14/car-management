import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Navbar from "../components/Navbar";
import useContactForm from "../hooks/useContactForm";

function Contact() {
  const { formData, handleChange, handleSubmit } = useContactForm();

  return (
    <>
      <Navbar/>

      <div className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="contact_taital">Get In Touch</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="contact_section_2">
            <div className="row">
              <div className="col-md-12">
                <form onSubmit={handleSubmit} className="mail_section_1">
                  <input
                    type="text"
                    className="mail_text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    className="mail_text"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="mail_text"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    className="massage-bt"
                    placeholder="Message"
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <div className="send_bt_car">
                    <button type="submit">Send</button>
                  </div>
                </form>
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

export default Contact;
