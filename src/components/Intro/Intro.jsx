import React from "react";
import IntroPhoto from "../../img/introItem.png";
import SectionTitle from "../SectionTitle";
import Button from "../Button";

import "./Intro.scss";

function Intro() {
  return (
    <div className="introSection">
      <div className="introWrapper">
        <div className="introText">
          <SectionTitle text={"POMPEO POTTERY"} />
          <div className="introTextHead">
            Unique Porcelain <span className="specialEmblem">&</span> Stone
            Collection
          </div>
          <div className="introTextBody">
            Unique & modern pottery made by our master in porcelain & stones
          </div>
          <Button text={"Shop collection"} />
        </div>
        <div className="introPhoto">
          <img src={IntroPhoto} />
        </div>
      </div>
    </div>
  );
}

export default Intro;
