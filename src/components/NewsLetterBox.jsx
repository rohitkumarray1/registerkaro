import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const NewsLetterBox = () => {
  return (
    <div className="news-letter-box py-5 text">
      <div className="container text-white">
        <div className="text-center">
          <p className="text-uppercase fw-bold">1% of the Industry</p>
          <h2 className="fw-bold">Welcome to your new digital reality. Now.</h2>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-12 col-sm-8 col-md-6 col-lg-5">
            <div className="input-group">
              <input
                type="email"
                className="form-control py-2 rounded-start"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
              <button className="btn bg-primary outline-none text-white fw-semibold rounded-end">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-4 text-center">
          {["Instant results", "Real-time insights", "Seamless experience"].map(
            (text, index) => (
              <div
                key={index}
                className="col-12 col-md-4 d-flex align-items-center justify-content-center gap-2"
              >
                <IoIosCheckmarkCircle className="text-white fs-4" />
                <p className="mb-0">{text}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsLetterBox;
