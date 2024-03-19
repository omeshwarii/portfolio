import React from 'react'
import './intro.css'
import linkedinImg from '../../assets/linkedin-icon.png'
import gitImg from '../../assets/git-icon.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">I'm <span className="introName">Omeshwari Jakkula</span></span>
        <p className="introPara">I'm a recent graduate with a masters degree in Computer Science, actively looking for full time opportunites</p>
      </div>
      
      <a href="https://github.com/omeshwarii">
      <img src={gitImg} alt="GitHub" className="gitImg" />
      </a>
      <a href="https://www.linkedin.com/in/omeshwarijakkula/">
      <img src={linkedinImg} alt="LinkedIn" className="linkedinImg" />
      </a>
    </section>
  )
}

export default Intro