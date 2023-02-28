import React from 'react'
import "../Styles/About.css"
import profile from "../assets/prof.jpeg"


function About() {
return (
  <div className='container'>
<div className="left">
<h1>About me</h1>
<p>Hi! This is Gopala Krishnan an IT Student ,currently pursuing the Bachelor's Degree in IT .I was passionated  in FullStackDevelopment MERN Stack,Front-End Web
Development using ReactJS and interested in Machine learning.Always Interested in learning new stuffs and master in it within a short time.</p>
{/* <button>click for resume</button> */}
</div>
<div className='right'><img src={profile}/></div>
</div>);
}

export default About;