import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
          <nav className="navbar">  
            <div className="desktopMenu">
                <Link to="projects" className="desktopMenuListItem">Projects</Link>
                <Link to="skills" className="desktopMenuListItem">Skills</Link>
                <Link to="about" className="desktopMenuListItem">About</Link>
                <Link to="contact" className="desktopMenuListItem">Contact</Link>
            </div>
          </nav>
  )
}

export default Navbar