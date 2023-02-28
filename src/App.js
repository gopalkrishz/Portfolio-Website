import React from "react"
import "./App.css"
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import ProjectDisplay from "./Pages/ProjectDisplay"
import About from "./Pages/About"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Contact from "./Pages/Contact"
function App(){
  return(
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/projects/:id" element={<ProjectDisplay/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
