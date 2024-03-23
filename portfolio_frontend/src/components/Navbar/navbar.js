import React, { useState } from 'react'
import './navbar.css'
import {Link} from 'react-scroll'
import menu from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
          <nav className="navbar">
            <a href="/" className="pageTitle">OJ</a>
            <div className="desktopMenu">
                <Link activeClass='active' to="projects" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Skills</Link>
                <Link activeClass='active' to="about" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to="contact" spy={true} smooth={true} offset={60} duration={500}  className="desktopMenuListItem">Contact</Link>
            </div>

            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display : showMenu? 'flex' : 'none'}} >
                <Link activeClass='active' to="projects" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to="about" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-100} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
          </nav>
  )
}

export default Navbar