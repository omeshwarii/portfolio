import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  const scrollToLine = () => {
    const lineElement = document.getElementById('line');
    if (lineElement) {
      lineElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
          <nav className="navbar">  
            <div className="desktopMenu">
                <Link to="projects" onClick={scrollToLine} className="desktopMenuListItem">Projects</Link>
                <Link to="skills" className="desktopMenuListItem">Skills</Link>
                <Link to="about" className="desktopMenuListItem">About</Link>
                <Link to="contact" className="desktopMenuListItem">Contact</Link>
            </div>
          </nav>
  )
}

export default Navbar