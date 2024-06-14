import React from 'react'
import './achievement.css';
import { imagess } from '../../constants';
import { Feature } from '../../components';
import { FaAward } from 'react-icons/fa';
const achieDATA = [
    {
        logourl: imagess.score,
        text: 'Medium score at UIT University: 8.81/10 (Five consecutive semesters). Click icon to see details',
        linkDemonstrate: 'https://drive.google.com/file/d/1mhUAVZcDfL5miRptiyXnEOHD0uhG6-D_/view?usp=sharing',
    },
    {
        logourl: imagess.scholarship,
        text: 'I received Three Scholarship Promote learning at UIT University (Excellent type 14.400.000 VNĐ, 13.200.000 VNĐ and 12.000.000 VNĐ).',
        linkDemonstrate: 'https://drive.google.com/file/d/1mhUAVZcDfL5miRptiyXnEOHD0uhG6-D_/view?usp=sharing'
    },
    // {
    //     logourl: imagess.toeic,
    //     text: 'I have TOEIC Certificate 2 skills Listening - Reading (405 - 26/07/2022).',
    //     linkDemonstrate: 'https://drive.google.com/file/d/1mhUAVZcDfL5miRptiyXnEOHD0uhG6-D_/view?usp=sharing'
    // }

]

const Achievement = () => {
    return (
        <div className='pflo__achiev' id='achievement'>
            <div className='pflo__achiev-heading'>
                <h1 className='gradient__text'>Achievement</h1>
                <FaAward />
            </div>
            <div className='pflo__achiev-content'>
                {
                    achieDATA.map((item, index) =>
                        <Feature logoURL={item.logourl} text={item.text} linkDemonstrate={item.linkDemonstrate} key={index}/>
                    )
                }
            </div>
        </div>
    )
}

export default Achievement