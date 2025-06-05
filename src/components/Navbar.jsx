import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <>
    <div className="header_section">
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
      </div>
    </>
  )
}

export default Navbar