import React from "react";
import "./NewspaperCardCSS.css";

const NewspaperCard = ({ paperName, paperImage }) => {
  return (
    <div className="flex">
      <div className="card">
        <img src={paperImage} className="card-img" alt="" />
        <div className="card-body">
          <h1 className="card-title">{paperName}</h1>
          <p className="card-info">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            dolorum tempora asperiores impedit vel eius ea illo nostrum deserunt
            dolores!
          </p>
          <button className="card-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewspaperCard;
