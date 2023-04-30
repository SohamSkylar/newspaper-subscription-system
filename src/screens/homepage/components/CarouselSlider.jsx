import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CarouselCSS.css'
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { showAllPartners } from "../../../helpers/PartnerApi";


const CarouselSlider = ({partnerData}) =>{

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    speed: 3000,
    arrows: false
  };

  return (
    <div className="font-face-bwb">
      <Slider {...settings}>
        {partnerData.map((data) =>{
          return <div key={data.company_id} className="carousel">
            <img key={data.company_id} src = {data.img1} alt="newspaperImage" className="carouselInner"></img>
            <div className="carDiv bg-black/30">
              <div key={data.company_id} className="carText flex flex-wrap text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">{data.name}</div>
            </div>
          </div>
        })}
      </Slider>
    </div>
  );
}

export default CarouselSlider;

