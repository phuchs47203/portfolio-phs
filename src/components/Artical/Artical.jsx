import React from 'react'
import './artical.css';
import { MdOndemandVideo } from 'react-icons/md';
import { MdInsertComment } from 'react-icons/md';
import { IoLogoGithub } from 'react-icons/io';

const Artical = ({ imgURL, date, title, description, linkcode, linkdemo, linkcomment }) => {
    return (
        <div className='pflo__pflo-article'>
            <div className='pflo__pflo-article-image'>
                <img src={imgURL} alt="imgPorject" />
            </div>
            <div className='pflo__pflo-article-content'>
                <div>
                    <h3>{date}</h3>
                    <h2>{title}</h2>
                </div>
                <p>{description}</p>
                <div className='pflo__pflo-article-content-links'>
                    <a href={linkcode}>
                        <IoLogoGithub style={{ color: "rgb(94, 22, 10)" }} />
                    </a>
                    <a href={linkdemo}>
                        <MdOndemandVideo style={{ color: "rgb(199, 98, 110)" }} />
                    </a>
                    <a href={linkcomment}>
                        <MdInsertComment style={{ color: "rgb(210, 113, 28)" }} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Artical