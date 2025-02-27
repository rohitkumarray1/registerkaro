import React from "react";

const BlogsSection = () => {
  return (
    <div className="container py-5">
      <p className="text-uppercase text-warning fw-bold text-center">
        Explore Our Blogs
      </p>
      <h2 className="fw-bold text-center text-orange">
        Accelerate Digital Transformation
      </h2>

      <div className="row g-4 mt-4">
        <div className="col-md-6 col-lg-4">
          <div className="card text-light border-0 shadow">
            <img
              src="images/explore_img_1.webp"
              className="card-img-top object-fit-cover"
              alt="Blog 1"
              height={200}
            />
            <div className="card-body">
              <small className="text-muted">Prabhash Mishra • 1 Jan 2023</small>
              <h5 className="fw-bold text-dark  mt-2">
                Small Business & Startup
              </h5>
              <p className="text-muted">
                Learn how to transform a struggling team into a successful
                business.
              </p>
              <span className="badge text-secondary">Tax & Audit</span>
              <span className="badge text-muted ms-2">Management</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card text-light border-0 shadow">
            <img
              src="images/explore_img_2.webp"
              className="card-img-top object-fit-cover"
              alt="Blog 1"
              height={200}
            />
            <div className="card-body">
              <small className="text-muted">Mahesh Kumar • 1 Jan 2023</small>
              <h5 className="fw-bold text-dark mt-2">Scale-Up Company Offer</h5>
              <p className="text-muted">
                Discover the power of mental models in scaling your business.
              </p>
              <span className="badge text-secondary">Tax</span>
              <span className="badge text-secondary ms-2">Research</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card text-light border-0 shadow">
            <img
              src="images/explore_img_1.webp"
              className="card-img-top object-fit-cover"
              alt="Blog 1"
              height={200}
            />
            <div className="card-body">
              <small className="text-muted">Rachel Verma • 1 Jan 2023</small>
              <h5 className="fw-bold text-dark mt-2">
                Growing Business Package
              </h5>
              <p className="text-muted">
                Learn the principles of wireframing and UI/UX design.
              </p>
              <span className="badge text-secondary">Audit</span>
              <span className="badge text-secondary ms-2">Money Back</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card text-light border-0 shadow">
            <img
              src="images/explore_img_4.webp"
              className="card-img-top object-fit-cover"
              alt="Blog 1"
              height={200}
            />
            <div className="card-body">
              <small className="text-muted">Karan Kumar • 1 Jan 2023</small>
              <h5 className="fw-bold text-dark mt-2">Scale-Up Company Offer</h5>
              <p className="text-muted">
                Explore how collaboration can enhance your projects.
              </p>
              <span className="badge text-secondary">Money</span>
              <span className="badge text-secondary ms-2">Management</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card text-light border-0 shadow">
            <img
              src="images/explore_img_5.webp"
              className="card-img-top object-fit-cover"
              alt="Blog 1"
              height={200}
            />
            <div className="card-body">
              <small className="text-muted">Richa Singh • 1 Jan 2023</small>
              <h5 className="fw-bold text-dark mt-2">Scale-Up Company Offer</h5>
              <p className="text-muted">
                Understand JavaScript frameworks and their importance.
              </p>
              <span className="badge text-secondary">Tax Return</span>
              <span className="badge text-secondary ms-2">News</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card text-light border-0 shadow">
            <img
              src="images/explore_img_6.webp"
              className="card-img-top object-fit-cover"
              alt="Blog 1"
              height={200}
            />
            <div className="card-body">
              <small className="text-muted">Miss Nora • 1 Jan 2023</small>
              <h5 className="fw-bold text-dark mt-2">Scale-Up Company Offer</h5>
              <p className="text-muted">
                Learn how to build a strong online community from scratch.
              </p>
              <span className="badge text-secondary">Private Limited</span>
              <span className="badge text-muted ms-2">Customer Success</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn py-2 px-3 bg-secondary text-white fw-semibold">
          Show more blogs →
        </button>
      </div>
    </div>
  );
};

export default BlogsSection;
