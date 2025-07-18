import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import bannerbg from "../assets/images/banner-bg.png";
import icon1 from "../assets/images/icon-1.png";
import icon2 from "../assets/images/icon-2.png";
import icon3 from "../assets/images/icon-3.png";
import clientimg1 from "../assets/images/client-img1.png";
import clientimg2 from "../assets/images/client-img2.png";
import porsche911 from "../assets/images/porsche 911.jpg";
import quickicon from "../assets/images/quick-icon.png";
import Navbar from "../components/Navbar";
import useGalleryForm from "../hooks/useGalleryForm";
import useContactForm from "../hooks/useContactForm";


const Home = () => {
  const { formData, handleChange, handleSubmit } = useContactForm();
  const {
    loading,
    error,
    currentVehicles,
    handleFilterChange,
    handleSearch,
    handlePrev,
    handleNext,
    totalPages,
    filters,
  } = useGalleryForm();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (currentVehicles.length === 0) return <p>No vehicles found.</p>;

  return (
    <>
      <Navbar/>

      <div
        className="banner_section layout_padding"
        style={{ backgroundImage: `url(${bannerbg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top',
              }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                id="banner_slider"
                className="carousel slide" 
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  {Array(3)
                    .fill()
                    .map((_, index) => (
                      <div
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                        key={index}
                      >
                        <div className="banner_taital_main">
                          <h1 className="banner_taital">
                            Car Rent <br />
                            <span style={{ color: "#fe5b29" }}>For You</span>
                          </h1>
                          <p className="banner_text">
                            Wherever your journey takes you, rent the perfect car to match your style and needs, 
                            hassle-free and at great rates.
                          </p>
                          <div className="btn_main">
                            <div className="contact_bt">
                              <Link to="/">Read More</Link>
                            </div>
                            <div className="contact_bt active">
                              <Link to="/">Contact Us</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExample"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExample"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>  
            </div>
            {/* <div className="col-md-6">
              <div className="banner_img">
                <img src={bannerbg} alt="Banner" />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about_section layout_padding">
        <div className="container">
          <div className="about_section_2">
            <div className="row">
              <div className="col-md-6">
                <div className="image_iman">
                  <img style={{ marginTop: '100px' }} src={porsche911} className="about_img" alt="About Us" />
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

      {/* Search Section */}
      <div className="search_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="search_taital">Search Your Best Cars</h1>
              <p className="search_text">
                "Drive in style and confidence with this impeccably maintained vehicle that combines comfort, performance, and cutting-edge technology."
              </p>
              <div className="container">
                <div className="select_box_section">
                  <div className="select_box_main">
                    <div className="row">
                      <div className="col-md-3 select-outline">
                        <select
                          name="brand"
                          className="form-control"
                          value={filters.brand}
                          onChange={handleFilterChange}
                        >
                          <option value="">Any Brand</option>
                          <option value="toyota">Toyota</option>
                          <option value="bmw">BMW</option>
                          <option value="audi">Audi</option>
                        </select>
                      </div>
                      <div className="col-md-3 select-outline">
                        <select
                          name="type"
                          className="form-control"
                          value={filters.type}
                          onChange={handleFilterChange}
                        >
                          <option value="">Any Type</option>
                          <option value="suv">SUV</option>
                          <option value="sedan">Sedan</option>
                          <option value="truck">Truck</option>
                        </select>
                      </div>
                      <div className="col-md-3 select-outline">
                        <select
                          name="price"
                          className="form-control"
                          value={filters.price}
                          onChange={handleFilterChange}
                        >
                          <option value="">Any Price</option>
                          <option value="under-20k">Under $20,000</option>
                          <option value="20k-50k">$20,000 - $50,000</option>
                          <option value="above-50k">Above $50,000</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <div className="search_btn">
                          <button
                            className="btn btn-primary w-100"
                            onClick={handleSearch}
                          >
                            Search Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallary Section */}
      <div className="gallery_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="gallery_taital">Our best offers</h1>
            </div>
          </div>
          <div className="gallery_section_2">
            <div className="row">
              {currentVehicles.map((vehicle, index) => (
                <div className="col-md-4" key={vehicle.id}>
                  <div className="gallery_box">
                    <div className="gallery_img">
                      <img
                        src={vehicle.image_url}
                        alt={`Gallery ${index + 1}`}
                      />
                    </div>
                    <h3 className="types_text">{vehicle.name}</h3>
                    <p className="looking_text">
                      Start per day ${vehicle.price.toLocaleString()}
                    </p>
                    <div className="read_bt">
                      <Link to="/">Book Now</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="pagination-controls"
            style={{ textAlign: "center", marginTop: "1rem" }}
          >
            <button
              onClick={handlePrev}
              className="btn btn-primary"
              style={{ marginRight: "1rem" }}
            >
              Previous
            </button>
            <button onClick={handleNext} className="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </div>

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

      {/* Client Section  */}
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

      {/* Contact Section */}
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
};

export default Home;
