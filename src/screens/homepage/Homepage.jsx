import React from "react";
import Navbar from "./components/Navbar.jsx";
import NewspaperCard from "./components/NewspaperCard.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselSlider from "./components/CarouselSlider.jsx";
import ContactUs from "./components/ContactUs.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { showAllPaperSub } from "../../helpers/NewspaperApi.jsx";
import { Toaster } from "react-hot-toast";

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

  const styleBeige = {backgroundColor: "#FEFFFF"}
  // const styleGrey = {backgroundColor: "#323232"}

  return (
    <div style={{...styleBeige}}>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Navbar />
      <div className="max-w-full" name="homePage">
        <CarouselSlider />
      </div>
      <div name="cardSection" className="container flex-wrap flex mt-4 justify-center m-auto overflow-hidden md:justify-evenly">
        {paperData.map((data) => {
          return (
            <NewspaperCard key={data.paper_id} paperImage={data.img} paperName={data.name} paperID={data.paper_id}/>
          );
        })}
        
      </div>
      <div name="contactUs" className="bg-black">
        <ContactUs />
      </div>
    </div>
  );
};

export default Homepage;
