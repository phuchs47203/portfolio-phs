import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './ProjectDesscription.css'
import { HiX } from 'react-icons/hi';
import { imagess } from '../../constants';
const ProjectDesscription = ({object, updateToggle}) => {
    
  return (
    <div id='ProjectDesscription' className='pflo-porject_item-description fall-in-up'>
        <div className='pflo-porject_item-description-back'>
       
       

        <HiX onClick={updateToggle}/>
        </div>
        
<div>
        <div>
          grrg
          ffrg
        </div>

        <div>
          grrg
          ffrg
        </div>
        <div>
          grrg
          ffrg
        </div>
        
        <div>
          grrg
          ffrg
        </div>
        <img src={imagess.appThuVien} alt="ghrh" />
        <img src={imagess.gptweb} alt="ghrh" />

        <p>{object.introduce}</p>
        <div>
          grrg
          ffrg
        </div>

        <div>
          grrg
          ffrg
        </div>
</div>
       
        <div>
          grrg
          ffrg
        </div>
        <div>
          grrg
          ffrg
        </div>
        </div>
  )
}

export default ProjectDesscription