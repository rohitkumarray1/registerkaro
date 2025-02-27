import React from "react";

// Note: Since equivalent icons were not available in 'react-icons', we are using SVG images instead.

const Services = () => {
  return (
    <div className="container text-center py-5">
      <p className="text-uppercase text-warning fw-bold">
        Welcome to RegisterKaro.in
      </p>
      <h2 className="fw-bold">Explore Our Services</h2>

      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card p-4 border-0">
            <div>
              <img
                src="images/company_formation.svg"
                alt="Company Formation icon"
              />
            </div>
            <h5 className="fw-bold mt-3">Company Formation</h5>
            <p className="text-muted">
              Build web-based solutions that enhance customer experience.
            </p>
            <a href="#" className="text-decoration-none fw-bold">
              Learn more →
            </a>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card p-4 border-0">
            <div>
              <img
                src="images/company_secretarial_services.svg"
                alt="Company Secretarial Services icon"
              />
            </div>
            <h5 className="fw-bold mt-3">Company Secretarial Services</h5>
            <p className="text-muted">
              Make data-driven decisions and utilize technology to reach
              business goals.
            </p>
            <a href="#" className="text-decoration-none fw-bold">
              Learn more →
            </a>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card p-4 border-0">
            <div>
              <img
                src="images/virtual_office_address.svg"
                alt="Virtual Office Address icon"
              />
            </div>
            <h5 className="fw-bold mt-3">Virtual Office Address</h5>
            <p className="text-muted">
              Foster customer relationships by effectively serving your market.
            </p>
            <a href="#" className="text-decoration-none fw-bold">
              Learn more →
            </a>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card p-4 border-0">
            <div>
              <img
                src="images/annual_compliance_services.svg"
                alt="Annual Compliance Services icon"
              />
            </div>
            <h5 className="fw-bold mt-3">Annual Compliance Services</h5>
            <p className="text-muted">
              Turn your ideas into modern products with our design experts.
            </p>
            <a href="#" className="text-decoration-none fw-bold">
              Learn more →
            </a>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card p-4 border-0">
            <div>
              <img
                src="images/payroll_services.svg"
                alt="Payroll Services icon"
              />
            </div>
            <h5 className="fw-bold mt-3">Payroll Services</h5>
            <p className="text-muted">
              Expand your business across the globe with minimal effort.
            </p>
            <a href="#" className="text-decoration-none fw-bold">
              Learn more →
            </a>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card p-4 border-0">
            <div>
              <img
                src="images/bookkeeping_services.svg"
                alt="bookkeeping services icon"
              />
            </div>
            <h5 className="fw-bold mt-3">Bookkeeping Services</h5>
            <p className="text-muted">
              Steering user behaviors with creative design, data insights &
              technology.
            </p>
            <a href="#" className="text-decoration-none fw-bold">
              Learn more →
            </a>
          </div>
        </div>
      </div>

      <button className="btn bg-secondary px-4 py-2 fs-5 text-white fw-semibold">
        See All Services
      </button>
    </div>
  );
};

export default Services;
