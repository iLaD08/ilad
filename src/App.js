import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/index";
import ResponsiveNavbar, { Burger } from "./components/responsive-navbar/index";
import AboutPage from "./pages/about-page/index";
import ProjectPage from "./pages/project-page/index";
import ContactPage from "./pages/contact-page/index";
import NotFound from "./pages/404-page/index";

import './App.css';

const App = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
   return (
    <div className="App">
      <Navbar/>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <ResponsiveNavbar open={open} setOpen={setOpen} />
        </div>
      <Switch>
          <Route exact path="/" component={AboutPage} />
          <Route exact path="/projects" component={ProjectPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route component={NotFound} />
      </Switch>
    </div>
  )
};

export default App;
