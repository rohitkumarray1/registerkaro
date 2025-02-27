import React from "react";
import {
  FaPhone,
  FaPinterest,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container-fluid d-none d-md-block py-2 text-white bg-secondary">
      <div className="d-flex justify-content-end align-items-center">
        {/* Contact Info Section */}
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center ">
            <FaEnvelope className="me-2" />
            <p className="mb-0">www.registerkaro.in</p>
          </div>

          <span className="mx-3">|</span>

          <div className="d-flex align-items-center">
            <FaPhone className="me-2" />
            <p className="mb-0">+918447746183</p>
          </div>
        </div>

        <span className="mx-3">|</span>

        {/* Social Media Section */}
        <div className="d-flex">
          <Link to="#" className="text-white mx-2">
            <FaInstagram size={22} />
          </Link>
          <Link to="#" className="text-white mx-2">
            <FaFacebook size={22} />
          </Link>
          <Link to="#" className="text-white mx-2">
            <FaTwitter size={22} />
          </Link>
          <Link to="#" className="text-white mx-2">
            <FaPinterest size={22} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
