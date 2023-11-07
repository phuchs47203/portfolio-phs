import React from 'react'
import './portfolio.css';
import images from '../../constants/images';
import { Artical } from '../../components';
const projectDATA = [

    {
        urlimg: images.employee_fe,
        date: 'Aug 20, 2023',
        title: 'Employee Management- FrontEnd - Finished',
        description: 'ReactJS, CSS, Javascript',
        srccode: 'https://github.com/phuchs47203/manage_employee_basic_fe.git',
        democode: 'https://manage-employee-fe.vercel.app/',
        commen: '#comment'
    },
    {
        urlimg: images.employee_be,
        date: 'Aug 20, 2023',
        title: 'Employee Management- BackEnd - Finished',
        description: 'Springboot, MySQL, Hibernate. Create the APIs needed to perform operations with databases, store employee information, and image profile',
        srccode: 'https://github.com/phuchs47203/manage_employee_basic_be.git',
        democode: '',
        commen: '#comment'
    },
    {
        urlimg: images.login_security,
        date: 'Aug 28, 2023',
        title: 'Spring Security with Login and Registration - BackEnd - In Process',
        description: 'Springboot, Spring Security, MySQL, Hibernate. Authentication and Authorization to Java applications. Complete Registration Flow with Email Verification, Resend Email Verification Code, Forgot Password, Change Password, and Login Functionality',
        srccode: 'https://github.com/phuchs47203/spring_security_client_basic_token.git',
        democode: '',
        commen: '#comment'
    },
    {
        urlimg: images.pfloimg,
        date: 'Aug 04, 2023',
        title: 'Portfolio Website - In Process',
        description: 'ReactJS, CSS, Javascript',
        srccode: 'https://github.com/phuchs47203/phs_portfolio.git',
        democode: '/',
        commen: '#comment'
    },
    {
        urlimg: images.post_fe,
        date: 'Aug 15, 2023',
        title: 'Artical- FrontEnd - Finished',
        description: 'ReactJS, CSS, Javascript',
        srccode: 'https://github.com/phuchs47203/post_front_end.git',
        democode: 'https://post-front-end.vercel.app/',
        commen: '#comment'
    },
    {
        urlimg: images.post_be,
        date: 'Aug 15, 2023',
        title: 'Artical- BackEnd - Finished',
        description: 'Springboot, MySQL, Hibernate',
        srccode: 'https://github.com/phuchs47203/post_back_end.git',
        democode: '/',
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
        title: 'Library Management',
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
const Portfolio = () => {
    return (
        <div className='pflo__portfolio' id='portfolio'>
            <div className='pflo__portfolio-heading'>
                <h1 className='gradient__text'>PORTFOLIO</h1>
                <p>Each project represents my development</p>
            </div>
            <div className='pflo__portfolio-container'>
                {
                    projectDATA.map((item, index) =>
                        <Artical imgURL={item.urlimg} date={item.date} title={item.title}
                            description={item.description} linkcode={item.srccode} linkdemo={item.democode} linkcomment={item.commen} />
                    )
                }
            </div>
        </div>
    )
}
export default Portfolio