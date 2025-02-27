import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdPlayCircle } from "react-icons/io";

const Hero = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center position-relative">
        {/* Left Section */}
        <div className="col-lg-7 p-5 pe-0 hero">
          <div className="d-flex gap-2 align-items-center mb-4">
            <FaStar className="text-primary" />
            <p className="text-secondary fw-semibold mb-0">Google Rating</p>
            <div className="d-flex gap-2">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className="bg-primary text-white d-flex align-items-center justify-content-center p-1"
                >
                  <FaStar />
                </span>
              ))}
            </div>
          </div>

          <h1 className="text-dark fw-bold">
            Your trusted partner <br /> for compliance business needs
          </h1>
          <span className="hero-border"></span>

          <p className="fs-5 mt-3">
            An online business compliance platform that helps entrepreneurs and
            individuals with various{" "}
            <span className="fw-semibold">legal matters.</span>
          </p>

          <div className="d-flex gap-4 flex-wrap mt-4">
            <div className="d-flex align-items-center gap-3">
              <img src="/images/handshake.svg" alt="Clients" width={40} />
              <div>
                <h4 className="gradient-text fw-bold mb-0">4.5+</h4>
                <p className="mb-0">Clients</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img src="/images/people.svg" alt="Customer Rating" width={40} />
              <div>
                <h4 className="gradient-text fw-bold mb-0">20,000+</h4>
                <p className="mb-0">Customer Rating</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img
                src="/images/handshake.svg"
                alt="Financial Stability"
                width={40}
              />
              <div>
                <h4 className="gradient-text fw-bold mb-0">99.8%</h4>
                <p className="mb-0">Financial Stability</p>
              </div>
            </div>
          </div>

          <div className="d-flex gap-3 mt-4">
            <button className="btn bg-secondary px-4 py-2 fs-5 text-white fw-semibold">
              Talk to an Expert
            </button>
            <button className="btn fs-5 d-flex align-items-center gap-2 fw-semibold">
              <IoMdPlayCircle className="text-primary" size={24} />
              See how it works
            </button>
          </div>
        </div>

        <div className="col-lg-5 text-center position-relative">
          <img
            src="/images/hero.webp"
            width={400}
            className="img-fluid"
            alt="Hero Section"
          />

          <div className="position-absolute top-50 end-0 translate-middle-y d-flex flex-column gap-3 pe-3">
            <button className="btn bg-white shadow px-4 py-2">
              Annual Compliance
            </button>
            <button className="btn shadow px-4 py-2">Payroll Services</button>
            <button className="btn shadow px-4 py-2">Company Formation</button>
            <button className="btn bg-white shadow px-4 py-2">
              Annual Compliance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
