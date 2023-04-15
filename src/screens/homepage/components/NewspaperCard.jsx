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
        // console.log(data)
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
      <div className="flex">
        <div className="card">
          <img src={paperImage} className="card-img" alt="" />
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
      </div>
      <SubscribeModal open={modal} setOpen={(bool) => setModal(bool)} paperID={paperID}/>
      <CardSignIn open={signInModal} setOpen={(bool) => setSignInModal(bool)} />
    </>
  );
};

export default NewspaperCard;
