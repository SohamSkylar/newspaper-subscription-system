import React from "react";
import Navbar from "./components/Navbar.jsx";
import NewspaperCard from "./components/NewspaperCard.jsx";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarouselSlider from "./components/CarouselSlider.js";
import "../homepage/components/OtherStyles.css";

// https://i.ibb.co/StpmrFP/wherda-arsianto-l7d-P0-O8-Dj60-unsplash.jpg
// https://i.ibb.co/wR2W0Sy/waldemar-JYPDh4ter10-unsplash.jpg
// https://i.ibb.co/2YYQYvx/rishabh-sharma-R-js25-Pv1-LQ-unsplash.jpg
// https://i.ibb.co/yYqxWNd/absolutvision-WYd-Pk-Ca1-BY-unsplash.jpg


// slides.map((t, index)=>(console.log(t.text)))

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-full" id="homePage">
        <CarouselSlider/>
        <div className="btnclass">
          <button className="btn"><a href="#homePage">Home</a></button>
          <button className="btn"><a href="#cardSection">Cards</a></button>
          <button className="btn"><a href="#">tbd</a></button>
        </div>
      </div>

      <div className="cardSection" id="cardSection">
        <NewspaperCard/>
      </div>



    </>
  );
};


export default Homepage;

{/* {slides.map((s, index) => (
            <img key={index} src={s.url} className="carouselImg"/>
          ))}  */}