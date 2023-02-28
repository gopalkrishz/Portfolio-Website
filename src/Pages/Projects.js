import React from 'react'
import ProjectItem from '../components/ProjectItem'
import "../Styles/Project.css"
import { ProjObj } from '../ProjectObject/ProjObj'

function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
        <div className='projectList'>
        {ProjObj.map((obj,index)=>{
          return <ProjectItem id={index} name={obj.name} image ={obj.image}/>
        })}
        </div>
    </div>
  );
}

export default Projects;