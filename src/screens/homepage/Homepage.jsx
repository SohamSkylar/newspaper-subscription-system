import React from "react";
import Navbar from "./components/Navbar.jsx";
import NewspaperCard from "./components/NewspaperCard.jsx";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarouselSlider from "./components/CarouselSlider.js";
import ContactUs from "./components/ContactUs.jsx";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-full" name="homePage">
        <CarouselSlider/>
      </div>
      <div name="cardSection" className="bg-white">
        <NewspaperCard/>
      </div>
      <div name="contactUs" className="bg-black">
        <ContactUs/>
      </div>
    </>
  );
};


export default Homepage;