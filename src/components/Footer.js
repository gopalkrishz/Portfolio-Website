import React from 'react'
import "../Styles/Footer.css"
import InstagramIcon from "@material-ui/icons/Instagram"
import GithubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/gopal-guna-93b6a0227/')}/>
        <InstagramIcon onClick={() => window.open('https://www.instagram.com/')}/>
        <GithubIcon onClick={() => window.open('https://github.com/gopalkrishz')}/>
        
        </div>
        <p>&copy; 2022 gopalkrishz027@gmail.com</p>
    </div>
  )
}

export default Footer