import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="container-fluid bg-white position-sticky top-0 z-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center py-2 px-3">
        {/* Logo Section */}
        <div className="d-flex align-items-center">
          <img
            src="/images/icon.png"
            alt="RegisterKaro logo"
            className="me-2"
          />
          <h3 className="mb-0 fw-bold text-primary">
            <span className="text-secondary">Register</span>Karo
          </h3>
        </div>

        {/* Desktop Menu */}
        <div className="d-none d-lg-flex align-items-center gap-4">
          <ul className="d-flex align-items-center gap-4 mb-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Our Services</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
          </ul>
          <LuSearch size={20} />
          <button className="btn bg-primary text-white fw-semibold">
            Talk to an Expert
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="d-lg-none border-0 bg-transparent"
          onClick={toggleMenu}
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`position-fixed top-0 end-0 min-vh-100 bg-white shadow-lg p-4 transition-menu ${
          isMenuOpen ? "show" : "hide"
        }`}
      >
        <button
          className="border-0 bg-transparent position-absolute top-2 end-2"
          onClick={toggleMenu}
        >
          <FaTimes size={24} />
        </button>
        <ul className="d-flex flex-column gap-3 mt-5 fw-semibold">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Our Services
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          <li>
            <button className="btn bg-primary text-white fw-semibold w-100">
              Talk to an Expert
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
