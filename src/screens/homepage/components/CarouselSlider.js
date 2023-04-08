import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { slides } from '../../../Helpers/CarouselData';
import './CarouselCSS.css'

import React, { Component } from "react";
import Slider from "react-slick";

export default class CarouselSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false

    };
    return (
      <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          {slides.map((item, index) =>{
            return <div className="carousel">
              <img src = {item.url} className="carouselInner"></img>
              <div className="carDiv bg-black/30">
                <h1 className="text-8xl p-14 w-8">{item.text}</h1>
              </div>
            </div>
          })}
        </Slider>
      </div>
    );
  }
}