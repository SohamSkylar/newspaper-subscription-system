import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { slides } from '../../../Helpers/CarouselData';
import './CarouselCSS.css'

import React, { Component } from "react";
import Slider from "react-slick";

const CarouselSlider = () =>{

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    speed: 2000,
    arrows: false

  };

  return (
    <div>
      {/* <h2> Single Item</h2> */}
      <Slider {...settings}>
        {slides.map((item, index) =>{
          return <div key={index} className="carousel">
            <img key={index} src = {item.url} className="carouselInner"></img>
            <div className="carDiv bg-black/20">
              <div key={index} className="flex flex-wrap text-3xl sm:text-4xl md:text-6xl lg:text-8xl">{item.text}</div>
            </div>
          </div>
        })}
      </Slider>
    </div>
  );
}

export default CarouselSlider;

