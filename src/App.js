import React from "react";
import Navbar from "./components/navbar/index";
import About from "./components/about/index";
import Skills from "./components/skills/index";
import Projects from "./components/projects/index";
import Contact from "./components/contact/index";

import './App.css';

const App = () => (
  <div className="App">
    <Navbar/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
  </div>
);

export default App;
