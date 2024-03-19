import React from 'react'
import './projects.css'
import UIdesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import Appdesign from '../../assets/app-design.png'



const Projects = () => {
  return (
    <section id="projects">
        <span className="projectTitle">Projects</span>
        <div className="projectBars">
        <div className="projectBar">
        <img src={UIdesign} alt="" className="projectBarImg"/>
        <div className="projectBarText">
            <h2>Yummy in Tummy</h2>
            <p>Allows users to browse through food items, explore ingredients, and view calorie information, it also enables users to apply filters based on their preferences and dietary requirement.</p>
            <div className="buttonContainer">
            <a href="https://yumintummy.netlify.app/" className="liveBtn" >Live demo</a> 
            <a href="https://github.com/omeshwarii/Yummy-In-Tummy" className="codeBtn" >Code</a> 
            </div>
          </div>
         </div>
         <div className="projectBar">
        <img src={WebDesign} alt="" className="projectBarImg"/>
        <div className="projectBarText">
            <h2>Give It To Us</h2>
            <p>A dynamic web site that allows people to give away their goods, enables buying, selling, and posting goods.</p>
            <div className="buttonContainer">
            <a href="https://github.com/omeshwarii/Give-It-To-Us" className="liveBtn" >Live demo</a> 
            <a href="https://github.com/omeshwarii/Give-It-To-Us" className="codeBtn" >Code</a> 
            </div>
          </div>
         </div>
         <div className="projectBar">
        <img src={Appdesign} alt="" className="projectBarImg"/>
        <div className="projectBarText">
            <h2>Bowling Socing League</h2>
            <p>Tracks bowling scores for a 2-person team competing weekly, incorporated a handicap scoring system to ensure fairness and accuracy in competitions, enhancing the user experience.</p>
            <div className="buttonContainer">
            <a href="https://github.com/omeshwarii/Give-It-To-Us" className="liveBtn" >Live demo</a> 
            <a href="https://github.com/omeshwarii/Give-It-To-Us" className="codeBtn" >Code</a> 
            </div>
          </div>
         </div>
         <div className="projectBar">
        <img src={Appdesign} alt="" className="projectBarImg"/>
        <div className="projectBarText">
            <h2>industry</h2>
            <p>Allows to place orders, manage order history, details on products</p>
            <div className="buttonContainer">
            <a href="https://github.com/omeshwarii/Give-It-To-Us" className="liveBtn" >Live demo</a> 
            <a href="https://github.com/omeshwarii/Give-It-To-Us" className="codeBtn" >Code</a> 
            </div>
          </div>
         </div>
        </div>
    </section>
  )
}

export default Projects