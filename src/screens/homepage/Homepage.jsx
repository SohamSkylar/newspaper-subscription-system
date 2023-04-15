import React from "react";
import Navbar from "./components/Navbar.jsx";
import NewspaperCard from "./components/NewspaperCard.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselSlider from "./components/CarouselSlider.js";
import ContactUs from "./components/ContactUs.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { showAllPaperSub } from "../../helpers/NewspaperApi.jsx";

const Homepage = () => {
  const [paperData, setPaperData] = useState([]);

  const getPartnerDataFunc = () => {
    const getPartnerPromise = showAllPaperSub();
    getPartnerPromise
      .then((data) => {
        setPaperData(data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getPartnerDataFunc();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-full" name="homePage">
        <CarouselSlider />
      </div>
      <div name="cardSection" className="bg-white">
        {paperData.map((data) => {
          return (
            <NewspaperCard key={data.paper_id} paperImage={data.img} paperName={data.name}/>
          );
        })}
        
      </div>
      <div name="contactUs" className="bg-black">
        <ContactUs />
      </div>
    </>
  );
};

export default Homepage;
