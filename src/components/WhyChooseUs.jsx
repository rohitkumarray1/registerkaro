import { FaShieldAlt, FaCheckCircle, FaSmile, FaUserTie } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <div className="container-fulid px-4 py-5">
      <div className="row g-4 mt-4">
        <div className="col-lg-6">
          <p className="text-uppercase text-warning fw-bold">
            Why RegisterKaro.in
          </p>
          <h2 className="fw-bold">Why Choose Register Karo</h2>
          <p className="text-muted">
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </div>
        <div className="col-lg-3">
          <div className="p-4 border rounded-3 text-center shadow-sm bg-light-subtle">
            <div className="text-danger display-5">
              <FaShieldAlt />
            </div>
            <h5 className="fw-bold mt-3">Confidential & Safe</h5>
            <p className="text-muted">
              All your private information is safe with us
            </p>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="p-4 border rounded-3 text-center shadow-sm bg-success-subtle">
            <div className="text-success display-5">
              <FaCheckCircle />
            </div>
            <h5 className="fw-bold mt-3">No Hidden Fee</h5>
            <p className="text-muted">
              Everything is put before you with no hidden charges or conditions
            </p>
          </div>
        </div>
        <div className="col-lg-3"></div>

        <div className="col-lg-3">
          <div className="p-4 border rounded-3 text-center shadow-sm bg-primary-subtle">
            <div className="text-primary display-5">
              <FaSmile />
            </div>
            <h5 className="fw-bold mt-3">Guaranteed Satisfaction</h5>
            <p className="text-muted">
              We ensure that you stay 100% satisfied with our offered services
            </p>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="p-4 border rounded-3 shadow-sm text-center bg-danger-subtle">
            <div className="text-danger display-5">
              <FaUserTie />
            </div>
            <h5 className="fw-bold mt-3">Expert CA/CS Assistance</h5>
            <p className="text-muted">
              Prompt support from our in-house expert professionals
            </p>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="p-4 border rounded-3 shadow-sm text-center bg-warning-subtle">
            <div className="text-danger display-5">
              <FaShieldAlt />
            </div>
            <h5 className="fw-bold mt-3">Confidential & Safe</h5>
            <p className="text-muted">
              All your private information is safe with us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
