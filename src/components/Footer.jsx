import React from "react";
import {
  FaApple,
  FaArrowUp,
  FaFacebook,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="text-white bg-primary-color py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5 gx-5 gy-4">
          <div className="col">
            <p className="text-light">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="d-flex gap-3 mt-2">
              <Link to="#" className="text-white">
                <FaFacebook size={22} />
              </Link>
              <Link to="#" className="text-white">
                <FaGoogle size={22} />
              </Link>
              <Link to="#" className="text-white">
                <FaApple size={22} />
              </Link>
              <Link to="#" className="text-white">
                <FaInstagram size={22} />
              </Link>
            </div>
          </div>

          <div className="col">
            <p className="text-primary fw-semibold">START A BUSINESS</p>
            <ul className="list-unstyled text-light d-flex flex-column gap-2">
              <li>
                <Link to="#">Features</Link>
              </li>
              <li>
                <Link to="#">Solutions</Link>
              </li>
              <li>
                <Link to="#">Integrations</Link>
              </li>
              <li>
                <Link to="#">Enterprise</Link>
              </li>
              <li>
                <Link to="#">Solutions</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <p className="text-primary fw-semibold">GOVERNMENT</p>
            <ul className="list-unstyled text-light d-flex flex-column gap-2">
              <li>
                <Link to="#">Partners</Link>
              </li>
              <li>
                <Link to="#">Community</Link>
              </li>
              <li>
                <Link to="#">Developers</Link>
              </li>
              <li>
                <Link to="#">App</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <p className="text-primary fw-semibold">COMPLIANCE & TAX</p>
            <ul className="list-unstyled text-light d-flex flex-column gap-2">
              <li>
                <Link to="#">Channels</Link>
              </li>
              <li>
                <Link to="#">Scale</Link>
              </li>
              <li>
                <Link to="#">Watch the Demo</Link>
              </li>
              <li>
                <Link to="#">Our Competition</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <p className="text-primary fw-semibold">BIS & CDSCO</p>
            <ul className="list-unstyled text-light d-flex flex-column gap-2">
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">News</Link>
              </li>
              <li>
                <Link to="#">Leadership</Link>
              </li>
              <li>
                <Link to="#">Media Kit</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-5">
        <button
          onClick={handleScrollTop}
          className="bg-primary border-0 text-white rounded-circle p-3 shadow"
          aria-label="Back to top"
        >
          <FaArrowUp size={20} />
        </button>
        <p className="mt-3 mb-0">© 2024 Registerkaro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
