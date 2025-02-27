import React from "react";
import { Accordion, Button } from "react-bootstrap";

const FAQSection = () => {
  return (
    <div className="py-5 bg-light">
      <div className="container text-center">
        <p className="text-warning fw-bold mb-1">FAQ</p>
        <h2 className="fw-bold mb-4">Frequent Ask Questions</h2>

        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="position-relative my-2">
              <div className="gradient-bg position-absolute start-0 h-100"></div>
              Can I recover deleted files from desktop with this software?
            </Accordion.Header>
            <Accordion.Body>
              Yes, this software allows you to recover deleted files from your
              desktop, even if they were removed from the recycle bin.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header className="position-relative my-2">
              <div className="gradient-bg position-absolute start-0 h-100"></div>
              Can I recover deleted files from desktop with this software?
            </Accordion.Header>
            <Accordion.Body>
              Yes, this software allows you to recover deleted files from your
              desktop, even if they were removed from the recycle bin.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header className="position-relative my-2">
              <div className="gradient-bg position-absolute start-0 h-100"></div>
              Can I recover deleted files from desktop with this software?
            </Accordion.Header>
            <Accordion.Body>
              Yes, this software allows you to recover deleted files from your
              desktop, even if they were removed from the recycle bin.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header className="position-relative my-2">
              <div className="gradient-bg position-absolute start-0 h-100"></div>
              Can I recover deleted files from desktop with this software?
            </Accordion.Header>
            <Accordion.Body>
              Yes, this software allows you to recover deleted files from your
              desktop, even if they were removed from the recycle bin.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header className="position-relative my-2">
              <div className="gradient-bg position-absolute start-0 h-100"></div>
              Can I recover deleted files from desktop with this software?
            </Accordion.Header>
            <Accordion.Body>
              Yes, this software allows you to recover deleted files from your
              desktop, even if they were removed from the recycle bin.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Button
          variant="dark"
          className="mt-4 bg-secondary d-flex align-items-center mx-auto"
        >
          Show more →
        </Button>
      </div>
    </div>
  );
};

export default FAQSection;
