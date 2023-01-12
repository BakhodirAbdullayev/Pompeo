import React from 'react';
import './Button.scss'

function Button(props) {
    return ( 
        <a href='#' className={'button ' + props.btnClassName}>
            {props.text}
        </a>
    );
}

export default Button;