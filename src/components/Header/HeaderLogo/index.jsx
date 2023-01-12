import React from 'react';
import './HeaderLogo.scss';
import Logo from '../../../img/logo.png'

function HeaderLogo() {
    return ( 
        <a href="#" className="headerLogo">
            <img src={Logo} />
        </a>
    );
}

export default HeaderLogo;