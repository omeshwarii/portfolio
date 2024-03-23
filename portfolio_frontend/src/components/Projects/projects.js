import React from 'react'
import './projects.css'
import yummyImg from '../../assets/yummyImg.png'
import ToDoImg from '../../assets/todoimg.png'



const Projects = () => {
  return (
    <section id="projects">
        <span className="projectTitle">Projects</span>
        <div className="projectBars">
        <div className="projectBar">
        <img src={yummyImg} alt="" className="projectBarImg"/>
        <div className="projectBarText">
            <h2>Yummy in Tummy</h2>
            <p>Allows users to browse through food items, explore ingredients, and view calorie information, it also enables users to apply filters based on their preferences and dietary requirement.</p>
            <div className="stackContainer">
              <span className="stackType">React</span>
              <span className="stackType">JavaScript</span>
              <span className="stackType">MongoDB</span>
            </div>
            <div className="buttonContainer">
            <a href="https://yumintummy.netlify.app/" className="liveBtn" >Live demo</a> 
            <a href="https://github.com/omeshwarii/Yummy-In-Tummy" className="codeBtn" >Code</a> 
            </div>
            
          </div>
         </div>
         <div className="projectBar">
        <img src={ToDoImg} alt="" className="projectBarImg"/>
        <div className="projectBarText">
            <h2>ToDo List</h2>
            <p>Simple user-friendly tool. Lets you add, check off, and delete tasks</p>
            <div className="stackContainer">
              <span className="stackType">React</span>
              <span className="stackType">TypeScript</span>
            </div>
            <div className="buttonContainer">
            <a href="https://todolist-om.netlify.app/" className="liveBtn" >Live demo</a> 
            <a href="https://github.com/omeshwarii/To-Do-List" className="codeBtn" >Code</a> 
            </div>
          </div>
         </div>
        </div>
    </section>
  )
}

export default Projects