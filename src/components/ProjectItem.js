import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Styles/Project.css"

function ProjectItem({id,image,name}) {
    const navigate =useNavigate();

  return (
    <div className='projectItem' onClick={()=>{navigate("/Projects/"+id)}}>
        <div style={{backgroundImage:`url(${image})`}} className="bgImage"></div>
        <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem