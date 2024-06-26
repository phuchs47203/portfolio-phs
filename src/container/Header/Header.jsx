import React from 'react'
import './header.css';
import imglogo from '../../assets/aboutmecut55.jpg';
import { ImLinkedin } from 'react-icons/im';
import { IoLogoGithub } from 'react-icons/io';
import { IoLogoYoutube } from "react-icons/io";

const Header = () => {
    return (
        <div className='pflo__header' id='home'>
            <div className='pflo__header-content'>
                <h1 className='gradient__text'>Hi there ! My name is Phuc Tran Hoang</h1>
                <p>I'm a fresher looking for full-time job as a Data Analyst, Data Engineer, Database Administrator, Back End JAVA Developer (Springboot)</p>
                <div className='pflo__header-content-links'>
                    <a href="https://www.linkedin.com/in/tran-hoang-phuc-685486245/">
                        <ImLinkedin />
                    </a>
                    <a href="https://github.com/phuchs47203">
                        <IoLogoGithub />
                    </a>
                    <a href="https://www.youtube.com/@codewithphs6702">
                        <IoLogoYoutube />
                    </a>
                </div>
            </div>
            <div className='pflo__header-logo'>
                <div>
                    <img src={imglogo} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Header