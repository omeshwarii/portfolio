import React from 'react'
import './skills.css'
import frontImg from '../../assets/front-end-icon.png'
import backImg from '../../assets/back-end-icon.png'

const Skills = () => {
  return (
    <section id="skills">
    <span className="skillTitle">Skills</span>
    <div className="skillBars">
        <div className="skillBar">
            <div className="skillBarText">
            <img src={frontImg} alt="" className='frontImg'/>
            <h2>Front-End</h2>
            <p>React, Angular</p>
            </div>
        </div>
        <div className="skillBar">
            <div className="skillBarText">
            <img src={backImg} alt="" className='backImg'/>
            <h2>Back-End</h2>
            <p>Java, node, Python  and Databases (SQL and NoSQL)</p>
            </div>
        </div>
    </div>

    </section>
  )
}

export default Skills