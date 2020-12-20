import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/index";
import AboutPage from "./pages/about-page/index";
import ProjectPage from "./pages/project-page/index";
import ContactPage from "./pages/contact-page/index";
import NotFound from "./pages/404-page/index";

import './App.css';

const App = () => (
  <div className="App">
    <Navbar/>
    <Switch>
        <Route exact path="/" component={AboutPage} />
        <Route exact path="/projects" component={ProjectPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
