import React from 'react';
import './about.css';
// import Myimg from '../../assets/aboutmecut.jpg'
import logoUIT from '../../assets/logoUIT.png'
const About = () => {
    return (
        <div className='pflo__about' id='about'>
            <div className='pflo__about-content'>
                <h1 className='gradient__text'>ABOUT ME</h1>
                <div className='pflo__about-content_UIT'>
                    <h2>I am a student (Third years) at The University of Information Technology (UIT) which a member of Vietnam National University - Ho Chi Minh City (VNU-HCM)</h2>
                    <a href="https://en.uit.edu.vn/">
                        <img src={logoUIT} alt="UIT" />
                    </a>
                </div>
                <p>
                    My major is Information Technology System. So, I passionate about analyse IT system, bulding awesome websites and application. On personal level, I am self-driven & hard working, I am able to adapt and learn very quick. Also, I am really friendly who can fit in any team.
                </p>
            </div>
        </div>
    )
}

export default About