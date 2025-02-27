import React from "react";
import {
  FaFileAlt,
  FaCreditCard,
  FaUserCheck,
  FaEnvelope,
} from "react-icons/fa";

const OurClients = () => {
  return (
    <div className="py-5">
      <div className="text-center">
        <h2 className="fs-2 fw-bold text-dark">Our Happy Clients</h2>
        <p className="text-secondary mx-auto mt-2 w-50">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state-of-the-art customer service.
        </p>

        <div className="d-flex justify-content-center mt-4">
          <img
            src="images/our_client.webp"
            className="img-fluid"
            alt="Our Clients"
          />
        </div>

        <button className="mt-4 btn text-secondary fw-semibold fs-5">
          Show more →
        </button>
      </div>

      <div className="bg-primary py-5 mt-5">
        <div className="container">
          <div className="row justify-content-center g-4 text-center">
            <div className="col-md-3 d-flex align-items-center">
              <div className="me-2 d-flex align-items-center justify-content-center rounded-circle bg-danger p-3">
                <FaFileAlt className="text-white fs-4" />
              </div>
              <span className="fw-medium">Fill up Application Form</span>
            </div>

            <div className="col-md-3 d-flex align-items-center">
              <div className="me-2 d-flex align-items-center justify-content-center rounded-circle bg-success p-3">
                <FaCreditCard className="text-white fs-4" />
              </div>
              <span className=" fw-medium">Make Online Payment</span>
            </div>

            <div className="col-md-3 d-flex align-items-center">
              <div className="me-2 d-flex align-items-center justify-content-center rounded-circle bg-warning p-3">
                <FaUserCheck className="text-white fs-4" />
              </div>
              <span className="fw-medium">
                Executive will Process Application
              </span>
            </div>

            <div className="col-md-3 d-flex align-items-center">
              <div className="me-2 d-flex align-items-center justify-content-center rounded-circle bg-secondary p-3">
                <FaEnvelope className="text-white fs-4" />
              </div>
              <span className="fw-medium">Get Confirm Mail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
