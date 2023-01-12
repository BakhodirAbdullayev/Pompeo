import React from "react";
import Logo from "../../img/logo.png";
import FooterContact from "./FooterContact";
import "./Footer.scss";

function Footer() {
  const contact = [
    {
      id: 1,
      name: "email",
      logo: "fa-solid fa-envelope",
      text: "pompeopotery@gmail.com",
      link: "mailto:pompeopotery@gmail.com",
    },
    {
      id: 2,
      name: "find",
      logo: "fa-solid fa-location-dot",
      text: `Central Park, Manhattan New York, 1101`,
      link: "https://map.google.com",
    },
    {
      id: 3,
      name: "call",
      logo: "fa-solid fa-phone",
      text: "+1 292 345 678",
      link: "tel:+1 292 345 678",
    },
  ];
  return (
    <div className="footerSection container">
      <a href="./index.html" className="footerLogo">
        <img src={Logo} alt="logo" />
      </a>
      <div className="footerTitle">
        I have always striven to fix beauty in wood, stone, glass or pottery,
        that has been my creed.
      </div>
      <div className="footerContact">
        {contact.map((item) => (
          <FooterContact
            name={item.name}
            logo={item.logo}
            link={item.link}
            text={item.text}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Footer;
