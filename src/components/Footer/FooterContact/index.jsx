import React from "react";
import "./FooterContact.scss";

function FooterContact(props) {
  const { name, logo, text, link } = props;
  return (
    <div className="contactItem">
      <div className="itemIcon">
        <i className={logo}></i>
      </div>
      <div className="itemHead">{name}</div>
      <a href={link}> {text} </a>
    </div>
  );
}

export default FooterContact;
