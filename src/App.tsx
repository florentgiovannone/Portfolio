import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return(
<>
    <Hero/>
    <NavBar/>
      <AboutMe />
    <Skills/>
    <Projects/>
    <Experiences/>
    <Footer/>
    </>
)
}

export default App
