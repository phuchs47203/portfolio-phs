import React, { useState, useEffect } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './FeaturePortfolio.css'
import listPorfolio from '../../data/porfolio.json';
import ProjectItem from '../ProjectItem/ProjectItem';

const FeaturePortfolio = ({ type, typeName }) => {
    const [toggleContent, settoggleContent] = useState(false);
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        if (toggleContent) {
            // Lọc các dự án có project_type là 1 khi toggleContent là true
            const filtered = listPorfolio.porfolios.filter(project => project.project_type === type);
            setFilteredProjects(filtered);
        } else {
            // Xóa danh sách khi toggleContent là false
            setFilteredProjects([]);
        }
    }, [toggleContent]);

    return (
        <div className='pflo-feature_pflo'>
            <div className='pflo-feature_pflo-title-box'>
                {toggleContent
                    ? <div className='pflo-feature_pflo-title' onClick={() => settoggleContent(false)}>
                        {typeName}
                        <AiOutlineMinus className='scale-up-center' />
                    </div>
                    : <div className='pflo-feature_pflo-title' onClick={() => settoggleContent(true)}>
                        {typeName}
                        <AiOutlinePlus className='scale-up-center' />
                    </div>
                }
            </div>
            
            {toggleContent &&
                <div className='pflo-feature_pflo-content'>
                    {
                        filteredProjects.map((item, index) =>
                            <ProjectItem id={item.id} 
                                        name={item.name} 
                                        date={item.date}
                                        description={item.introduce}
                                        listicon={item.tech_icon} key={item.id}
                                        linkgit={item.link_git}
                                        linkdemo={item.video}
                                        object={item}
                                        linkcomment="#comment"/>
                        )
                    }
                </div>
                // const ProjectItem = ({ id, name, date, description, listicon}) => {

            }
        </div>
    )
}

export default FeaturePortfolio