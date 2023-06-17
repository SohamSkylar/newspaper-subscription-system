import React from "react";
import Navbar from "./components/Navbar.jsx";
import NewspaperCard from "./components/NewspaperCard.jsx";
import ContactUs from "./components/ContactUs.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { showAllPaperSub } from "../../helpers/NewspaperApi.jsx";
import { Toaster } from "react-hot-toast";
import { Spinner } from 'loading-animations-react';
import { showAllPartners } from "../../helpers/PartnerApi.jsx";
import HeroLanding from "./components/HeroLanding.jsx";

const Homepage = () => {
  const [paperData, setPaperData] = useState([]);
  const [partnerData, setPartnerData] = useState([]);

  const getSliderDataFunc = () => {
    const getPartnerPromise = showAllPartners();
    getPartnerPromise
      .then((data) => {
        setPartnerData(data);
      })
      .catch((err) => console.log(err.message));
  };

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
    getSliderDataFunc()
  }, []);

  const styleBeige = { backgroundColor: "#FEFFFF" }
  // const styleGrey = {backgroundColor: "#323232"}

  return (
    <>
      {(paperData.length === 0 && partnerData.length === 0) && (
        <div className="m-auto flex h-screen items-center">
          {/* <Waves className="componentClass" text=""/> */}
          <Spinner color1="blue" color2="#fff" textColor="rgba(0,0,0, 0.5)" className="componentClass" />
        </div>

      )}
      {(paperData.length !== 0 && partnerData.length !== 0) && <div style={{ ...styleBeige }}>
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <Navbar />
        <div className="max-w-full" name="homePage">
          <HeroLanding />
        </div>
        <div name="cardSection" className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-2 p-8 items-center justify-items-center">
          {paperData.map((data) => {
            return (
              <NewspaperCard key={data.paper_id} paperImage={data.img} paperName={data.name} paperID={data.paper_id} />
            );
          })}

        </div>
        <div name="contactUs" className="bg-black">
          <ContactUs />
        </div>
      </div>}
    </>
  );
};

export default Homepage;

// container flex-wrap flex mt-4 justify-center m-auto overflow-hidden md:justify-evenly
