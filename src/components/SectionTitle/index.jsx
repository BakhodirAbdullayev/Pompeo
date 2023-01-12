import React from 'react'
import './SectionTitle.scss'

function SectionTitle({text, titleClass}) {
    return ( 
        <span className={'sectionTitle ' + titleClass}>
            {text}
        </span>
     );
}

export default SectionTitle;