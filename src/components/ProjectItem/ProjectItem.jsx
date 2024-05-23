import React, { useState, useEffect } from 'react'
import './ProjectItem.css'
import { imagess } from '../../constants';
import { Link, useNavigate } from 'react-router-dom';
import { MdOndemandVideo } from 'react-icons/md';
import { MdInsertComment } from 'react-icons/md';
import { IoLogoGithub } from 'react-icons/io';
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { ProjectDesscription } from '../../container';
import listPorfolio from '../../data/porfolio.json';

const ProjectItem = ({ id, name, date, description, listicon, linkgit, linkdemo, linkcomment, object }) => {
    const navigate = useNavigate();
    const [toggle, settoggle] = useState(false);
    const updateToggle = () => {
        settoggle(false);
    }
    return (
        <div className='pflo-project_item fade-in'>
            <div className='pflo-project_item-header'>
                <div className='pflo-project_item-header-name'>
                    <h2>{name}</h2>
                </div>
                <div className='pflo-project_item-icon-box'>
                    {listicon.map((item, index) =>
                        <div className='pflo-project_item-icon' key={index}>
                            <img src={"https://drive.google.com/thumbnail?id=" + item.img_icon + "&sz=w1000"} alt="Tech Icon" />
                        </div>
                    )
                    }
                </div>

            </div>
            <div className='pflo-project_item-date'>
                <p>{date}</p>
            </div>
            <div className='pflo-project_item-description' dangerouslySetInnerHTML={{ __html: description }}>
            </div>
            <div className='pflo-project_item-link'>
                <div className='pflo-project_item-link-box'>
                    <div className='pflo-project_item-link-icon'>
                        <a href={linkgit}>
                            <IoLogoGithub style={{ color: "rgb(94, 22, 10)" }} />
                        </a>
                        <a href={linkdemo}>
                            <MdOndemandVideo style={{ color: "rgb(199, 98, 110)" }} />
                        </a>
                        <a href={linkcomment}>
                            <MdInsertComment style={{ color: "rgb(210, 113, 28)" }} />
                        </a>
                    </div>
                    <div className='pflo-project_item-link-next_page'>
                      
                        <a href={object.details}>
                            <div className='pflo-project_item-link-next_page-box'>

                                <p>See more</p>
                                <BsArrowUpRightSquareFill className="icon-arrow" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            {/* {toggle &&
                <div className='pflo-project_item-Detials'>
                    <ProjectDesscription
                        object={object} updateToggle={updateToggle} />
                </div>
            } */}
        </div>
    )
}

export default ProjectItem