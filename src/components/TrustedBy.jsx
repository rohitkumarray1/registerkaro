import React from "react";

const TrustedBy = () => {
  return (
    <div className="container text-center py-4">
      <p className="text-muted fw-bold">
        Trusted By Over <span className="text-dark">100+ Startups</span> and
        freelance business
      </p>

      <div className="companies row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 gy-5 d-flex justify-content-center align-items-center text-center">
        <div className="col">
          <img src="images/oracle.webp" alt="Oracle" />
        </div>
        <div className="col">
          <img src="images/morpheus.webp" alt="Morpheus" />
        </div>
        <div className="col">
          <img src="images/morpheus.webp" alt="Morpheus" />
        </div>
        <div className="col">
          <img src="images/samsung.webp" alt="Samsung" />
        </div>
        <div className="col">
          <img src="images/monday.webp" alt="Monday.com" />
        </div>
        <div className="col">
          <img src="images/segment.webp" alt="Segment" />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
