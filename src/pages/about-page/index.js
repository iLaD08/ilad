import React from "react";
import About from "../../components/about/index";
import Skills from "../../components/skills/index";

const AboutPage = () => {
  React.useEffect(() => document.title = 'iLaD | Hello World!', [])

  return (
    <div className="About">
        <About/>
        <Skills/>
    </div>
  );
};

export default AboutPage;
