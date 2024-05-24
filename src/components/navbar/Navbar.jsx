import React, { useState } from 'react'
import './navbar.scss';
import logo from '../../assets/phuc-logo-removebg-preview.png'
import { HiX } from 'react-icons/hi';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='pflo__navbar'>
            <div className='pflo__navbar-logo'>
                <a href="#home">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            {/* bonus   'experience' and 'achievement-certificate'  */}
            <ul className='pflo__navbar-links'>
                {['home', 'about', 'skills', 'portfolio', 'achievement', 'comment', 'contact'].map((item,index) => (
                    <li className='pflo__flex p-text' key={index}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className="pflo__navbar-menu">
                {toggle
                    ? < BiMenu style={{ 'display': 'none' }} onClick={() => setToggle(true)} />
                    : < BiMenu onClick={() => setToggle(true)} />
                }

                {toggle && (
                    <div className='fade-in'>
                        <HiX onClick={() => setToggle(false)} />
                        <ul >
                            {['home', 'about', 'skills', 'portfolio', 'achievement', 'comment', 'contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                )}
            </div>
        </nav>
    )
}

export default Navbar