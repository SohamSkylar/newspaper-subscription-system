import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CarouselCSS.css'
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { showAllPartners } from "../../../helpers/PartnerApi";

const CarouselSlider = () =>{

  const [partnerData, setPartnerData] = useState([]);

  const getPartnerDataFunc = () => {
    const getPartnerPromise = showAllPartners();
    getPartnerPromise
      .then((data) => {
        setPartnerData(data);
      })
      .catch((err) => console.log(err.message));
  };

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

  useEffect(() => {
    getPartnerDataFunc()
  }, [])

  return (
    <div>
      <Slider {...settings}>
        {partnerData.map((data) =>{
          return <div key={data.company_id} className="carousel">
            <img key={data.company_id} src = {data.img1} alt="newspaperImage" className="carouselInner"></img>
            <div className="carDiv bg-black/10">
              <div key={data.company_id} className="carText flex flex-wrap text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold">{data.name}</div>
            </div>
          </div>
        })}
      </Slider>
    </div>
  );
}

export default CarouselSlider;

