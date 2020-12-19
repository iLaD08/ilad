import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/index";
import AboutPage from "./pages/about-page/index";
import ProjectPage from "./pages/project-page/index";
import ContactPage from "./pages/project-page/index";

import './App.css';

const App = () => (
  <div className="App">
    <Navbar/>
    <Switch>
        <Route exact path="/" component={AboutPage} />
        <Route path="/projects" component={ProjectPage} />
        <Route path="/contact" component={ContactPage} />
    </Switch>
  </div>
);

export default App;
