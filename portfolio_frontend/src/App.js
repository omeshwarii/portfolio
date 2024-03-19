import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
