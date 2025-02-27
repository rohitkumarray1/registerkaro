import React from "react";

const MobileApp = () => {
  return (
    <section className="container-fluid bg-secondary text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 py-4">
            <h2 className="fw-bold">
              Manage Your Services by your <br /> Mobile Phone
            </h2>
            <p className="mt-2">
              Download our app to manage and track your services. Our app
              enables you to stay in touch with our experts and aids you in
              tracking your progress.
            </p>
            <div className="mt-4">
              <button className="btn bg-transparent text-white fw-semibold">
                Get the App
              </button>

              <div className="d-flex gap-3 mt-3">
                <a href="#">
                  <img
                    src="images/goole_play.png"
                    alt="App Store"
                    width="150"
                  />
                </a>
                <a href="#">
                  <img
                    src="images/app_store.png"
                    alt="Google Play"
                    width="150"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src="images/mobile-app.jpg"
              alt="Mobile App Preview"
              className="img-fluid"
              width="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
