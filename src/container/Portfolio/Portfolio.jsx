import React from 'react'
import './portfolio.css';

import FeaturePortfolio from '../../components/FeaturePortfolio/FeaturePortfolio';


// const ProjectType = [
//     {
//         type: 1,
//         typeName: "Data Analysis - Data Warehouse - SSIS - SSAS - Power BI"
//     },
//     {
//         type: 2,
//         typeName: "Data Engineering - Deep Learning"
//     },
//     {
//         type: 3,
//         typeName: "Distributed Database System - Oracle - Redis"
//     },
//     {
//         type: 4,
//         typeName: "Back End - JAVA SpringBoot - Hibernate"
//     },
//     {
//         type: 5,
//         typeName: "FullStack Development - Reactjs - Laravel"
//     }
// ]
const ProjectType = [
    {
        type: 1,
        typeName: "Data Analysis - Data Warehouse"
    },
    {
        type: 2,
        typeName: "Data Engineering - Data Mining"
    },
    {
        type: 3,
        typeName: "Distributed Database System - Oracle - Redis"
    },
    {
        type: 4,
        typeName: "Back End - JAVA SpringBoot"
    },
    {
        type: 5,
        typeName: "FullStack Development - Reactjs - Laravel"
    }
]
const Portfolio = () => {
    return (        
        <div className='pflo__portfolio' id='portfolio'>
            <div className='pflo__portfolio-heading'>
                <h1 className='gradient__text'>Portfolio</h1>
                <p>Each project represents my development</p>
            </div>
            <div className='pflo__portfolio-Box'>
                <div className='pflo__portfolio-container'>
                    {
                        ProjectType.map((item, index) =>
                            <FeaturePortfolio type={item.type} typeName={item.typeName} key={item} />
                        )
                    }
                </div>
            </div>
            

        </div>
    )
}
export default Portfolio