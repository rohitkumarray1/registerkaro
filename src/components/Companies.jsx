import React from "react";

const Companies = () => {
  return (
    <div className="container py-4">
      <div className="companies row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 gy-5 d-flex justify-content-center align-items-center text-center">
        <div className="col">
          <img src="/images/coinbase.webp" alt="Coinbase" />
        </div>
        <div className="col">
          <img src="/images/spotify.webp" alt="Spotify" />
        </div>
        <div className="col">
          <img src="/images/slack.webp" alt="Slack" />
        </div>
        <div className="col">
          <img src="/images/dropbox.webp" alt="Dropbox" />
        </div>
        <div className="col">
          <img src="/images/webflow.webp" alt="Webflow" />
        </div>
        <div className="col">
          <img src="/images/zoom.webp" alt="Zoom" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
