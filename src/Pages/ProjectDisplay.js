import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjObj } from '../ProjectObject/ProjObj';
import GithubIcon from "@material-ui/icons/GitHub"
import "../Styles/ProjectDisplay.css"
function ProjectDisplay() {
    const {id} = useParams();
    const Project =ProjObj[id];
  return (
    <div className='project'>
        <h1>{Project.name}</h1>
        <img src={Project.image}/>
        <p><b>Skills:</b>{Project.skills}</p>
        <GithubIcon onClick={() => window.open(`https://github.com/gopalkrishz/${Project.name}`)}/>
    </div>
  )
}

export default ProjectDisplay