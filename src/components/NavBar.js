import React, { useState } from 'react'
import {Link} from "react-router-dom" 
import "../Styles/Navbar.css"
import ReorderIcon  from '@material-ui/icons/Reorder'

function NavBar() {
    const [expandNavBar, setExpandNavBar ]= useState(false);
  return (
    <div className='navbar' id={expandNavBar?"open":"close"}>
        <div className='toggleButton'>
            <button onClick={()=>{
                setExpandNavBar(prev=>!prev)//if it true then false else flase then true 
            }}><ReorderIcon/></button>
        </div>
        <div className="links">
        <Link to="/" onClick={()=>{setExpandNavBar(false)}}>Home</Link>
        <Link to ="/Projects" onClick={()=>{setExpandNavBar(false)}}>Projects</Link>
        <Link to="/About" onClick={()=>{setExpandNavBar(false)}}>About</Link>
        <Link to ="/Contact" onClick={()=>{setExpandNavBar(false)}}>Contact </Link>

        </div>
    </div>
  )
}

export default NavBar