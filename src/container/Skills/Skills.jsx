import React, { useState } from 'react'
import './skills.css';
import { imagess } from '../../constants';
import { HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { OneSkill } from '../../components';
const skillData = [
    {
        imgURL: imagess.java,
        content: 'I can write Java fluently. I have made some application using java and connect database'
    },
    {
        imgURL: imagess.cplusplus,
        content: 'I can write C++ code fluently and use it in complicate algorithms'
    },
    {
        imgURL: imagess.springboot,
        content: 'Can I use MVC model in Application Programming, using Spring boot for Java Backend'
    },
    {
        imgURL: imagess.laravel,
        content: 'Laravel 10.x framework in php'
    },
    {
        imgURL: imagess.redis,
        content: 'Redis with ditributed database'
    },
    {
        imgURL: imagess.hibernate,
        content: 'I use Hibernate to connect and process Database.'
    },
    {
        imgURL: imagess.html,
        content: 'I wrote some websites using HTML with css, reactjs and some backend framework '
    },
    {
        imgURL: imagess.css,
        content: 'I designed some websites using CSS. You can find at Portfolio.'
    },
    {
        imgURL: imagess.reacticon,
        content: 'I use ReactJS to create Frontend websites.'
    },
    {
        imgURL: imagess.oracle,
        content: 'I can use Oracle to manage the Database. I can write SQL from basic to advanced, create Trigger, Function, Procedure, ... I know the user authorization in the database.'
    },
    {
        imgURL: imagess.mysql,
        content: 'I can use MySQL to manage the Database. I can write SQL from basic to advanced, create Trigger, Function, Procedure, ... I know the user authorization in the database'
    },
    {
        imgURL: imagess.sqlserver,
        content: 'I can use SQL Server to manage the Database. I can write SQL from basic to advanced, create Trigger, Function, Procedure, ...'
    },
    {
        imgURL: imagess.git,
        content: 'I use Git to manage Programming projects (push code to github, clone code from github, config, ...)'
    },
    {
        imgURL: imagess.postman,
        content: 'Postman help me check Code in Java Spring Boot programming.'
    },
    {
        imgURL: imagess.oop,
        content: 'I can use OOP in C++, Java. I have knowledge of Inheritance, Encapsulation, Polymorphism and Abstraction to design aplication'
    },
    {
        imgURL: imagess.dsa,
        content: 'I know and I can code Sorting Algorithms, Tree Structures, Linked Lists, Hash Tables.'
    }
];

const Skills = () => {

    return (
        <div className='pflo__skills ' id='skills'>
            <div className='pflo__skills-heading'>
                <h1 className='gradient__text'>SKILLS</h1>
                <p className='margin__p'>These are all my skills which I learned in college and taught myself</p>
            </div>
            <div className='pflo__skill-container'>

                {
                    skillData.map((item, index) =>
                        <OneSkill imgurl={item.imgURL} content={item.content} />
                    )
                }

            </div>
        </div>
    )
}

export default Skills
