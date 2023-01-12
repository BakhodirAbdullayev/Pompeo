import React from "react";
import "./CollectionCard.scss";

function CollectionCard({ imgLink, price, productName }) {
  return (
    <div className="collectionCard">
      <img src={imgLink} alt="" />
      <div className="cardText">
        {productName}
        <p>{price}</p>
      </div>
    </div>
  );
}

export default CollectionCard;
