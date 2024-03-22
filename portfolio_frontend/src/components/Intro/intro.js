import React from 'react'
import './intro.css'
import linkedinImg from '../../assets/linkedin-icon.png'
import gitImg from '../../assets/git-icon2.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">I'm < span className="introName">Omeshwari Jakkula</span></span>
        <p className="introPara">I'm a recent graduate with a masters degree in Computer Science, welcome to my portfolio</p>
      
      <div className="links">
      <a href="https://github.com/omeshwarii" className="linkItem">
      <img src={gitImg} alt="GitHub" className="gitImg" />
      </a>
      <a href="https://www.linkedin.com/in/omeshwarijakkula/" className="linkItem">
      <img src={linkedinImg} alt="LinkedIn" className="linkedinImg" />
      </a>
      </div>
      </div>
    </section>
  )
}

export default Intro