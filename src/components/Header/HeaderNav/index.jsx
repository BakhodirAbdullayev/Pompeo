import React, { useState } from "react";
import "./HeaderNav.scss";

function HeaderNav() {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="headerNav">
      <div for="check" className="headerNavIcon">
        <i className="fas fa-bars" onClick={onToggle}></i>
      </div>
      <div
        className={toggle ? "layer navToggle" : "layer"}
        onClick={onToggle}
      ></div>
      <div
        className={
          toggle ? "headerNavBurgerLinks navToggle" : "headerNavBurgerLinks"
        }
      >
        <a href="#" className="headerNavLink activeLink">
          home
        </a>
        <a href="#" className="headerNavLink">
          about
        </a>
        <a href="#" className="headerNavLink">
          shop
        </a>
        <a href="#" className="headerNavLink">
          contact
        </a>
        <a href="#" className="headerNavCart">
          <i className="fa-solid fa-cart-shopping"></i>
          Cart
        </a>
      </div>
      <div className="headerNavLinks">
        <a href="#" className="headerNavLink activeLink">
          home
        </a>
        <a href="#" className="headerNavLink">
          about
        </a>
        <a href="#" className="headerNavLink">
          shop
        </a>
        <a href="#" className="headerNavLink">
          contact
        </a>
        <a href="#" className="headerNavCart">
          <i className="fa-solid fa-cart-shopping"></i>
          Cart
        </a>
      </div>
    </div>
  );
}

export default HeaderNav;
