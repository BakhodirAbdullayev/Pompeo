import React from "react";
import Logo from "../../img/logo.png";
import FooterContact from "./FooterContact";
import "./Footer.scss";

function Footer() {
  const contact = [
    {
      name: "email",
      logo: "fa-solid fa-envelope",
      text: "pompeopotery@gmail.com",
      link: "mailto:pompeopotery@gmail.com",
    },
    {
      name: "find",
      logo: "fa-solid fa-location-dot",
      text: `Central Park, Manhattan New York, 1101`,
      link: "https://map.google.com",
    },
    {
      name: "call",
      logo: "fa-solid fa-phone",
      text: "+1 292 345 678",
      link: "tel:+1 292 345 678",
    },
  ];
  return (
    <div class="footerSection container">
      <a href="./index.html" class="footerLogo">
        <img src={Logo} alt="logo" />
      </a>
      <div class="footerTitle">
        I have always striven to fix beauty in wood, stone, glass or pottery,
        that has been my creed.
      </div>
      <div class="footerContact">
        {contact.map((item) => (
          <FooterContact
            name={item.name}
            logo={item.logo}
            link={item.link}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}

export default Footer;
