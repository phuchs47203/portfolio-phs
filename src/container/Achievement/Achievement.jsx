import React from 'react'
import './achievement.css';
import { imagess } from '../../constants';
import { Feature } from '../../components';
import { FaAward } from 'react-icons/fa';
const achieDATA = [
    {
        logourl: imagess.score,
        text: 'Medium score at UIT University: 8.9 (Four consecutive semester).',
        linkDemonstrate: 'https://drive.google.com/file/d/1H1ZkCTncpywCk26wi_Ea25rN8gLWOEn1/view',
    },
    {
        logourl: imagess.scholarship,
        text: 'I received Two Scholarship Promote learning at UIT University (Excellent type 14.400.000 VND and 12.000.000 VND).',
        linkDemonstrate: 'https://drive.google.com/file/d/1H1ZkCTncpywCk26wi_Ea25rN8gLWOEn1/view'
    },
    {
        logourl: imagess.toeic,
        text: 'I have TOEIC Certificate 2 skills Listening - Reading (405 - 26/07/2022).',
        linkDemonstrate: 'https://drive.google.com/file/d/1H1ZkCTncpywCk26wi_Ea25rN8gLWOEn1/view'
    }

]

const Achievement = () => {
    return (
        <div className='pflo__achiev' id='achievement'>
            <div className='pflo__achiev-heading'>
                <h1 className='gradient__text'>ACHIEVEMENT</h1>
                <FaAward />
            </div>
            <div className='pflo__achiev-content'>
                {
                    achieDATA.map((item, index) =>
                        <Feature logoURL={item.logourl} text={item.text} linkDemonstrate={item.linkDemonstrate} />
                    )
                }
            </div>
        </div>
    )
}

export default Achievement