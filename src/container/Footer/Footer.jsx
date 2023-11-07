import React from 'react'
import './footer.css';
import { ImLinkedin } from 'react-icons/im';
import { IoLogoGithub } from 'react-icons/io';
import { ImMail } from 'react-icons/im';
import { BsPhoneVibrate } from 'react-icons/bs';
import { GiPositionMarker } from 'react-icons/gi';
const Footer = () => {
    return (
        <div className='pflo__footer' id='contact'>
            <div className='pflo__footer-heading'>
                <h1 className='gradient__text'>CONTACT ME</h1>
            </div>
            <div className='pflo__footer-content'>
                <div className='pflo__footer-content-groupA'>
                    <div className='pflo__footer-content_link'>
                        <ImMail />
                        <a href='mailto:21522479@mg.uit.edu.vn'>21522479@mg.uit.edu.vn</a>
                    </div>
                    <div className='pflo__footer-content_link'>
                        <ImMail />
                        <a href='mailto:tranhoangphuc0407@gmail.com'>tranhoangphuc0407@gmail.com</a>
                    </div>
                    <div className='pflo__footer-content_link'>
                        <BsPhoneVibrate />
                        <p>0344 855 827</p>
                    </div>
                    <div className='pflo__footer-content_link'>
                        <GiPositionMarker />
                        <p>Linh Trung Ward, Thu Duc District, Ho Chi Minh City</p>
                    </div>
                </div>
                <div className='pflo__footer-content-groupB'>
                    <a href="https://www.linkedin.com/in/tran-hoang-phuc-685486245/">
                        <ImLinkedin />
                    </a>

                    <a href="https://github.com/phuchs47203">
                        <IoLogoGithub />
                    </a>
                </div>
            </div>
            <div className='copy-right'>
                <h6>
                    © 2023 Portfolio PHs - All rights reserved.
                </h6>
            </div>
        </div>
    )
}

export default Footer