import React from "react";
import Button from "../Button";
import SectionTitle from "../SectionTitle";
import "./About.scss";

function About() {
  return (
    <div className="aboutSection">
      <div className="aboutText container">
        <SectionTitle titleClass={'aboutTextTitle'} text={'pompeo Pottery'} />
        <div className="aboutTextHead">Ready to start shopping?</div>
        <div className="aboutTextBody">
          Lorem ipsum dolor sit amet,
          <a href="#">consectetur adipiscing elit</a>. Suspendisse varius enim
          in eros elementum.
        </div>
        <Button text={'new collection'} btnClassName={'aboutLink'} />
      </div>
    </div>
  );
}

export default About;
