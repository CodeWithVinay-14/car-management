import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import useGalleryForm from "../hooks/useGalleryForm";

function Gallery() {

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

      {/* Gallery Section */}
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

          {/* Pagination */}
          <div className="pagination-controls text-center mt-4">
            <button
              onClick={handlePrev}
              className="btn btn-primary mr-2"
              disabled={totalPages <= 1}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="btn btn-primary"
              disabled={totalPages <= 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
