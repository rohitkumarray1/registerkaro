import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Chris",
    role: "President and CEO, PrintReach, USA",
    image: "images/user.webp",
    rating: 4.5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
    name: "Sophia",
    role: "CTO, TechCorp, UK",
    image: "images/user.webp",
    rating: 5,
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Daniel",
    role: "Marketing Manager, BizWorld, Canada",
    image: "images/user.webp",
    rating: 4.5,
  },
  {
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    name: "Emma",
    role: "Founder, Creative Minds, Germany",
    image: "images/user.webp",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800, // Smooth transition speed
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-secondary text-white py-5">
      <div className="text-center">
        <h2 className="fw-bold mb-4">What People Say About Us</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3">
              <div
                className="bg-white text-dark rounded p-4"
                style={{ maxWidth: "350px", margin: "0 auto" }}
              >
                <FaQuoteLeft className="text-primary fs-2 mb-2" />
                <p>{testimonial.text}</p>
                <div className="text-warning mb-3">
                  {Array.from({ length: Math.floor(testimonial.rating) }).map(
                    (_, i) => (
                      <FaStar key={i} />
                    )
                  )}
                  {testimonial.rating % 1 !== 0 && <FaStarHalfAlt />}
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                    <small>{testimonial.role}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
