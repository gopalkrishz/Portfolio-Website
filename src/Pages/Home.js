import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from "@material-ui/icons/GitHub"
import "../Styles/Home.css"


function Home() {
  return (
    <div className='home'>
    <div className='about'>
      <h2>Hi, I'm GopalaKrishnan</h2>
    
    <div className='prompt'>
      <p>An IT student with a passionate FullStackDeveloper,Likes Front-end.</p>
      <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/gopal-guna-93b6a0227/')}/>
      <GithubIcon onClick={() => window.open('https://github.com/gopalkrishz')}/>
    </div>
  </div>
    <div className='skills'>
      <h1>Skills</h1>
      <ol className='list'>
        <li className='item'>
          <h2>Front-End</h2>
          <span>Html,CSS,JavaScript,ReactJS,
          BootStrap,Material-UI,Styled-Components,</span>
        </li>
        <li className='item'>
          <h2>Back-End</h2>
          <span>NodeJs,ExpressJS,MongoDB,
          Mongoose,JDBC,MySQL,Oracle</span>
        </li>
        <li className='item'>
          <h2>Languages konwn</h2>
          <span>C,Java,JavaScript,CSharp</span>
        </li>
      </ol>
    </div>
  
    </div>
  )
}
 
export default Home;