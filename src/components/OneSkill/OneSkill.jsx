import React from 'react';
import './oneskill.css';
import { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { VscEyeClosed } from 'react-icons/vsc';


const OneSkill = ({ imgurl, content }) => {
    const [toggleMenu, settoggleMenu] = useState(false);
    return (
        <div className='pflo_oneskill'>
            {toggleMenu
                ? <div className='close-icon'> <VscEyeClosed onClick={() => settoggleMenu(false)} /></div>
                : <img src={imgurl} alt="logoSkill" onClick={() => settoggleMenu(true)} />
            }
            {
                toggleMenu && <div className='background_transparent ' ></div>
            }
            {toggleMenu && (
                <div className='pflo_oneskill-content-parent'>
                    <div className='pflo_oneskill-content scale-up-center'>
                        <p>{content}</p>
                    </div>
                </div>
            )

            }
        </div>
    )
}

export default OneSkill