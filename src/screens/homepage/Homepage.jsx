import React from "react";
import Navbar from "./components/Navbar.jsx";
import Carousel from "./components/Carousel.jsx";

// https://i.ibb.co/xj69cvS/Untitled-design-4.png
// https://i.ibb.co/ZHw3DHh/Untitled-design-3.png
// https://ibb.co/sjnZQxK
// https://ibb.co/7zgW4cP
// https://ibb.co/D8K4cms
// https://ibb.co/pxMxDVR
// https://ibb.co/9yqVzLb

const slides = [
  "https://i.ibb.co/9wfJ5wq/Untitled-design-3.png",
  "https://i.ibb.co/cFQfp5c/Untitled-design-4.png",
  "https://i.ibb.co/W6M698P/3-1.png",
  "https://i.ibb.co/L9CJbWx/4-1.png",
  "https://i.ibb.co/zspzb9X/5.png"
]
const Homepage = () => {
  return (
    <>
      <Navbar/>
      <div className="max-w-full imageDiv">
        <Carousel autoSlide={true}>
          {slides.map((s, index) =>(
            <img key={index} src = {s} style={{height: "50vh"}}/>
          ))}
        </Carousel>
      </div>
    </>
  );
};
  

export default Homepage;
