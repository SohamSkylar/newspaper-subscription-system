import React from "react";
import "./NewspaperCardCSS.css";
import { activeUser } from "../../../helpers/CustomerApi";
import SubscribeModal from "./SubscribeModal";
import { useState } from "react";
import CardSignIn from "./CardSignIn";

const NewspaperCard = ({ paperName, paperImage, paperID }) => {
  const [modal, setModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);

  const handleButton = () => {
    const activeUserPromise = activeUser();
    activeUserPromise
      .then((data) => {
        if (data.type === "admin") {
          setModal(true);
        } else if (data.type === "customer") {
          setModal(true);
        } else {
          setSignInModal(true)
        }
      })
      .catch((err) => {
        setModal(false);
        setSignInModal(true)
        // console.log(err);
      });
  };

  return (
    <>
      {/* <div className="flex">
        <div className="card">
          <img src={paperImage} className="card-img" alt="" />
          <h1 className="card-titleBase .one-word-per-line p-4">{paperName}</h1>
          <div className="card-body">
            <h1 className="card-title">{paperName}</h1>
            <p className="card-info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              dolorum tempora asperiores impedit vel eius ea illo nostrum
              deserunt dolores!
            </p>
            <button
              // type="button"
              className="card-button"
              onClick={handleButton}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div> */}
      <div className="flex w-[100%] h-[100%] justify-center">
        <div className="">
          <div className="max-w-sm py-14 ">
            <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg ">
              <img className="rounded-t-lg w-[390px] h-[254px] object-cover" src={paperImage} alt="" />
              <div className="py-6 px-8 rounded-lg bg-white">
                <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{paperName}</h1>
                <p className="text-gray-700 tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
                <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300" onClick={handleButton}>Subscribe</button>
              </div>
              {/* <div className="absolute top-2 right-2 py-2 px-4 bg-slate-900 rounded-lg">
                <span className="text-md text-white">{price}</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <SubscribeModal open={modal} setOpen={(bool) => setModal(bool)} paperID={paperID} />
      <CardSignIn open={signInModal} setOpen={(bool) => setSignInModal(bool)} />
    </>
  );
};

export default NewspaperCard;
