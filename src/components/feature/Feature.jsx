import React from 'react'
import './feature.css';
const Feature = ({ logoURL, text, linkDemonstrate }) => {
    return (
        <div className='pflo__feature'>
            <div className='pflo__feature-title'>
                <div />
                <a href={linkDemonstrate}>
                    <img src={logoURL} alt="logo" />

                </a>
            </div>
            <div className='pflo__feature-content'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature