import React from "react";
import ProItemPhoto from "../../../img/proItem.png";
import "./Item.scss";

function Item({ title, text, itemId }) {
  // console.log(key);
  return (
    <div className={itemId == 2 ? 'proItem secondProItem' : 'proItem'}>
      <div className="proItemPhoto">
        <img src={ProItemPhoto} alt="" />
      </div>
      <div className="proItemText">
        <div className="itemTextHead">{title}</div>
        <div className="itemTextBody">{text}</div>
        <a href="#" className="itemTextLink">
          View Details
        </a>
      </div>
    </div>
  );
}

export default Item;
