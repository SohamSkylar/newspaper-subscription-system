import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { slides } from '../../../helpers/CarouselData';
import './CarouselCSS.css'

import React from "react";
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
      <Slider {...settings}>
        {slides.map((item, index) =>{
          return <div key={index} className="carousel">
            <img key={index} src = {item.url} className="carouselInner"></img>
            <div className="carDiv bg-black/10">
              <div key={index} className="carText flex flex-wrap text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold">{item.text}</div>
            </div>
          </div>
        })}
      </Slider>
    </div>
  );
}

export default CarouselSlider;

