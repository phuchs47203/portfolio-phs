import React from 'react'
import './portfolio.css';
import images from '../../constants/images';
import { Artical } from '../../components';

import FeaturePortfolio from '../../components/FeaturePortfolio/FeaturePortfolio';
const projectDATA = [
    {
        urlimg: images.helmerts_fe,
        date: 'Oct 15, 2023',
        title: 'E-COMMERCE - FrontEnd - In Process',
        description: 'ReactJS, CSS, Javascript',
        srccode: 'https://github.com/phuchs47203/helmerts-ec-phs',
        democode: 'https://drive.google.com/file/d/1CG7Xl1yOXmbBqsReIzbl-UGSR_KdK2hV/view?usp=sharing',
        commen: '#comment'
    },
    {
        urlimg: images.helmerts_be,
        date: 'Oct 15, 2023',
        title: 'E-COMMERCE - BackEnd - In Process',
        description: 'Laravel Framework-PHP, Xampp-MySQL',
        srccode: 'https://github.com/phuchs47203/helmerts-phs-ec-be',
        democode: 'https://drive.google.com/file/d/1CG7Xl1yOXmbBqsReIzbl-UGSR_KdK2hV/view?usp=sharing',
        commen: '#comment'
    },
    {
        urlimg: images.login_security,
        date: 'Aug 28, 2023',
        title: 'Spring Security with Login and Registration - BackEnd - In Process',
        description: 'Springboot, Spring Security, MySQL, Hibernate. Authentication and Authorization to Java applications. Complete Registration Flow with Email Verification, Resend Email Verification Code, Forgot Password, Change Password, and Login Functionality',
        srccode: 'https://github.com/phuchs47203/spring_security_client_basic_token.git',
        democode: 'https://drive.google.com/file/d/1CG7Xl1yOXmbBqsReIzbl-UGSR_KdK2hV/view?usp=sharing',
        commen: '#comment'
    },
    {
        urlimg: images.employee_fe,
        date: 'Aug 20, 2023',
        title: 'Employee Management- FrontEnd - Finished',
        description: 'ReactJS, CSS, Javascript',
        srccode: 'https://github.com/phuchs47203/manage_employee_basic_fe.git',
        democode: 'https://drive.google.com/file/d/1CG7Xl1yOXmbBqsReIzbl-UGSR_KdK2hV/view?usp=sharing',
        commen: '#comment'
    },
    {
        urlimg: images.employee_be,
        date: 'Aug 20, 2023',
        title: 'Employee Management- BackEnd - Finished',
        description: 'Springboot, MySQL, Hibernate. Create the APIs needed to perform operations with databases, store employee information, and image profile',
        srccode: 'https://github.com/phuchs47203/manage_employee_basic_be.git',
        democode: 'https://drive.google.com/file/d/1CG7Xl1yOXmbBqsReIzbl-UGSR_KdK2hV/view?usp=sharing',
        commen: '#comment'
    },

    {
        urlimg: images.pfloimg,
        date: 'Aug 04, 2023',
        title: 'Portfolio Website - In Process',
        description: 'ReactJS, CSS, Javascript',
        srccode: 'https://github.com/phuchs47203/phs_portfolio.git',
        democode: 'https://portfolio-phs.vercel.app/',
        commen: '#comment'
    },
    {
        urlimg: images.post_fe,
        date: 'Aug 15, 2023',
        title: 'Artical- FrontEnd - Finished',
        description: 'ReactJS, CSS, Javascript',
        srccode: 'https://github.com/phuchs47203/post_front_end.git',
        democode: 'https://drive.google.com/file/d/1CG7Xl1yOXmbBqsReIzbl-UGSR_KdK2hV/view?usp=sharing',
        commen: '#comment'
    },
    {
        urlimg: images.post_be,
        date: 'Aug 15, 2023',
        title: 'Artical- BackEnd - Finished',
        description: 'Springboot, MySQL, Hibernate',
        srccode: 'https://github.com/phuchs47203/post_back_end.git',
        democode: 'https://drive.google.com/file/d/1CG7Xl1yOXmbBqsReIzbl-UGSR_KdK2hV/view?usp=sharing',
        commen: '#comment'
    },
    {
        urlimg: images.gptweb,
        date: 'Jul 25, 2023',
        title: 'What GPT3 Website - Finished',
        description: 'ReactJS, CSS, Javascript',
        srccode: 'https://github.com/phuchs47203/recgpt.git',
        democode: 'https://recgpt.vercel.app/',
        commen: '#comment'
    },
    {
        urlimg: images.restAPI,
        date: 'Jul 15, 2023',
        title: 'Practice Rest API basic - Finished',
        description: 'Practice RestAPI, Springboot, Hibernate, JAVA',
        srccode: 'https://github.com/phuchs47203/RestAPIBasic.git',
        democode: '',
        commen: '#comment'
    },
    {
        urlimg: images.appThuVien,
        date: 'Jun 08, 2023',
        title: 'Library Management - Finished',
        description: 'Project of Library Management System: JAVA, System analysis and design, Built Database, User Authorization, JDBC, MVC famework',
        srccode: 'https://github.com/phuchs47203/App_ThuVien.git',
        democode: '',
        commen: '#comment'
    },
    {
        urlimg: images.loginSpring,
        date: 'Jul 18, 2023',
        title: 'Login and Registration using Spring boot - In Process',
        description: 'Practice Springboot, Hibernate, Send Email, Login User',
        srccode: 'https://github.com/phuchs47203/Login_and_Registration.git',
        democode: '',
        commen: '#comment'
    },
    {
        urlimg: images.shoppee,
        date: 'Jul 09, 2023',
        title: 'Practice shoppe HTML, CSS',
        description: 'Practice HTML, CSS, Javascript',
        srccode: 'https://github.com/phuchs47203/shopee.git',
        democode: '',
        commen: '#comment'
    }
]

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
        // <div className='pflo__portfolio' id='portfolio'>
        //     <div className='pflo__portfolio-heading'>
        //         <h1 className='gradient__text'>PORTFOLIO</h1>
        //         <p>Each project represents my development</p>
        //     </div>
        //     <div className='pflo__portfolio-container'>
        //         {
        //             projectDATA.map((item, index) =>
        //                 <Artical imgURL={item.urlimg} date={item.date} title={item.title}
        //                     description={item.description} linkcode={item.srccode} linkdemo={item.democode} linkcomment={item.commen} key={index} />
        //             )
        //         }
        //     </div>
        // </div>
        <div className='pflo__portfolio' id='portfolio'>
            <div className='pflo__portfolio-heading'>
                <h1 className='gradient__text'>PORTFOLIO</h1>
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