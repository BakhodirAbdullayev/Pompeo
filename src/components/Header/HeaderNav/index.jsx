import React from 'react';
import './HeaderNav.scss'

function HeaderNav() {
    return ( 
        <div className="headerNav">
          <label for="check" className="headerNavIcon">
            <i className="fas fa-bars"></i>
          </label>
          <input type="checkbox" id="check" />
          <label for="check" className="layer"></label>
          <div className="headerNavBurgerLinks">
            <a href="#" className="headerNavLink activeLink">home</a>
            <a href="#" className="headerNavLink">about</a>
            <a href="#" className="headerNavLink">shop</a>
            <a href="#" className="headerNavLink">contact</a>
            <a href="#" className="headerNavCart">
              <i className="fa-solid fa-cart-shopping"></i>
              Cart
            </a>
          </div>
          <div className="headerNavLinks">
            <a href="#" className="headerNavLink activeLink">home</a>
            <a href="#" className="headerNavLink">about</a>
            <a href="#" className="headerNavLink">shop</a>
            <a href="#" className="headerNavLink">contact</a>
            <a href="#" className="headerNavCart">
              <i className="fa-solid fa-cart-shopping"></i>
              Cart
            </a>
          </div>
        </div>
     );
}

export default HeaderNav;