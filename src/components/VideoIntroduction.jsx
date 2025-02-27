import React from "react";
import { FaLightbulb, FaYoutube } from "react-icons/fa";

const VideoIntroduction = () => {
  return (
    <div className="container-fluid px-5 bg-secondary py-5">
      <div className="">
        <div className="row align-items-center">
          <div className="col-lg-6 text-white">
            <h2 className="fw-bold">Our Video Introductions</h2>
            <p className="mb-4">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt apis dui.
            </p>

            <div className="d-flex align-items-start mb-3">
              <div className="me-3">
                <div
                  className="rounded-circle bg-warning d-flex justify-content-center align-items-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <FaLightbulb className="text-white" />
                </div>
              </div>
              <div>
                <h5 className="fw-bold text-white">Explore ideas together</h5>
                <p className="mb-0">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <div className="me-3">
                <div
                  className="rounded-circle bg-warning d-flex justify-content-center align-items-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <FaLightbulb className="text-white" />
                </div>
              </div>
              <div>
                <h5 className="fw-bold text-white">
                  Bring those ideas to life
                </h5>
                <p className="mb-0">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0 text-center">
            <div className="position-relative cursor">
              <img
                src="images/video_thumbnail.webp"
                alt="Video Thumbnail"
                className="img-fluid rounded"
              />
              <div className="position-absolute top-50 start-50 translate-middle">
                <span className="text-danger">
                  <FaYoutube size={45} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoIntroduction;
