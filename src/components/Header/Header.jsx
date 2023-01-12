import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav';
import './Header.scss'

function Header() {
    return ( 
        <div className="headerSection">
            <HeaderLogo />
            <HeaderNav />
        </div>
     );
}

export default Header;