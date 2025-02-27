import React from "react";
import Companies from "../components/Companies";
import NewsLetterBox from "../components/NewsLetterBox";
import Hero from "../components/Hero";
import MobileApp from "../components/MobileApp";
import NumbersSection from "../components/NumbersSection";
import VideoIntroduction from "../components/VideoIntroduction";
import AboutRegisterKaro from "../components/AboutRegisterKaro ";
import TrustedBy from "../components/TrustedBy";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import BlogsSection from "../components/BlogsSection";
import OurClients from "../components/OurClients ";
import TestimonialSlider from "../components/TestimonialSlider";
import FAQSection from "../components/FAQSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <Services />
      <AboutRegisterKaro />
      <WhyChooseUs />
      <VideoIntroduction />
      <OurClients />
      <BlogsSection />
      <TestimonialSlider />
      <FAQSection />
      <MobileApp />
      <NumbersSection />
      <NewsLetterBox />
      <Companies />
    </div>
  );
};

export default Home;
