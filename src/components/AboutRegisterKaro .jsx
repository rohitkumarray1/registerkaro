import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const AboutRegisterKaro = () => {
  return (
    <div className="container-fluid px-4 py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6">
          <p className="text-warning text-uppercase small fw-bold">
            Welcome to RegisterKaro.in
          </p>
          <h2 className="fw-bold text-secondary">
            About <span className="text-warning">Register Karo</span>
          </h2>
          <p className="text-dark">
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years and I’m extremely
            pleased with their performance, ability to execute, and willingness
            to adapt in our ever changing environment. Perry is an outstanding
            leader who is fanatical about customer satisfaction. He has built a
            solid team which has consistently delivered on projects thereby
            exceeding everyone’s expectations. I would strongly recommend their
            services to any organization that is looking for solid, reliable,
            and predictable outcomes.
          </p>
          <p className="text-dark">
            I would strongly recommend their services to any organization that
            is looking for solid, reliable, and predictable outcomes.
          </p>
          <button className="btn btn bg-secondary text-white fw-semibold">
            Learn More{" "}
            <span className="ms-2">
              <FaRegArrowAltCircleRight />
            </span>
          </button>
        </div>

        <div className="col-lg-6 mt-4 mt-lg-0 text-center d-flex align-items-stretch">
          <div className="position-relative w-100">
            <img
              src="images/about_us.webp"
              alt="Register Karo Team"
              className="w-100 object-fit-cover"
              height={450}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRegisterKaro;
